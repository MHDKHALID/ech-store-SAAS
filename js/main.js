// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}!`);
            this.reset();
        });
    }

    // Load featured products on home page
    const featuredProductsContainer = document.getElementById('featured-products');
    if (featuredProductsContainer) {
        const featuredProducts = getFeaturedProducts();
        renderProducts(featuredProducts, 'featured-products');
    }

    // Load all products on products page
    const allProductsContainer = document.getElementById('all-products');
    if (allProductsContainer) {
        let currentProducts = getAllProducts();
        renderProducts(currentProducts, 'all-products');
        updateProductCount(currentProducts.length);

        // Setup filters
        setupFilters();

        // Setup sorting
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                currentProducts = sortProducts(currentProducts, this.value);
                renderProducts(currentProducts, 'all-products');
            });
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Setup product filters
function setupFilters() {
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    const clearFiltersBtn = document.getElementById('clear-filters');

    function applyFilters() {
        const filters = {
            categories: [],
            priceRanges: []
        };

        // Get selected categories
        categoryCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                filters.categories.push(checkbox.value);
            }
        });

        // Get selected price ranges
        priceCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                filters.priceRanges.push(checkbox.value);
            }
        });

        // Filter products
        let filteredProducts = filterProducts(filters);

        // Apply sorting if selected
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect && sortSelect.value !== 'default') {
            filteredProducts = sortProducts(filteredProducts, sortSelect.value);
        }

        // Render filtered products
        renderProducts(filteredProducts, 'all-products');
        updateProductCount(filteredProducts.length);
    }

    // Add event listeners to checkboxes
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    priceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Clear filters
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            categoryCheckboxes.forEach(checkbox => {
                checkbox.checked = checkbox.value === 'all';
            });
            priceCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            applyFilters();
        });
    }
}

// Update product count
function updateProductCount(count) {
    const productCount = document.getElementById('product-count');
    if (productCount) {
        productCount.textContent = count;
    }
}

// Handle category links from home page
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category && document.getElementById('all-products')) {
        // Uncheck all categories
        document.querySelectorAll('input[name="category"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Check the specific category
        const categoryCheckbox = document.querySelector(`input[name="category"][value="${category}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
            categoryCheckbox.dispatchEvent(new Event('change'));
        }
    }
});
