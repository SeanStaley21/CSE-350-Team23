import React, { useState } from 'react';
import './default_style.css';

function FoodTruckForm() {
  const [form, setForm] = useState({
    food: '',
    side: '',
    drink: '',
    name: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a random order number (for demo)
    const number = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(number);
    setShowPopup(true);
    // You can also send the order to your API here
  };

  const closePopup = () => setShowPopup(false);

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
        <select id="side" name="side" value={form.side} onChange={handleChange} required>
          <option value="" disabled>Please Choose One</option>
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
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Meal:</strong> {form.food}</p>
            <p><strong>Side:</strong> {form.side}</p>
            <p><strong>Drink:</strong> {form.drink}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodTruckForm;
