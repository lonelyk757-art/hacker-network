// ============================================
// HACKER NETWORK - JavaScript Functionality
// ============================================

// Product Database
const books = [
    {
        id: 1,
        title: 'The Web Application Hacker\'s Handbook',
        author: 'Stuttard & Pinto',
        price: 2500,
        description: 'Master web application security testing',
        icon: '📖',
        image: 'images/book1.png'
    },
    {
        id: 2,
        title: 'Metasploit: The Penetration Tester\'s Guide',
        author: 'Kennedy, O\'Neill, Aharoni',
        price: 2200,
        description: 'Complete guide to penetration testing',
        icon: '🔓',
        image: 'images/book2.jpg'
    },
    {
        id: 3,
        title: 'The Hacker Playbook',
        author: 'Peter Kim',
        price: 2000,
        description: 'Practical guide to ethical hacking',
        icon: '🎮',
        image: 'images/book3.png'
    },
    {
        id: 4,
        title: 'Cryptography Engineering',
        author: 'Ferguson, Schneier, Kohno',
        price: 2800,
        description: 'Design and implementation of ciphers',
        icon: '🔐'
    },
    {
        id: 5,
        title: 'The Art of Intrusion',
        author: 'Kevin Mitnick',
        price: 1800,
        description: 'Real stories of social engineering',
        icon: '🕵️'
    },
    {
        id: 6,
        title: 'Malware Analysis',
        author: 'Michael Sikorski',
        price: 2600,
        description: 'Learn to analyze malicious code',
        icon: '🦠'
    },
    {
        id: 7,
        title: 'Network Security Essentials',
        author: 'William Stallings',
        price: 2400,
        description: 'Comprehensive network security guide',
        icon: '🌐'
    },
    {
        id: 8,
        title: 'Practical Reverse Engineering',
        author: 'Bruce Dang',
        price: 2700,
        description: 'Master reverse engineering techniques',
        icon: '⚙️'
    },
    {
        id: 9,
        title: 'OWASP Testing Guide',
        author: 'OWASP Project',
        price: 1500,
        description: 'Web application security testing',
        icon: '🧪'
    },
    {
        id: 10,
        title: 'The Shellcoder\'s Handbook',
        author: 'Koziol, Litchfield, Aitel',
        price: 2900,
        description: 'Discovering and exploiting security flaws',
        icon: '💻'
    },
    {
        id: 11,
        title: 'Incident Response & Computer Forensics',
        author: 'Chris Prosise',
        price: 2300,
        description: 'Respond to security incidents',
        icon: '🔍'
    },
    {
        id: 12,
        title: 'The Tangled Web',
        author: 'Michal Zalewski',
        price: 2100,
        description: 'Guide to web security',
        icon: '🕸️'
    },
    {
        id: 13,
        title: 'OWASP Testing Guide v4.1',
        author: 'OWASP Foundation',
        price: 0,
        description: 'Free comprehensive web security testing guide',
        icon: '📋'
    },
    {
        id: 14,
        title: 'Kali Linux Cookbook',
        author: 'Offensive Security',
        price: 0,
        description: 'Free penetration testing recipes and techniques',
        icon: '🐧'
    },
    {
        id: 15,
        title: 'The Basics of Hacking and Penetration Testing',
        author: 'Patrick Engebretson',
        price: 0,
        description: 'Free beginner guide to ethical hacking',
        icon: '🎯'
    },
    {
        id: 16,
        title: 'Cybersecurity Fundamentals',
        author: 'Real World Perspective',
        price: 0,
        description: 'Free real-world cybersecurity concepts',
        icon: '🛡️'
    },
    {
        id: 17,
        title: 'OWASP Cheat Sheet Series',
        author: 'OWASP Community',
        price: 0,
        description: 'Free security best practices and checklists',
        icon: '📝'
    },
    {
        id: 18,
        title: 'Security+ Study Guide (Free)',
        author: 'CompTIA Community',
        price: 0,
        description: 'Free CompTIA Security+ certification prep',
        icon: '🎓'
    },
    {
        id: 19,
        title: 'Ethical Hacking Essentials',
        author: 'Security Community',
        price: 0,
        description: 'Free guide to ethical hacking fundamentals',
        icon: '⚡'
    },
    {
        id: 20,
        title: 'Network Security Fundamentals',
        author: 'J.E. Canavan',
        price: 0,
        description: 'Free introductory network security concepts',
        icon: '🔗'
    },
    {
        id: 21,
        title: 'Cloud Penetration Testing Guide',
        author: 'Security Experts',
        price: 0,
        description: 'Free cloud security testing methodology',
        icon: '☁️'
    },
    {
        id: 22,
        title: 'Web Penetration Testing Handbook',
        author: 'Security Professionals',
        price: 0,
        description: 'Free web application security testing guide',
        icon: '🌍'
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const booksGrid = document.getElementById('booksGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');
const closeCart = document.getElementById('closeCart');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const checkoutForm = document.getElementById('checkoutForm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    updateCartCount();
    setupEventListeners();
});

// Render Books
function renderBooks() {
    booksGrid.innerHTML = books.map(book => `
        <div class="book-card">
            <div class="book-image">
                ${book.image ? `<img src="${book.image}" alt="${book.title}">` : book.icon}
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">by ${book.author}</div>
                <div class="book-description">${book.description}</div>
                <div class="book-price">${book.price === 0 ? 'FREE' : '₦' + book.price.toLocaleString()}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${book.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    const existingItem = cart.find(item => item.id === bookId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...book,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification('Added to cart!');
}

// Remove from Cart
function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    saveCart();
    updateCartCount();
    renderCart();
}

// Update Quantity
function updateQuantity(bookId, change) {
    const item = cart.find(item => item.id === bookId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(bookId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Render Cart Items
function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${item.price === 0 ? 'FREE' : '₦' + item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');

    updateCartSummary();
}

// Update Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? 500 : 0;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `₦${subtotal.toLocaleString()}`;
    document.getElementById('shipping').textContent = `₦${shipping.toLocaleString()}`;
    document.getElementById('total').textContent = `₦${total.toLocaleString()}`;
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart Button
    cartBtn.addEventListener('click', () => {
        renderCart();
        cartModal.classList.add('active');
    });

    // Close Cart
    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // Close Checkout
    closeCheckout.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });

    // Checkout Button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Add items to cart first!', 'error');
            return;
        }
        cartModal.classList.remove('active');
        checkoutModal.classList.add('active');
    });

    // Hamburger Menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Contact Form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully!');
        contactForm.reset();
    });

    // Checkout Form
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        processOrder();
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
        }
    });
}

// Process Order
function processOrder() {
    // Get form inputs directly by ID instead of FormData
    const fullName = document.querySelector('input[placeholder="Full Name"]').value || 'Customer';
    const email = document.querySelector('input[placeholder="Email Address"]').value || 'customer@example.com';
    const address = document.querySelector('input[placeholder="Street Address"]').value || 'Address not provided';
    const city = document.querySelector('input[placeholder="City"]').value || 'City';
    const state = document.querySelector('input[placeholder="State/Province"]').value || 'State';
    const postal = document.querySelector('input[placeholder="Postal Code"]').value || 'Postal Code';
    const country = document.querySelector('input[placeholder="Country"]').value || 'Country';
    const phone = document.querySelector('input[placeholder="Phone Number"]').value || 'Phone';
    const payment = document.querySelector('input[name="payment"]:checked').value || 'card';

    // Validate required fields
    if (!fullName.trim() || !email.trim() || !address.trim()) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }

    const orderData = {
        items: cart,
        customer: {
            name: fullName,
            email: email,
            address: address,
            city: city,
            state: state,
            postal: postal,
            country: country,
            phone: phone
        },
        payment: payment,
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 500,
        timestamp: new Date().toISOString()
    };

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Show success message
    showNotification('Order placed successfully! Thank you for your purchase.', 'success');

    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();

    // Close modals
    checkoutModal.classList.remove('active');
    checkoutForm.reset();

    // Redirect to home
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'error' ? '#ff006e' : '#00ff41'};
        color: ${type === 'error' ? 'white' : '#0a0e27'};
        padding: 1rem 1.5rem;
        border-radius: 5px;
        font-weight: bold;
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 0 20px ${type === 'error' ? 'rgba(255, 0, 110, 0.3)' : 'rgba(0, 255, 65, 0.3)'};
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}
