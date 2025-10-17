import React, { useState, useEffect } from 'react';
import './OrderManagement.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [editingOrder, setEditingOrder] = useState(null);

  // Sample initial orders - replace with API call
  useEffect(() => {
    const sampleOrders = [
      {
        id: 123456,
        name: 'John Doe',
        food: 'burger',
        side: 'fries',
        drink: 'soda',
        status: 'pending',
        timestamp: new Date().toISOString(),
        estimatedTime: 15
      },
      {
        id: 123457,
        name: 'Jane Smith',
        food: 'hot_dog',
        side: 'salad',
        drink: 'water',
        status: 'preparing',
        timestamp: new Date(Date.now() - 300000).toISOString(),
        estimatedTime: 10
      }
    ];
    setOrders(sampleOrders);
  }, []);

  const statusOptions = ['pending', 'preparing', 'ready', 'completed'];

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus }
        : order
    ));
  };

  const updateOrder = (orderId, updatedFields) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, ...updatedFields }
        : order
    ));
    setEditingOrder(null);
  };

  const deleteOrder = (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  const filteredOrders = orders.filter(order => 
    filter === 'all' || order.status === filter
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return '#f39c12';
      case 'preparing': return '#3498db';
      case 'ready': return '#27ae60';
      case 'completed': return '#95a5a6';
      default: return '#bdc3c7';
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  const EditOrderModal = ({ order, onSave, onCancel }) => {
    const [editForm, setEditForm] = useState({
      name: order.name,
      food: order.food,
      side: order.side,
      drink: order.drink,
      estimatedTime: order.estimatedTime
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(order.id, editForm);
    };

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>Edit Order #{order.id}</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input 
                type="text" 
                value={editForm.name}
                onChange={(e) => setEditForm({...editForm, name: e.target.value})}
              />
            </label>
            
            <label>
              Food:
              <select 
                value={editForm.food}
                onChange={(e) => setEditForm({...editForm, food: e.target.value})}
              >
                <option value="burger">Burger</option>
                <option value="hot_dog">Hot Dog</option>
                <option value="sandwich">Sandwich</option>
              </select>
            </label>

            <label>
              Side:
              <select 
                value={editForm.side}
                onChange={(e) => setEditForm({...editForm, side: e.target.value})}
              >
                <option value="fries">Fries</option>
                <option value="salad">Salad</option>
                <option value="none">No Side</option>
              </select>
            </label>

            <label>
              Drink:
              <select 
                value={editForm.drink}
                onChange={(e) => setEditForm({...editForm, drink: e.target.value})}
              >
                <option value="soda">Soda</option>
                <option value="water">Water</option>
                <option value="juice">Juice</option>
              </select>
            </label>

            <label>
              Estimated Time (minutes):
              <input 
                type="number" 
                value={editForm.estimatedTime}
                onChange={(e) => setEditForm({...editForm, estimatedTime: parseInt(e.target.value)})}
              />
            </label>

            <div className="modal-buttons">
              <button type="submit">Save Changes</button>
              <button type="button" onClick={onCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="order-management">
      <header className="management-header">
        <h1>Order Management</h1>
        <div className="order-stats">
          <span>Total Orders: {orders.length}</span>
          <span>Pending: {orders.filter(o => o.status === 'pending').length}</span>
          <span>Preparing: {orders.filter(o => o.status === 'preparing').length}</span>
          <span>Ready: {orders.filter(o => o.status === 'ready').length}</span>
        </div>
      </header>

      <div className="controls">
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Orders
          </button>
          {statusOptions.map(status => (
            <button 
              key={status}
              className={filter === status ? 'active' : ''}
              onClick={() => setFilter(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="orders-grid">
        {filteredOrders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(order.status) }}
              >
                {order.status}
              </span>
            </div>
            
            <div className="order-details">
              <p><strong>Customer:</strong> {order.name}</p>
              <p><strong>Food:</strong> {order.food}</p>
              <p><strong>Side:</strong> {order.side}</p>
              <p><strong>Drink:</strong> {order.drink}</p>
              <p><strong>Time:</strong> {formatTime(order.timestamp)}</p>
              <p><strong>Est. Time:</strong> {order.estimatedTime} min</p>
            </div>

            <div className="order-actions">
              <select 
                value={order.status}
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                className="status-select"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
              
              <button 
                className="edit-btn"
                onClick={() => setEditingOrder(order)}
              >
                Edit
              </button>
              
              <button 
                className="delete-btn"
                onClick={() => deleteOrder(order.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="no-orders">
          <p>No orders found for the selected filter.</p>
        </div>
      )}

      {editingOrder && (
        <EditOrderModal 
          order={editingOrder}
          onSave={updateOrder}
          onCancel={() => setEditingOrder(null)}
        />
      )}
    </div>
  );
};

export default OrderManagement;