# Food Truck Backend API

Node.js/Express backend for the Food Truck ordering system.

## Features

- RESTful API for order management
- Price calculation with 6% tax (from C++ logic)
- Dynamic estimated preparation time based on queue
- Menu items from original C++ program
- CORS enabled for React frontend

## Installation

```bash
cd Backend
npm install
```

## Running the Server

```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

Server runs on `http://localhost:5000`

## API Endpoints

### Orders

- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order by ID
- `POST /api/orders` - Create new order
  - Body: `{ name, food, side, drink }`
- `PATCH /api/orders/:id` - Update order
  - Body: Any fields to update (status, estimatedTime, etc.)
- `DELETE /api/orders/:id` - Delete order

### Menu

- `GET /api/menu` - Get all menu items with prices

## Menu Items

**Burgers:**
- Classic Burger: $4.99
- Cheeseburger: $5.49
- Vegie Burger: $5.99

**Hot Dogs:**
- Classic Hotdog: $3.49
- Supreme Hotdog: $3.99
- Vegie Hotdog: $3.79

**Sides:**
- Fries: $2.49
- Salad: $3.99
- No Side: $0.00

**Drinks:**
- Soda: $1.99
- Water: $1.00
- Juice: $2.49

## Order Response Format

```json
{
  "id": 100001,
  "name": "John Doe",
  "food": "burger",
  "side": "fries",
  "drink": "soda",
  "status": "pending",
  "timestamp": "2025-11-17T...",
  "estimatedTime": 12,
  "pricing": {
    "subtotal": 9.47,
    "tax": 0.57,
    "total": 10.04
  }
}
```

## Connecting to React Frontend

Update your React app's fetch URLs to point to `http://localhost:5000/api/orders`
