const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let orders = [];
let nextOrderId = 100001;
const menuItems = {
  burger: {
    classic: { name: 'Classic Burger', price: 4.99 },
    cheeseburger: { name: 'Cheeseburger', price: 5.49 },
    vegie: { name: 'Vegie Burger', price: 5.99 }
  },
  hot_dog: {
    classic: { name: 'Classic Hotdog', price: 3.49 },
    supreme: { name: 'Supreme Hotdog', price: 3.99 },
    vegie: { name: 'Vegie Hotdog', price: 3.79 }
  },
  sides: {
    fries: { name: 'Fries', price: 2.49 },
    salad: { name: 'Salad', price: 3.99 },
    none: { name: 'No Side', price: 0.00 }
  },
  drinks: {
    soda: { name: 'Soda', price: 1.99 },
    water: { name: 'Water', price: 1.00 },
    juice: { name: 'Juice', price: 2.49 }
  }
};

function calculateOrderPrice(food, side, drink) {
  let subtotal = 0.0;
  
  if (menuItems.burger[food]) {
    subtotal += menuItems.burger[food].price;
  } else if (menuItems.hot_dog[food]) {
    subtotal += menuItems.hot_dog[food].price;
  }
  
  if (menuItems.sides[side]) {
    subtotal += menuItems.sides[side].price;
  }
  
  if (menuItems.drinks[drink]) {
    subtotal += menuItems.drinks[drink].price;
  }
  
  // 6% tax
  const tax = subtotal * 0.06;
  const total = subtotal + tax;
  
  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    tax: parseFloat(tax.toFixed(2)),
    total: parseFloat(total.toFixed(2))
  };
}

function calculateEstimatedTime(food, orderQueue) {
  const baseTime = {
    burger: 8,
    hot_dog: 5
  };
  
  let estimatedTime = baseTime[food] || 10;
  
  // Add 1 minute per active order in queue
  const activeOrders = orderQueue.filter(o => 
    o.status === 'pending' || o.status === 'preparing'
  ).length;
  
  estimatedTime += activeOrders;
  
  return estimatedTime;
}

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

app.post('/api/orders', (req, res) => {
  const { name, food, side, drink } = req.body;
  if (!name || !food || !drink) {
    return res.status(400).json({ error: 'Missing required fields: name, food, drink' });
  }
  
  const estimatedTime = calculateEstimatedTime(food, orders);
  const pricing = calculateOrderPrice(food, side || 'none', drink);
  
  const newOrder = {
    id: nextOrderId++,
    name,
    food,
    side: side || 'none',
    drink,
    status: 'pending',
    timestamp: new Date().toISOString(),
    estimatedTime,
    pricing
  };
  
  orders.push(newOrder);
  
  console.log(`New order created: #${newOrder.id} for ${name}`);
  res.status(201).json(newOrder);
});

app.patch('/api/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const orderIndex = orders.findIndex(o => o.id === orderId);
  
  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  orders[orderIndex] = {
    ...orders[orderIndex],
    ...req.body,
    id: orderId
  };
  
  console.log(`Order #${orderId} updated`);
  res.json(orders[orderIndex]);
});

app.delete('/api/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const orderIndex = orders.findIndex(o => o.id === orderId);
  
  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  const deletedOrder = orders.splice(orderIndex, 1)[0];
  console.log(`Order #${orderId} deleted`);
  res.json({ message: 'Order deleted', order: deletedOrder });
});

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('API Endpoints:');
  console.log(`  GET    /api/orders       - Get all orders`);
  console.log(`  GET    /api/orders/:id   - Get single order`);
  console.log(`  POST   /api/orders       - Create new order`);
  console.log(`  PATCH  /api/orders/:id   - Update order`);
  console.log(`  DELETE /api/orders/:id   - Delete order`);
  console.log(`  GET    /api/menu         - Get menu items`);
});
