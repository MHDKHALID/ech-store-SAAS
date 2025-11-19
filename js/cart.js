// Cart Management
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('techStoreCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartCount();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('techStoreCart', JSON.stringify(cart));
    updateCartCount();
}

// Add to cart
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    showNotification('Product added to cart!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCart();
    }
}

// Calculate cart totals
function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return {
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// Update cart count in navbar
function updateCartCount() {
    const cartCounts = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounts.forEach(count => {
        count.textContent = totalItems;
    });
}

// Render cart page
function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    const emptyCart = document.getElementById('empty-cart');
    
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }

    cartContainer.style.display = 'block';
    emptyCart.style.display = 'none';

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">` : `<i class="fas fa-${getCategoryIcon(item.category)}" style="font-size: 2.5rem; color: var(--primary-color);"></i>`}
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="product-category">${item.category}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

// Helper function for category icons
function getCategoryIcon(category) {
    const icons = {
        laptops: 'laptop',
        smartphones: 'mobile-alt',
        tablets: 'tablet-alt',
        accessories: 'headphones'
    };
    return icons[category] || 'box';
}

    updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
    const totals = calculateCartTotals();
    
    const elements = {
        subtotal: document.getElementById('cart-subtotal'),
        shipping: document.getElementById('cart-shipping'),
        tax: document.getElementById('cart-tax'),
        total: document.getElementById('cart-total')
    };

    if (elements.subtotal) elements.subtotal.textContent = `$${totals.subtotal}`;
    if (elements.shipping) elements.shipping.textContent = `$${totals.shipping}`;
    if (elements.tax) elements.tax.textContent = `$${totals.tax}`;
    if (elements.total) elements.total.textContent = `$${totals.total}`;
}

// Show notification (using Toast from utils.js)
function showNotification(message) {
    if (typeof Toast !== 'undefined') {
        Toast.success(message);
    } else {
        // Fallback if Toast is not available
        alert(message);
    }
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    
    // Render cart if on cart page
    if (document.getElementById('cart-container')) {
        renderCart();
    }

    // Setup checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            window.location.href = 'checkout.html';
        });
    }
});
