# Beyond Taste 🍽️

A modern, responsive web application for ordering authentic Indian cuisine. Experience traditional flavors with a seamless online ordering system.

## 🌟 Features

### Core Functionality
- **User Authentication**: Sign up and login system with localStorage-based user management
- **Menu Browsing**: Browse through a curated selection of Indian sweets, snacks, and festive specials
- **Shopping Cart**: Add items to cart, update quantities, and manage your order
- **Payment Processing**: Secure payment form with card validation
- **Contact & Feedback**: Submit feedback and view customer reviews
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices

### User Experience
- **Hamburger Menu**: Mobile-friendly navigation menu
- **Search Functionality**: Search menu items by name or description
- **Category Filtering**: Filter menu items by category (Sweets, Snacks, Festive)
- **Cart Persistence**: Cart items persist across page reloads using localStorage
- **User Session**: User information persists across pages

## 📁 Project Structure

```
BeyondTaste/
│
├── index.html              # Home page
├── login.html              # User login page
├── signup.html             # User registration page
├── menu.html               # Menu browsing and ordering page
├── contact.html            # Contact and feedback page
│
├── assets/
│   ├── js/
│   │   └── script.js       # Main JavaScript file (cart, menu, authentication)
│   ├── css/
│   │   └── styles.css       # Custom styles (if exists)
│   └── images/
│       ├── gulab-jamun.jpg
│       ├── rasmalai.jpg
│       ├── kheer.jpg
│       ├── jalebi.jpg
│       ├── ladoo.jpg
│       ├── samosa.jpg
│       ├── kachori.jpg
│       ├── namkeen.jpg
│       ├── mathri.jpg
│       ├── pakora.jpg
│       ├── diwali-box.jpg
│       ├── holi-box.jpg
│       ├── rakhi-box.jpg
│       └── wedding-box.jpg
│
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for better development experience)

### Installation

1. **Clone or download** this repository
   ```bash
   git clone <repository-url>
   cd BeyondTaste
   ```

2. **Open the project**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local web server (recommended)
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

## 📱 Pages Overview

### Home Page (`index.html`)
- Welcome section with company information
- Features showcase
- About section
- Call-to-action to view menu

### Login Page (`login.html`)
- User authentication form
- Redirects to menu after successful login
- Link to signup page for new users

### Sign Up Page (`signup.html`)
- User registration form
- Password confirmation
- Email validation
- Redirects to menu after successful signup

### Menu Page (`menu.html`)
- **Protected Route**: Requires user authentication
- Menu items displayed in a grid layout
- Search functionality
- Category filtering (All, Sweets, Snacks, Festive)
- Add to cart functionality
- Shopping cart sidebar
- Payment processing form
- User logout functionality

### Contact Page (`contact.html`)
- **Protected Route**: Requires user authentication
- Contact information display
- Feedback form
- Customer reviews section
- User logout functionality

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript (ES6+)**: Client-side functionality
- **LocalStorage API**: Data persistence (cart, user data)
- **Google Fonts**: Poppins font family

## 💾 Data Storage

The application uses browser localStorage to store:
- **User Accounts**: Registered user credentials
- **Current User Session**: Active user information
- **Shopping Cart**: Cart items and quantities

### Storage Keys
- `users`: Array of registered users
- `currentUser`: Currently logged-in user object
- `cart`: Shopping cart items array

## 🎨 Features in Detail

### Shopping Cart
- Add items to cart from menu
- Update item quantities
- Remove items from cart
- Calculate subtotal, delivery fee, and total
- Cart persists across page reloads

### Payment Processing
- Card number validation (16 digits)
- Expiry date validation (MM/YY format)
- CVV validation (3-4 digits)
- Payment form with smooth transitions
- Order confirmation after successful payment

### Menu System
- 14 menu items across 3 categories
- Real-time search filtering
- Category-based filtering
- Festive items highlighting
- Responsive grid layout

### Authentication
- Secure user registration
- Email-based login
- Session management
- Protected routes (menu and contact pages)
- Logout functionality

## 📱 Responsive Design

The application is fully responsive with:
- **Desktop**: Full navigation menu, sidebar cart
- **Tablet**: Adaptive layout with hamburger menu
- **Mobile**: Hamburger menu, optimized touch targets, mobile-friendly forms

## 🔧 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- This is a frontend-only application (no backend server)
- All data is stored in browser localStorage
- User authentication is client-side only (not secure for production)
- Payment processing is simulated (no actual payment gateway integration)

## 🚧 Future Enhancements

Potential improvements:
- Backend API integration
- Real payment gateway integration
- Order history tracking
- Email notifications
- Admin dashboard
- Product reviews and ratings
- Wishlist functionality
- Order tracking

## 📄 License

This project is created for educational/demonstration purposes.

## 👤 Author

Beyond Taste Development Team

---

**Enjoy authentic Indian flavors with Beyond Taste!** 🎉
