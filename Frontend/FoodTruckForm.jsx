import React, { useState } from 'react';
import './FoodTruckForm.css';

// Store the next order number (in a real app, this would come from your backend)
let nextOrderNumber = 100001;

function FoodTruckForm() {
  const [form, setForm] = useState({
    food: '',
    side: '',
    drink: '',
    name: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [submittedOrder, setSubmittedOrder] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create order object without estimatedTime (API will calculate it)
    const orderData = {
      id: nextOrderNumber,
      name: form.name,
      food: form.food,
      side: form.side,
      drink: form.drink,
      status: 'pending',
      timestamp: new Date().toISOString()
    };
    
    // Increment order number for next order
    nextOrderNumber++;
    
    // Send to API to get estimated time and submit order
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });
      
      if (response.ok) {
        const submittedOrderWithTime = await response.json();
        console.log('Order submitted successfully:', submittedOrderWithTime);
        
        // Use the order data returned from API (includes estimatedTime)
        setSubmittedOrder(submittedOrderWithTime);
        setOrderNumber(submittedOrderWithTime.id);
        setShowPopup(true);
      } else {
        console.error('Failed to submit order');
        // Fallback with default estimated time
        const fallbackOrder = { ...orderData, estimatedTime: 10 };
        setSubmittedOrder(fallbackOrder);
        setOrderNumber(fallbackOrder.id);
        setShowPopup(true);
      }
    } catch (error) {
      console.log('API not available, using default estimated time:', orderData);
      // In development, use default estimated time when API isn't available
      const fallbackOrder = { ...orderData, estimatedTime: 10 };
      setSubmittedOrder(fallbackOrder);
      setOrderNumber(fallbackOrder.id);
      setShowPopup(true);
    }
    
    // Reset form
    setForm({
      food: '',
      side: '',
      drink: '',
      name: ''
    });
  };

  const closePopup = () => setShowPopup(false);

  const getDisplayText = (value, type) => {
    if (type === 'side' && value === 'none') return 'No Side';
    if (type === 'food' && value === 'hot_dog') return 'Hot Dog';
    return value;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="food">Choose your meal:</label>
        <select id="food" name="food" value={form.food} onChange={handleChange} required>
          <option value="" disabled>Please Choose One</option>
          <option value="hot_dog">Hot Dog</option>
          <option value="burger">Burger</option>
          {/* more food options */}
        </select>

        <label htmlFor="side">Choose your side:</label>
        <select id="side" name="side" value={form.side} onChange={handleChange}>
          <option value="none">No Side</option>
          <option value="fries">Fries</option>
          <option value="salad">Salad</option>
          {/* more side options */}
        </select>

        <label htmlFor="drink">Choose your drink:</label>
        <select id="drink" name="drink" value={form.drink} onChange={handleChange} required>
          <option value="" disabled>Please Choose One</option>
          <option value="soda">Soda</option>
          <option value="water">Water</option>
          {/* more drink options */}
        </select>

        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />

        <input type="submit" value="Place Order" />
      </form>

      {showPopup && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(4, 4, 4, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            background: 'white', padding: '2em', borderRadius: '8px', minWidth: '300px'
          }}>
            <h2>Order Submitted!</h2>
            <p><strong>Order Number:</strong> {orderNumber}</p>
            <p><strong>Name:</strong> {submittedOrder?.name}</p>
            <p><strong>Meal:</strong> {getDisplayText(submittedOrder?.food, 'food')}</p>
            <p><strong>Side:</strong> {getDisplayText(submittedOrder?.side, 'side')}</p>
            <p><strong>Drink:</strong> {submittedOrder?.drink}</p>
            <p><strong>Estimated Time:</strong> {submittedOrder?.estimatedTime} minutes</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodTruckForm;
