# Paradise Nursery

Paradise Nursery is a React-based shopping cart application for an online plant store.

## Project Overview

The application allows users to:

- Browse plants across multiple categories
- View plant images, names, descriptions, and prices
- Add plants to a shopping cart
- View the number of items in the cart dynamically
- Increase or decrease product quantities
- Remove products from the cart
- View individual and total cart costs
- Continue shopping
- See a checkout placeholder message

## Technologies Used

- React
- Vite
- React Router
- Redux Toolkit
- React Redux
- JavaScript
- CSS

## Plant Categories

The application contains three plant categories:

1. Indoor Plants
2. Medicinal Plants
3. Air Purifying Plants

Each category contains six unique plants.

## Application Routes

- `/` - Home page
- `/plants` - Product listing page
- `/cart` - Shopping cart page
- `/about` - About Us page

## Main React Concepts Demonstrated

- React components
- Props
- JSX
- Event handling
- Array map and filter
- Conditional rendering
- React Router
- Redux Toolkit
- Global state management
- Derived state
- Responsive CSS

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   └── AboutUs.jsx
├── data/
│   └── product.js
├── redux/
│   ├── store.js
│   └── CartSlice.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx