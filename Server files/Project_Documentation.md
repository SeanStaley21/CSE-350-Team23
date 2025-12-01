# Food Truck Ordering System
## CSE 350 - Software Engineering

---

**Project Title:** Food Truck Ordering and Management System

**Date:** December 1, 2025

**Team Members:**
- Sean Staley (ststal01@louisville.edu)
- J.T. Watt (jtwatt03@louisville.edu)

---

## Table of Contents

1. [Brief Overview/Description of the Project](#brief-overviewdescription-of-the-project) .................. 3
2. [Requirements](#requirements) .................. 4
   - 2.1 [Functional Requirements](#functional-requirements) .................. 4
   - 2.2 [Non-Functional Requirements](#non-functional-requirements) .................. 5
   - 2.3 [Technical Requirements](#technical-requirements) .................. 5
3. [Initial Implementation Milestones](#initial-implementation-milestones) .................. 6
4. [Methodology Used for the Project](#methodology-used-for-the-project) .................. 7
5. [Need Analysis](#need-analysis) .................. 8
   - 5.1 [Problem Statement](#problem-statement) .................. 8
   - 5.2 [Target Users](#target-users) .................. 8
   - 5.3 [Key Features](#key-features) .................. 8
6. [Software Design](#software-design) .................. 9
   - 6.1 [System Architecture](#system-architecture) .................. 9
   - 6.2 [Frontend Design](#frontend-design) .................. 10
   - 6.3 [Backend Design](#backend-design) .................. 11
   - 6.4 [Data Models](#data-models) .................. 12
   - 6.5 [API Endpoints](#api-endpoints) .................. 13
   - 6.6 [User Interface Design](#user-interface-design) .................. 14
7. [Risk Analysis](#risk-analysis) .................. 15
8. [Potential Ethical Issues and Mitigation](#potential-ethical-issues-and-mitigation) .................. 16
9. [Software Implementation](#software-implementation) .................. 17
10. [Screenshots of Code](#screenshots-of-code) .................. 18
11. [Test Plan](#test-plan) .................. 19
12. [Test Script](#test-script) .................. 20
13. [Test Report](#test-report) .................. 21
14. [Team Assignments and Responsibilities](#team-assignments-and-responsibilities) .................. 22
    - 14.1 [Homework 1](#homework-1) .................. 22
    - 14.2 [Homework 2](#homework-2) .................. 22
    - 14.3 [Homework 3](#homework-3) .................. 22
    - 14.4 [Homework 4](#homework-4) .................. 22
15. [Ethical Guidance](#ethical-guidance) .................. 23
16. [References](#references) .................. 24

---

<div style="page-break-after: always;"></div>

## Brief Overview/Description of the Project

The **Food Truck Ordering and Management System** is a comprehensive web application designed to streamline the ordering process for a food truck business. The system provides a dual-interface solution: a customer-facing order placement portal and a staff-facing order management dashboard.

### Project Goals

The primary goal of this project is to digitize and optimize the food truck ordering workflow, eliminating manual order-taking processes and providing real-time order tracking capabilities. The system aims to:

- Enable customers to place orders quickly and efficiently through an intuitive web interface
- Provide food truck staff with a centralized dashboard to manage incoming orders
- Generate estimated preparation times based on current order queue
- Track order status throughout the preparation lifecycle

### Technology Stack

The application is built using modern web technologies:

- **Frontend:** React 18 with Vite for fast development and optimized builds
- **Backend:** Node.js with Express framework for RESTful API services
- **Initial Prototyping:** C++ for business logic validation
- **Styling:** Custom CSS with responsive design principles

### Core Functionality

The system handles the complete order lifecycle from placement to completion:

1. **Order Placement:** Customers select their meal preferences (main item, sides, drinks) and provide their name
2. **Order Confirmation:** System generates unique order numbers and provides estimated preparation times
3. **Order Management:** Staff can view all orders, filter by status, update order progress, and modify order details
4. **Queue Management:** Intelligent estimation of preparation times based on current order load

The application serves as a proof-of-concept for modernizing small business operations through accessible web technologies, demonstrating full-stack development capabilities and software engineering principles.

---

<div style="page-break-after: always;"></div>

## Requirements

### Functional Requirements

#### FR1: Order Placement System
- **FR1.1:** System shall allow customers to select from available menu items including:
  - Main items: Burgers (Classic, Cheeseburger, Vegie) and Hot Dogs (Classic, Supreme, Vegie)
  - Sides: Fries, Salad, or No Side
  - Drinks: Soda, Water, Juice
- **FR1.2:** System shall require customer name input for order identification
- **FR1.3:** System shall generate unique order numbers starting from 100001
- **FR1.4:** System shall display order confirmation with all selected items and estimated time
- **FR1.5:** System shall validate that required fields (name, food, drink) are completed before submission

#### FR2: Order Management System
- **FR2.1:** System shall display all active orders in a dashboard view
- **FR2.2:** System shall allow filtering orders by status (All, Pending, Preparing, Ready, Completed)
- **FR2.3:** System shall enable staff to update order status through dropdown selection
- **FR2.4:** System shall provide edit functionality for modifying order details
- **FR2.5:** System shall allow deletion of orders with confirmation prompt
- **FR2.6:** System shall display order statistics (total, pending, preparing, ready counts)

#### FR3: Time Estimation System
- **FR3.1:** System shall estimate preparation time based on food type:
  - Burgers: 8 minutes base time
  - Hot Dogs: 5 minutes base time
- **FR3.2:** System shall add 1 minute per active order in queue
- **FR3.3:** System shall display estimated time to customer upon order placement

### Non-Functional Requirements

#### NFR1: Performance
- **NFR1.1:** System shall respond to user actions within 2 seconds
- **NFR1.2:** Frontend shall load within 3 seconds on standard connections
- **NFR1.3:** API endpoints shall process requests within 500ms

#### NFR2: Usability
- **NFR2.1:** Interface shall be intuitive requiring no training for basic operations
- **NFR2.2:** System shall be responsive across desktop, tablet, and mobile devices
- **NFR2.3:** Error messages shall be clear and actionable

#### NFR3: Reliability
- **NFR3.1:** System shall handle concurrent orders without data loss
- **NFR3.2:** System shall provide fallback mechanisms when API is unavailable
- **NFR3.3:** System shall maintain data consistency across operations

#### NFR4: Maintainability
- **NFR4.1:** Code shall follow consistent style guidelines
- **NFR4.2:** Components shall be modular and reusable
- **NFR4.3:** API shall follow RESTful design principles

### Technical Requirements

#### TR1: Development Environment
- **TR1.1:** Node.js version 16.x or higher
- **TR1.2:** npm package manager for dependency management
- **TR1.3:** Modern web browser with ES6 support

#### TR2: Runtime Environment
- **TR2.1:** Backend server running on port 5000
- **TR2.2:** Frontend development server on port 3000
- **TR2.3:** CORS configuration for cross-origin requests

#### TR3: Dependencies
- **TR3.1:** React 18.2.0 for frontend framework
- **TR3.2:** Express 4.18.2 for backend server
- **TR3.3:** Vite 7.2.2 for build tooling
- **TR3.4:** CORS 2.8.5 for cross-origin support

---

<div style="page-break-after: always;"></div>

## Initial Implementation Milestones

### Phase 1: Project Planning and Setup (Week 1-2)
**Objectives:**
- Define project scope and requirements
- Set up development environment
- Initialize version control with Git/GitHub

**Deliverables:**
- Project repository structure
- README documentation
- Team collaboration workflow established

**Status:** ✓ Completed

---

### Phase 2: Backend Prototype Development (Week 3-4)
**Objectives:**
- Develop C++ prototype to validate business logic
- Implement order management system in C++
- Test menu item structure and order processing

**Deliverables:**
- `HelloWorld.cpp` - Basic Burger class implementation
- `ordertest.cpp` - Full order system with polymorphism

**Status:** ✓ Completed

---

### Phase 3: Frontend HTML/CSS Prototype (Week 4-5)
**Objectives:**
- Create static HTML pages for user interface design
- Develop CSS styling and responsive layouts
- Design order form and contact pages

**Deliverables:**
- `homePage.html` - Order placement form
- `menu.html` - Menu display page
- `contact.html` - Contact information
- `default_style.css` - Styling framework

**Status:** ✓ Completed

---

### Phase 4: Backend API Development (Week 5-7)
**Objectives:**
- Migrate business logic from C++ to Node.js
- Implement RESTful API with Express
- Create CRUD operations for orders
- Develop menu management endpoints

**Deliverables:**
- `server.js` - Express server implementation
- Order management API (GET, POST, PATCH, DELETE)
- Menu API endpoint
- API documentation in README

**Status:** ✓ Completed

---

### Phase 5: React Frontend Development (Week 7-9)
**Objectives:**
- Migrate static HTML to React components
- Implement state management with React hooks
- Integrate frontend with backend API
- Develop order management dashboard

**Deliverables:**
- `App.jsx` - Main application component with routing
- `FoodTruckForm.jsx` - Customer order form
- `OrderManagement.jsx` - Staff dashboard
- Responsive CSS styling

**Status:** ✓ Completed

---

### Phase 6: Integration and Testing (Week 9-10)
**Objectives:**
- Connect frontend and backend systems
- Test all API endpoints
- Validate order workflow end-to-end
- Debug and fix integration issues

**Deliverables:**
- Fully integrated application
- API fetch implementations
- Error handling and fallback mechanisms
- Testing documentation

**Status:** ✓ Completed

---

### Phase 7: Deployment Utilities (Week 10-11)
**Objectives:**
- Create automated server startup scripts
- Develop shutdown utilities
- Document deployment process
- Prepare production configuration

**Deliverables:**
- `start-servers.bat` - Launch both servers
- `stop-servers.bat` - Shutdown script
- Deployment documentation
- Configuration guidelines

**Status:** ✓ Completed

---

### Phase 8: Documentation and Finalization (Week 11-12)
**Objectives:**
- Complete project documentation
- Finalize README files
- Prepare demonstration materials
- Conduct final testing

**Deliverables:**
- Comprehensive project documentation
- Backend API documentation
- User guide
- Final project presentation

**Status:** ✓ Completed

---

<div style="page-break-after: always;"></div>

## Methodology Used for the Project

### Development Approach

The project followed an **Iterative and Incremental Development** methodology, combining elements of Agile principles with academic project constraints. This approach allowed for continuous refinement and adaptation throughout the development lifecycle.

### Key Methodological Elements

#### 1. Prototyping-First Strategy

The team adopted a prototyping approach to validate concepts before full implementation:

- **C++ Prototyping:** Initial business logic was developed in C++ to understand object-oriented design patterns and class hierarchies
- **Static HTML Prototyping:** User interface concepts were tested with static HTML/CSS before React implementation
- **Benefits:** Early validation of requirements, reduced risk of major redesigns, better understanding of problem domain

#### 2. Component-Based Development

Following React's philosophy, the project was decomposed into reusable, modular components:

- **Separation of Concerns:** Each component handles a specific functionality
- **Reusability:** Components can be easily modified or replaced
- **Maintainability:** Clear boundaries make debugging and updates straightforward

#### 3. API-First Backend Design

The backend was designed with RESTful principles:

- **Clear API Contracts:** Well-defined endpoints with predictable behavior
- **Stateless Operations:** Each request contains all necessary information
- **Standard HTTP Methods:** Proper use of GET, POST, PATCH, DELETE

#### 4. Version Control and Collaboration

Git and GitHub facilitated team collaboration:

- **Feature Branches:** Separate development of different features
- **Commit History:** Clear documentation of changes over time
- **Code Reviews:** Team members reviewed each other's contributions

#### 5. Testing Strategy

Testing was conducted at multiple levels:

- **Unit Testing:** Individual functions tested during C++ prototype phase
- **Integration Testing:** API endpoints tested with frontend interactions
- **User Acceptance Testing:** Manual testing of complete workflows

### Development Tools and Environment

#### Version Control
- **Git:** Distributed version control system
- **GitHub:** Cloud-based repository hosting and collaboration

#### Frontend Development
- **Visual Studio Code:** Primary IDE for all development
- **Vite:** Fast development server with hot module replacement
- **React Developer Tools:** Browser extension for debugging

#### Backend Development
- **Node.js:** JavaScript runtime environment
- **npm:** Package management and script execution
- **Nodemon:** Automatic server restart during development

#### Testing Tools
- **Browser DevTools:** Network monitoring and console debugging
- **Postman/Thunder Client:** API endpoint testing
- **Manual Testing:** User workflow validation

### Communication and Collaboration

#### Team Meetings
- Weekly progress meetings documented in `Meeting_Notes/`
- Discussion of blockers and technical challenges
- Planning of next steps and task allocation

#### Documentation
- Inline code comments for complex logic
- README files for each major component
- Meeting notes for decision tracking

### Quality Assurance Practices

1. **Code Reviews:** Peer review before merging significant changes
2. **Consistent Styling:** Agreed-upon code formatting standards
3. **Error Handling:** Comprehensive try-catch blocks and user feedback
4. **Responsive Design:** Testing across different screen sizes
5. **Cross-Browser Compatibility:** Validation on multiple browsers

### Lessons Learned

The iterative approach allowed the team to:
- Adapt requirements based on implementation challenges
- Learn new technologies (React, Express) incrementally
- Identify and fix issues early in the development cycle
- Balance academic deadlines with quality deliverables

---

<div style="page-break-after: always;"></div>

## Need Analysis

### Problem Statement

Traditional food truck operations face several operational challenges:

1. **Manual Order Taking:** Staff must manually record orders on paper, leading to:
   - Illegible handwriting causing order errors
   - Time-consuming order entry process
   - Difficulty tracking order status
   - No historical record of orders

2. **Customer Experience Issues:**
   - Long wait times during peak hours
   - Uncertainty about order status
   - No estimate of preparation time
   - Limited visibility into menu options

3. **Business Inefficiencies:**
   - Difficulty managing order queue
   - No data analytics for business insights
   - Limited scalability during high-volume periods

4. **Communication Gaps:**
   - Miscommunication between customers and staff
   - Difficulty handling order modifications
   - No systematic way to prioritize orders

### Target Users

#### Primary Users: Customers
- **Demographics:** General public, food truck patrons
- **Technical Proficiency:** Basic web browsing skills
- **Needs:**
  - Quick and easy order placement
  - Clear menu information
  - Order confirmation and tracking
  - Estimated wait times

#### Secondary Users: Food Truck Staff
- **Demographics:** Food truck employees and managers
- **Technical Proficiency:** Moderate computer skills
- **Needs:**
  - Centralized order dashboard
  - Real-time order updates
  - Queue management tools
  - Order editing capabilities

### Key Features

Based on need analysis, the system prioritizes:

1. **Simplified Ordering Process:**
   - Intuitive dropdown menus for item selection
   - Required field validation to prevent incomplete orders
   - Immediate order confirmation with unique order number

2. **Time Management:**
   - Dynamic estimation based on current queue
   - Status tracking (pending, preparing, ready, completed)
   - Visual indicators for order progress

3. **Staff Efficiency Tools:**
   - Filterable order list
   - One-click status updates
   - Order editing for customer changes
   - Statistical overview of order volume

4. **Accessibility:**
   - Responsive design for mobile ordering
   - Clear visual hierarchy
   - Color-coded status indicators

### Business Value

The system provides measurable benefits:

- **Reduced Order Errors:** Digital ordering eliminates miscommunication
- **Faster Service:** Streamlined workflow reduces wait times
- **Improved Customer Satisfaction:** Transparency and tracking enhance experience
- **Data-Driven Insights:** Order history enables business analytics
- **Scalability:** System handles increased volume without additional staff

### Stakeholder Requirements

**Customers Want:**
- Fast, reliable ordering experience
- Mobile-friendly interface
- Accurate timing

**Staff Needs:**
- Easy-to-use management interface
- Flexibility to handle special requests
- Clear queue visualization

**Business Requires:**
- Cost-effective solution
- Minimal training required
- Maintainable codebase for future enhancements

---

<div style="page-break-after: always;"></div>

## Software Design

### System Architecture

The Food Truck Ordering System follows a **client-server architecture** with clear separation between frontend and backend components.

```
┌─────────────────────────────────────────────────────────┐
│                     Client Layer                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │         React Frontend (Port 3000)               │  │
│  │  ┌────────────┐  ┌──────────────────────────┐   │  │
│  │  │  App.jsx   │  │   Components:            │   │  │
│  │  │  (Router)  │  │  - FoodTruckForm         │   │  │
│  │  │            │  │  - OrderManagement       │   │  │
│  │  └────────────┘  └──────────────────────────┘   │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         │
                         │ HTTP/REST API
                         │ (CORS Enabled)
                         ▼
┌─────────────────────────────────────────────────────────┐
│                    Server Layer                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │      Node.js/Express Backend (Port 5000)         │  │
│  │  ┌────────────────────────────────────────────┐ │  │
│  │  │         API Endpoints:                     │ │  │
│  │  │  - GET    /api/orders                      │ │  │
│  │  │  - GET    /api/orders/:id                  │ │  │
│  │  │  - POST   /api/orders                      │ │  │
│  │  │  - PATCH  /api/orders/:id                  │ │  │
│  │  │  - DELETE /api/orders/:id                  │ │  │
│  │  │  - GET    /api/menu                        │ │  │
│  │  └────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   Data Layer                            │
│  ┌──────────────────────────────────────────────────┐  │
│  │         In-Memory Storage                        │  │
│  │  - Orders Array                                  │  │
│  │  - Menu Items Object                             │  │
│  │  - Order ID Counter                              │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Architecture Patterns

#### 1. Model-View-Controller (MVC) Influenced
- **Model:** Data structures (orders, menu items) in backend
- **View:** React components rendering UI
- **Controller:** Express route handlers processing requests

#### 2. RESTful API Design
- Resource-based URLs (`/api/orders`, `/api/menu`)
- Standard HTTP methods for CRUD operations
- JSON data format for request/response

#### 3. Component-Based Architecture
- Reusable React components
- Props for data passing
- State management with hooks

---

<div style="page-break-after: always;"></div>

### Frontend Design

#### Component Hierarchy

```
App.jsx (Root Component)
├── Header (Navigation)
├── FoodTruckForm.jsx (Customer View)
│   ├── Form Elements (selects, inputs)
│   └── OrderConfirmationModal
│       └── Order Details Display
└── OrderManagement.jsx (Staff View)
    ├── Header (Stats Dashboard)
    ├── FilterButtons
    ├── OrdersGrid
    │   └── OrderCard (repeated)
    │       ├── OrderHeader (ID, Status Badge)
    │       ├── OrderDetails
    │       └── OrderActions (Buttons)
    └── EditOrderModal
        └── Edit Form
```

#### State Management

**FoodTruckForm Component State:**
```javascript
{
  form: {
    food: '',      // Selected main item
    side: '',      // Selected side item
    drink: '',     // Selected drink
    name: ''       // Customer name
  },
  showPopup: false,          // Modal visibility
  orderNumber: null,         // Generated order ID
  submittedOrder: null       // Order data with time
}
```

**OrderManagement Component State:**
```javascript
{
  orders: [],              // Array of all orders
  filter: 'all',          // Current filter selection
  editingOrder: null      // Order being edited
}
```

#### User Interaction Flow

**Customer Order Flow:**
1. User navigates to "Place Order" view
2. Selects food, side, and drink from dropdowns
3. Enters name in text input
4. Clicks "Place Order" button
5. Form submits to API via POST request
6. Confirmation modal displays order details
7. User closes modal and can place another order

**Staff Management Flow:**
1. Staff navigates to "Manage Orders" view
2. Views all active orders in grid layout
3. Applies filters to view specific statuses
4. Updates order status via dropdown
5. Edits order details via modal form
6. Deletes completed/cancelled orders

#### Styling Architecture

**CSS Variable System:**
```css
:root {
  --primary-color: #ff4141;        // Brand red
  --secondary-color: #00ff15;      // Action green
  --background-color: #f8f8f8;     // Light gray
  --text-color: #222;              // Dark gray
  --header-text-color: #fff;       // White
}
```

**Responsive Breakpoints:**
- Desktop: Full layout (>500px)
- Mobile: Stacked layout (<500px)

---

<div style="page-break-after: always;"></div>

### Backend Design

#### Server Architecture

**Express Application Structure:**
```javascript
const app = express();

// Middleware Stack
app.use(cors());              // Cross-origin resource sharing
app.use(express.json());      // JSON body parsing

// Route Handlers
app.get('/api/orders')        // Retrieve all orders
app.get('/api/orders/:id')    // Retrieve single order
app.post('/api/orders')       // Create new order
app.patch('/api/orders/:id')  // Update order
app.delete('/api/orders/:id') // Delete order
app.get('/api/menu')          // Retrieve menu

// Server Initialization
app.listen(PORT)
```

#### Business Logic Functions

**Time Estimation:**
```javascript
calculateEstimatedTime(food, orderQueue) {
  // Base time: 8min (burger) or 5min (hotdog)
  // Add 1 min per active order
  // Return estimated minutes
}
```

#### Data Flow

**Order Creation Process:**
```
1. Client sends POST /api/orders
   Body: { name, food, side, drink }
   
2. Server validates required fields
   
3. Server calculates:
   - Order ID (auto-increment)
   - Estimated time (based on queue)
   
4. Server creates order object:
   {
     id: 100001,
     name: "John Doe",
     food: "burger",
     side: "fries",
     drink: "soda",
     status: "pending",
     timestamp: "2025-12-01T...",
     estimatedTime: 12
   }
   
5. Server adds to orders array
   
6. Server responds with complete order object
   
7. Client displays confirmation
```

#### Error Handling

**Validation Checks:**
- Required field validation (name, food, drink)
- Order ID existence for updates/deletes
- Status code responses:
  - 200: Successful operation
  - 201: Resource created
  - 400: Bad request (missing fields)
  - 404: Resource not found
  - 500: Server error

---

<div style="page-break-after: always;"></div>

### Data Models

#### Order Model

```javascript
Order {
  id: Integer,              // Unique identifier (100001+)
  name: String,             // Customer name
  food: String,             // Main item identifier
  side: String,             // Side item identifier
  drink: String,            // Drink identifier
  status: String,           // Order status enum
  timestamp: ISO8601,       // Order creation time
  estimatedTime: Integer    // Minutes until ready
}
```

**Status Values:**
- `'pending'` - Order received, not started
- `'preparing'` - Currently being made
- `'ready'` - Completed, awaiting pickup
- `'completed'` - Picked up by customer

#### Menu Model

```javascript
MenuItems {
  burger: {
    classic: { name: String },
    cheeseburger: { name: String },
    vegie: { name: String }
  },
  hot_dog: {
    classic: { name: String },
    supreme: { name: String },
    vegie: { name: String }
  },
  sides: {
    fries: { name: String },
    salad: { name: String },
    none: { name: String }
  },
  drinks: {
    soda: { name: String },
    water: { name: String },
    juice: { name: String }
  }
}
```

#### Example Order Data

```json
{
  "id": 100001,
  "name": "John Doe",
  "food": "classic",
  "side": "fries",
  "drink": "soda",
  "status": "preparing",
  "timestamp": "2025-12-01T14:30:00.000Z",
  "estimatedTime": 10
}
```

---

<div style="page-break-after: always;"></div>

### API Endpoints

#### Order Endpoints

**GET /api/orders**
- **Description:** Retrieve all orders
- **Parameters:** None
- **Response:** Array of order objects
- **Status Codes:** 200 (Success)

**GET /api/orders/:id**
- **Description:** Retrieve single order by ID
- **Parameters:** `id` (path parameter)
- **Response:** Order object
- **Status Codes:** 200 (Success), 404 (Not Found)

**POST /api/orders**
- **Description:** Create new order
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "food": "burger",
    "side": "fries",
    "drink": "soda"
  }
  ```
- **Response:** Created order object with ID and estimated time
- **Status Codes:** 201 (Created), 400 (Bad Request)

**PATCH /api/orders/:id**
- **Description:** Update existing order
- **Parameters:** `id` (path parameter)
- **Request Body:** Fields to update (partial object)
  ```json
  {
    "status": "preparing",
    "estimatedTime": 8
  }
  ```
- **Response:** Updated order object
- **Status Codes:** 200 (Success), 404 (Not Found)

**DELETE /api/orders/:id**
- **Description:** Delete order
- **Parameters:** `id` (path parameter)
- **Response:** Confirmation message with deleted order
- **Status Codes:** 200 (Success), 404 (Not Found)

#### Menu Endpoint

**GET /api/menu**
- **Description:** Retrieve complete menu items
- **Parameters:** None
- **Response:** Menu items object
- **Status Codes:** 200 (Success)

---

<div style="page-break-after: always;"></div>

### User Interface Design

#### Design Principles

1. **Simplicity:** Minimal clicks to complete tasks
2. **Clarity:** Clear labels and visual hierarchy
3. **Feedback:** Immediate response to user actions
4. **Consistency:** Uniform styling and behavior
5. **Accessibility:** High contrast and readable fonts

#### Color Scheme

- **Primary (Red #ff4141):** Brand identity, primary actions
- **Secondary (Green #00ff15):** Success states, hover effects
- **Background (Light Gray #f8f8f8):** Main background
- **Text (Dark Gray #222):** Primary text content
- **White (#fff):** Header text and cards

#### Status Color Coding

- **Pending (Orange #f39c12):** New orders awaiting action
- **Preparing (Blue #3498db):** Orders in progress
- **Ready (Green #27ae60):** Orders completed and ready
- **Completed (Gray #95a5a6):** Finished orders

#### Layout Design

**Customer Order Form:**
- Centered layout with max width 400px
- White card with shadow on gray background
- Dropdown selects for all menu choices
- Text input for customer name
- Large submit button in brand color

**Order Management Dashboard:**
- Full-width header with statistics
- Filter button row for status selection
- Grid layout for order cards (3 columns on desktop)
- Each card shows complete order details
- Action buttons for status change, edit, delete

#### Responsive Design

**Desktop (>500px):**
- Multi-column grid layouts
- Horizontal navigation
- Side-by-side button groups

**Mobile (<500px):**
- Single column layouts
- Stacked navigation
- Full-width buttons
- Touch-optimized spacing

#### Modal Design

**Confirmation Modal:**
- Overlay with semi-transparent dark background
- White centered card
- Order summary with all details
- Close button

**Edit Modal:**
- Similar styling to confirmation
- Form fields pre-populated with current values
- Save and Cancel buttons
- Scrollable for small screens

---

### Database Design (Future Enhancement)

While current implementation uses in-memory storage, production deployment would require a database:

**Proposed Schema:**

```sql
-- Orders Table
CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL,
  food_item VARCHAR(50) NOT NULL,
  side_item VARCHAR(50),
  drink_item VARCHAR(50) NOT NULL,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estimated_time INTEGER
);

-- Menu Items Table
CREATE TABLE menu_items (
  id INTEGER PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  display_name VARCHAR(100),
  available BOOLEAN DEFAULT TRUE
);

-- Order History Table (for analytics)
CREATE TABLE order_history (
  id INTEGER PRIMARY KEY,
  order_id INTEGER,
  status_change VARCHAR(20),
  changed_at TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);
```

---

### Security Considerations (Future Enhancement)

For production deployment:

1. **Input Validation:** Sanitize all user inputs
2. **Authentication:** JWT tokens for staff access
3. **Authorization:** Role-based access control (customer vs. staff)
4. **Rate Limiting:** Prevent API abuse
5. **HTTPS:** Encrypted data transmission
6. **SQL Injection Prevention:** Parameterized queries
7. **XSS Protection:** Content security policies

---

### Deployment Architecture (Proposed)

```
Internet
   │
   ▼
┌──────────────────┐
│  Load Balancer   │
└──────────────────┘
   │
   ├──────────────┬──────────────┐
   ▼              ▼              ▼
┌────────┐   ┌────────┐   ┌────────┐
│ Web    │   │ Web    │   │ Web    │
│ Server │   │ Server │   │ Server │
│ (Node) │   │ (Node) │   │ (Node) │
└────────┘   └────────┘   └────────┘
   │              │              │
   └──────────────┴──────────────┘
                 │
                 ▼
        ┌────────────────┐
        │   Database     │
        │  (PostgreSQL)  │
        └────────────────┘
```

---

## Conclusion

The Food Truck Ordering and Management System successfully demonstrates full-stack web development principles while solving real-world business challenges. The modular architecture, RESTful API design, and component-based frontend provide a solid foundation for future enhancements and scalability.

**Key Achievements:**
- Complete order lifecycle management
- Intuitive user interfaces for customers and staff
- Dynamic time estimation
- Responsive design for multiple devices
- Clean, maintainable codebase

**Future Enhancements:**
- Database integration for data persistence
- User authentication and authorization
- Payment processing integration
- Real-time updates with WebSockets
- Analytics dashboard for business insights
- Mobile native applications

This project showcases the practical application of software engineering methodologies, modern web technologies, and collaborative development practices.

---

**End of Documentation**
