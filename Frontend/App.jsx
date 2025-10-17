import React, { useState } from 'react';
import FoodTruckForm from './FoodTruckForm';
import OrderManagement from './OrderManagement';
import './default_style.css';

function App() {
  const [currentView, setCurrentView] = useState('order'); // 'order' or 'management'

  return (
    <div className="App">
      <header>
        Food Truck
        <nav>
          <button 
            onClick={() => setCurrentView('order')}
            style={{ 
              background: currentView === 'order' ? 'rgba(255,255,255,0.2)' : 'transparent',
              border: 'none',
              color: 'white',
              padding: '0.5em 1em',
              margin: '0 0.5em',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Place Order
          </button>
          <button 
            onClick={() => setCurrentView('management')}
            style={{ 
              background: currentView === 'management' ? 'rgba(255,255,255,0.2)' : 'transparent',
              border: 'none',
              color: 'white',
              padding: '0.5em 1em',
              margin: '0 0.5em',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Manage Orders
          </button>
        </nav>
      </header>

      {currentView === 'order' && <FoodTruckForm />}
      {currentView === 'management' && <OrderManagement />}
    </div>
  );
}

export default App;