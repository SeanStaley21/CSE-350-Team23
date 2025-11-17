const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for orders (in production, use a database)
let orders = [];
let nextOrderId = 100001;

// Menu items with prices (from your C++ program)
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

// Helper function to calculate order price
function calculateOrderPrice(food, side, drink) {
  let subtotal = 0.0;
  
  // Add food price
  if (menuItems.burger[food]) {
    subtotal += menuItems.burger[food].price;
  } else if (menuItems.hot_dog[food]) {
    subtotal += menuItems.hot_dog[food].price;
  }
  
  // Add side price
  if (menuItems.sides[side]) {
    subtotal += menuItems.sides[side].price;
  }
  
  // Add drink price
  if (menuItems.drinks[drink]) {
    subtotal += menuItems.drinks[drink].price;
  }
  
  // Calculate tax (6% like in C++ program)
  const tax = subtotal * 0.06;
  const total = subtotal + tax;
  
  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    tax: parseFloat(tax.toFixed(2)),
    total: parseFloat(total.toFixed(2))
  };
}

// Helper function to calculate estimated preparation time
function calculateEstimatedTime(food, orderQueue) {
  // Base time for different items
  const baseTime = {
    burger: 8,
    hot_dog: 5
  };
  
  // Get base time
  let estimatedTime = baseTime[food] || 10;
  
  // Add time based on current queue (1 minute per pending/preparing order)
  const activeOrders = orderQueue.filter(o => 
    o.status === 'pending' || o.status === 'preparing'
  ).length;
  
  estimatedTime += activeOrders;
  
  return estimatedTime;
}

// API Routes

// GET all orders
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// GET single order by ID
app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

// POST new order
app.post('/api/orders', (req, res) => {
  const { name, food, side, drink } = req.body;
  
  // Validate required fields
  if (!name || !food || !drink) {
    return res.status(400).json({ error: 'Missing required fields: name, food, drink' });
  }
  
  // Calculate estimated time
  const estimatedTime = calculateEstimatedTime(food, orders);
  
  // Calculate pricing
  const pricing = calculateOrderPrice(food, side || 'none', drink);
  
  // Create new order
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

// PATCH update order status
app.patch('/api/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const orderIndex = orders.findIndex(o => o.id === orderId);
  
  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  // Update order with provided fields
  orders[orderIndex] = {
    ...orders[orderIndex],
    ...req.body,
    id: orderId // Prevent ID from being changed
  };
  
  console.log(`Order #${orderId} updated`);
  res.json(orders[orderIndex]);
});

// DELETE order
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

// GET menu items
app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

// Start server
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
