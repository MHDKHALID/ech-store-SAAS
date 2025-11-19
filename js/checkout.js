// Checkout functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load cart for checkout
    loadCart();
    
    // Render checkout items
    renderCheckoutItems();
    
    // Update checkout summary
    updateCheckoutSummary();
    
    // Handle checkout form submission
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processCheckout();
        });
    }

    // Handle payment method selection
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('card-details');
    
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
        });
    });
});

// Render checkout items
function renderCheckoutItems() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    if (!checkoutItemsContainer) return;

    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    checkoutItemsContainer.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <div>
                <strong>${item.name}</strong>
                <p style="color: #64748b; font-size: 0.875rem;">Qty: ${item.quantity}</p>
            </div>
            <div>
                <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
        </div>
    `).join('');
}

// Update checkout summary
function updateCheckoutSummary() {
    const totals = calculateCartTotals();
    
    const elements = {
        subtotal: document.getElementById('checkout-subtotal'),
        shipping: document.getElementById('checkout-shipping'),
        tax: document.getElementById('checkout-tax'),
        total: document.getElementById('checkout-total')
    };

    if (elements.subtotal) elements.subtotal.textContent = `$${totals.subtotal}`;
    if (elements.shipping) elements.shipping.textContent = `$${totals.shipping}`;
    if (elements.tax) elements.tax.textContent = `$${totals.tax}`;
    if (elements.total) elements.total.textContent = `$${totals.total}`;
}

// Process checkout
function processCheckout() {
    // Show loading state
    const submitBtn = document.querySelector('#checkout-form button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        // Generate order ID
        const orderId = 'TS' + Date.now().toString().slice(-8);
        
        // Show success modal
        showSuccessModal(orderId);
        
        // Clear cart
        cart = [];
        saveCart();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Show success modal
function showSuccessModal(orderId) {
    const modal = document.getElementById('success-modal');
    const orderIdElement = document.getElementById('order-id');
    
    if (modal && orderIdElement) {
        orderIdElement.textContent = orderId;
        modal.classList.add('active');
    }
}

// Format card number input
document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.querySelector('input[placeholder="1234 5678 9012 3456"]');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }

    // Format expiry date input
    const expiryInput = document.querySelector('input[placeholder="MM/YY"]');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }

    // Format CVV input
    const cvvInput = document.querySelector('input[placeholder="123"]');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
        });
    }
});
