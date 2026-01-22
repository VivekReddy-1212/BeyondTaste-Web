// Menu items (single source of truth for the frontend)
const menuItems = [
    {
        id: 1,
        name: "Gulab Jamun",
        category: "Sweets",
        price: 299,
        image: "assets/images/gulab-jamun.jpg",
        description: "Sweet milk dumplings in sugar syrup",
        isFestive: false
    },
    {
        id: 2,
        name: "Rasmalai",
        category: "Sweets",
        price: 349,
        image: "assets/images/rasmalai.jpg",
        description: "Soft cottage cheese patties in sweet milk",
        isFestive: false
    },
    {
        id: 3,
        name: "Kheer",
        category: "Sweets",
        price: 249,
        image: "assets/images/kheer.jpg",
        description: "Traditional rice pudding",
        isFestive: false
    },
    {
        id: 4,
        name: "Jalebi",
        category: "Sweets",
        price: 199,
        image: "assets/images/jalebi.jpg",
        description: "Crispy spiral sweet in sugar syrup",
        isFestive: false
    },
    {
        id: 5,
        name: "Ladoo",
        category: "Sweets",
        price: 299,
        image: "assets/images/ladoo.jpg",
        description: "Sweet round balls made of gram flour",
        isFestive: false
    },
    {
        id: 6,
        name: "Samosa",
        category: "Snacks",
        price: 149,
        image: "assets/images/samosa.jpg",
        description: "Crispy pastry filled with spiced potatoes and peas",
        isFestive: false
    },
    {
        id: 7,
        name: "Kachori",
        category: "Snacks",
        price: 169,
        image: "assets/images/kachori.jpg",
        description: "Flaky pastry with spiced lentil filling",
        isFestive: false
    },
    {
        id: 8,
        name: "Namkeen",
        category: "Snacks",
        price: 199,
        image: "assets/images/namkeen.jpg",
        description: "Assorted savory snacks mix",
        isFestive: false
    },
    {
        id: 9,
        name: "Mathri",
        category: "Snacks",
        price: 179,
        image: "assets/images/mathri.jpg",
        description: "Crispy savory crackers",
        isFestive: false
    },
    {
        id: 10,
        name: "Pakora",
        category: "Snacks",
        price: 199,
        image: "assets/images/pakora.jpg",
        description: "Crispy vegetable fritters",
        isFestive: false
    },
    {
        id: 11,
        name: "Diwali Special Box",
        category: "Festive",
        price: 999,
        image: "assets/images/diwali-box.jpg",
        description: "Assorted sweets and snacks for Diwali",
        isFestive: true
    },
    {
        id: 12,
        name: "Holi Special Box",
        category: "Festive",
        price: 899,
        image: "assets/images/holi-box.jpg",
        description: "Colorful sweets and snacks for Holi",
        isFestive: true
    },
    {
        id: 13,
        name: "Rakhi Special Box",
        category: "Festive",
        price: 799,
        image: "assets/images/rakhi-box.jpg",
        description: "Premium sweets for Rakhi",
        isFestive: true
    },
    {
        id: 14,
        name: "Wedding Special Box",
        category: "Festive",
        price: 1499,
        image: "assets/images/wedding-box.jpg",
        description: "Luxury assortment for special occasions",
        isFestive: true
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (item) {
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        updateCartCount();
        showNotification('Item added to cart!');
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    cartItems.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div class="flex-1">
                <h3 class="font-semibold">${item.name}</h3>
                <p class="text-gray-600">₹${item.price}</p>
            </div>
            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" 
                            class="w-8 h-8 flex items-center justify-center bg-red-100 text-red-800 rounded-full hover:bg-red-200">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                        </svg>
                    </button>
                    <span class="w-8 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})"
                            class="w-8 h-8 flex items-center justify-center bg-red-100 text-red-800 rounded-full hover:bg-red-200">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                    </button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-600 hover:text-red-800">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');

    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = 50;
    const total = subtotal + delivery;

    if (cartSubtotal) cartSubtotal.textContent = `₹${subtotal}`;
    if (cartTotal) cartTotal.textContent = `₹${total}`;
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(itemId);
        return;
    }
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        updateCartCount();
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateCartCount();
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(name);
    return value ? value.trim() : '';
}

function renderMenu({ category = 'all', search = '' } = {}) {
    const menuGrid = document.querySelector('.menu-section');
    if (!menuGrid) return;

    const normalizedSearch = (search || '').toLowerCase().trim();
    const normalizedCategory = (category || 'all').toLowerCase();

    const filtered = menuItems.filter(item => {
        const matchesCategory =
            normalizedCategory === 'all' ||
            item.category.toLowerCase() === normalizedCategory;

        if (!matchesCategory) return false;

        if (!normalizedSearch) return true;
        const haystack = `${item.name} ${item.description}`.toLowerCase();
        return haystack.includes(normalizedSearch);
    });

    if (filtered.length === 0) {
        menuGrid.innerHTML = `
            <div class="no-results-message text-center py-8 text-gray-500 col-span-full">
                No items found matching your search.
            </div>
        `;
        return;
    }

    menuGrid.innerHTML = filtered.map(item => `
        <div class="menu-item bg-white rounded-lg shadow-md overflow-hidden ${item.isFestive ? 'festive-item' : ''}">
            <div class="relative h-48">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                <div class="absolute top-2 right-2 bg-red-800 text-yellow-400 px-3 py-1 rounded-full text-sm">
                    ${item.category}
                </div>
            </div>
            <div class="p-4">
                <h3 class="text-xl font-semibold text-red-800">${item.name}</h3>
                <p class="text-gray-600 mt-2">${item.description}</p>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-xl font-bold text-red-800">₹${item.price}</span>
                    <button onclick="addToCart(${item.id})"
                            class="bg-red-800 text-yellow-400 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Card validation functions
function validateCardNumber(number) {
    // Remove spaces and dashes
    number = number.replace(/[\s-]/g, '');
    // Check if it's a valid 16-digit number
    return /^\d{16}$/.test(number);
}

function validateExpiryDate(date) {
    // Check if it matches MM/YY format
    if (!/^\d{2}\/\d{2}$/.test(date)) return false;
    
    const [month, year] = date.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    // Check if month is valid (1-12)
    if (month < 1 || month > 12) return false;
    
    // Check if year is valid (current year or future)
    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;
    
    return true;
}

function validateCVV(cvv) {
    // Check if it's a valid 3 or 4 digit number
    return /^\d{3,4}$/.test(cvv);
}

// Customer reviews
const reviews = [
    {
        name: "Priya Sharma",
        rating: 5,
        comment: "The best traditional sweets I've ever tasted! The Gulab Jamun is absolutely divine.",
        date: "2024-03-15"
    },
    {
        name: "Rajesh Patel",
        rating: 5,
        comment: "Authentic flavors that remind me of my grandmother's cooking. The Ladoo is perfect!",
        date: "2024-03-10"
    },
    {
        name: "Meera Gupta",
        rating: 4,
        comment: "Great variety of snacks and sweets. The packaging is beautiful and the taste is amazing.",
        date: "2024-03-05"
    },
    {
        name: "Amit Kumar",
        rating: 5,
        comment: "The Rasmalai is to die for! Will definitely order again for family gatherings.",
        date: "2024-03-01"
    },
    {
        name: "Neha Singh",
        rating: 4,
        comment: "Love their traditional snacks collection. The Mathri is crispy and perfectly spiced.",
        date: "2024-02-28"
    },
    {
        name: "Vikram Malhotra",
        rating: 5,
        comment: "Best place for authentic Indian sweets. The Kheer is rich and creamy, just like homemade.",
        date: "2024-02-25"
    }
];

// Customer reviews display
function displayReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (!reviewsContainer) return;

    reviewsContainer.innerHTML = reviews.map(review => `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
                <div class="flex-1">
                    <h3 class="text-lg font-semibold text-red-800">${review.name}</h3>
                    <p class="text-gray-500 text-sm">${new Date(review.date).toLocaleDateString()}</p>
                </div>
                <div class="flex text-yellow-400">
                    ${Array(review.rating).fill('★').join('')}
                </div>
            </div>
            <p class="text-gray-600">${review.comment}</p>
        </div>
    `).join('');
}

// Contact form handling
function initializeContactPage() {
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            showNotification('Thank you for your feedback!');
            this.reset();
        });
    }

    // Display reviews on contact page
    displayReviews();
}

// Mobile menu and dropdown functionality
function initMobileMenuDropdown() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

    // Hamburger menu toggle
    if (hamburgerMenu && dropdownMenu) {
        hamburgerMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
            this.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerMenu.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
                hamburgerMenu.classList.remove('active');
            }
        });

        // Close dropdown when clicking a link
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                dropdownMenu.classList.add('hidden');
                hamburgerMenu.classList.remove('active');
            });
        });
    }
}

function initMenuPage() {
    const menuGrid = document.querySelector('.menu-section');
    if (!menuGrid) return;

    const menuSearchInput = document.getElementById('menuSearch');
    const categoryTabs = document.querySelectorAll('.category-tab');

    let activeCategory = 'all';
    const urlSearch = getUrlParam('search');

    if (menuSearchInput && urlSearch) {
        menuSearchInput.value = urlSearch;
    }

    renderMenu({ category: activeCategory, search: urlSearch });

    if (menuSearchInput) {
        menuSearchInput.addEventListener('input', () => {
            renderMenu({ category: activeCategory, search: menuSearchInput.value });
        });
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            categoryTabs.forEach(t => {
                t.classList.remove('active', 'bg-red-800', 'text-yellow-400');
                t.classList.add('bg-red-700', 'text-yellow-100');
            });

            this.classList.add('active', 'bg-red-800', 'text-yellow-400');
            this.classList.remove('bg-red-700', 'text-yellow-100');

            activeCategory = this.dataset.category || 'all';
            renderMenu({ category: activeCategory, search: menuSearchInput ? menuSearchInput.value : '' });
        });
    });
}

function initCartUI() {
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCartBtn = document.getElementById('closeCart');
    const checkoutButtonEl = document.getElementById('checkoutButton');
    const paymentFormEl = document.getElementById('paymentForm');
    const backToCartEl = document.getElementById('backToCart');
    const paymentDetailsForm = document.getElementById('paymentDetailsForm');

    if (cartSidebar) {
        cartSidebar.style.display = 'none';
        cartSidebar.classList.add('-translate-x-full');
    }

    if (cartIcon && cartSidebar) {
        cartIcon.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            cartSidebar.style.display = 'block';
            setTimeout(() => {
                cartSidebar.classList.remove('-translate-x-full');
            }, 10);
            updateCart();
        });
    }

    if (closeCartBtn && cartSidebar) {
        closeCartBtn.addEventListener('click', function () {
            cartSidebar.classList.add('-translate-x-full');
            setTimeout(() => {
                cartSidebar.style.display = 'none';
            }, 300);
        });
    }

    if (checkoutButtonEl && paymentFormEl && cartSidebar) {
        checkoutButtonEl.addEventListener('click', function () {
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }

            cartSidebar.classList.add('-translate-x-full');
            setTimeout(() => {
                cartSidebar.style.display = 'none';
                paymentFormEl.style.display = 'block';
                setTimeout(() => {
                    paymentFormEl.classList.remove('translate-x-full');
                }, 10);
            }, 300);

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 50;
            const paymentAmountEl = document.getElementById('paymentAmount');
            if (paymentAmountEl) paymentAmountEl.textContent = total;
        });
    }

    if (backToCartEl && paymentFormEl && cartSidebar) {
        backToCartEl.addEventListener('click', function () {
            paymentFormEl.classList.add('translate-x-full');
            setTimeout(() => {
                paymentFormEl.style.display = 'none';
                cartSidebar.style.display = 'block';
                setTimeout(() => {
                    cartSidebar.classList.remove('-translate-x-full');
                }, 10);
            }, 300);
        });
    }

    if (paymentDetailsForm && paymentFormEl) {
        paymentDetailsForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const cardNumber = document.getElementById('cardNumber')?.value || '';
            const expiryDate = document.getElementById('expiryDate')?.value || '';
            const cvv = document.getElementById('cvv')?.value || '';

            if (!validateCardNumber(cardNumber) || !validateExpiryDate(expiryDate) || !validateCVV(cvv)) {
                showNotification('Please enter valid card details', 'error');
                return;
            }

            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton ? submitButton.innerHTML : '';
            if (submitButton) {
                submitButton.innerHTML = 'Processing...';
                submitButton.disabled = true;
            }

            setTimeout(() => {
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                this.reset();
                showNotification('Payment successful! Your order has been placed.', 'success');

                paymentFormEl.classList.add('translate-x-full');
                setTimeout(() => {
                    paymentFormEl.style.display = 'none';
                }, 300);

                if (submitButton) {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }
            }, 2000);
        });
    }

    updateCartCount();
}

// Single init entrypoint
document.addEventListener('DOMContentLoaded', function () {
    initMobileMenuDropdown();

    if (document.getElementById('reviewsContainer') || document.querySelector('#feedbackForm')) {
        initializeContactPage();
    }

    initMenuPage();
    initCartUI();
});