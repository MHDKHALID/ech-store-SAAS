// Product Database
const products = [
    {
        id: 1,
        name: 'MacBook Pro 16"',
        category: 'laptops',
        price: 2499.99,
        description: 'Powerful laptop with M2 Pro chip',
        icon: '💻',
        featured: true
    },
    {
        id: 2,
        name: 'iPhone 15 Pro',
        category: 'smartphones',
        price: 1199.99,
        description: 'Latest iPhone with A17 Pro chip',
        icon: '📱',
        featured: true
    },
    {
        id: 3,
        name: 'iPad Pro 12.9"',
        category: 'tablets',
        price: 1099.99,
        description: 'Premium tablet with M2 chip',
        icon: '📱',
        featured: true
    },
    {
        id: 4,
        name: 'AirPods Pro',
        category: 'accessories',
        price: 249.99,
        description: 'Wireless earbuds with ANC',
        icon: '🎧',
        featured: true
    },
    {
        id: 5,
        name: 'Dell XPS 15',
        category: 'laptops',
        price: 1899.99,
        description: 'High-performance Windows laptop',
        icon: '💻',
        featured: false
    },
    {
        id: 6,
        name: 'Samsung Galaxy S24',
        category: 'smartphones',
        price: 899.99,
        description: 'Flagship Android smartphone',
        icon: '📱',
        featured: false
    },
    {
        id: 7,
        name: 'Microsoft Surface Pro 9',
        category: 'tablets',
        price: 999.99,
        description: '2-in-1 tablet and laptop',
        icon: '📱',
        featured: false
    },
    {
        id: 8,
        name: 'Sony WH-1000XM5',
        category: 'accessories',
        price: 399.99,
        description: 'Premium noise-canceling headphones',
        icon: '🎧',
        featured: false
    },
    {
        id: 9,
        name: 'Lenovo ThinkPad X1',
        category: 'laptops',
        price: 1599.99,
        description: 'Business laptop with great keyboard',
        icon: '💻',
        featured: false
    },
    {
        id: 10,
        name: 'Google Pixel 8 Pro',
        category: 'smartphones',
        price: 999.99,
        description: 'AI-powered smartphone',
        icon: '📱',
        featured: false
    },
    {
        id: 11,
        name: 'Samsung Galaxy Tab S9',
        category: 'tablets',
        price: 799.99,
        description: 'Android tablet with S Pen',
        icon: '📱',
        featured: false
    },
    {
        id: 12,
        name: 'Logitech MX Master 3S',
        category: 'accessories',
        price: 99.99,
        description: 'Ergonomic wireless mouse',
        icon: '🖱️',
        featured: false
    },
    {
        id: 13,
        name: 'ASUS ROG Zephyrus',
        category: 'laptops',
        price: 2199.99,
        description: 'Gaming laptop with RTX 4080',
        icon: '💻',
        featured: false
    },
    {
        id: 14,
        name: 'OnePlus 12',
        category: 'smartphones',
        price: 799.99,
        description: 'Fast-charging flagship phone',
        icon: '📱',
        featured: false
    },
    {
        id: 15,
        name: 'Amazon Fire HD 10',
        category: 'tablets',
        price: 149.99,
        description: 'Affordable entertainment tablet',
        icon: '📱',
        featured: false
    },
    {
        id: 16,
        name: 'Magic Keyboard',
        category: 'accessories',
        price: 149.99,
        description: 'Wireless keyboard with Touch ID',
        icon: '⌨️',
        featured: false
    }
];

// Get all products
function getAllProducts() {
    return products;
}

// Get featured products
function getFeaturedProducts() {
    return products.filter(product => product.featured);
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Filter products
function filterProducts(filters) {
    return products.filter(product => {
        // Category filter
        if (filters.categories && filters.categories.length > 0) {
            if (!filters.categories.includes(product.category) && !filters.categories.includes('all')) {
                return false;
            }
        }

        // Price filter
        if (filters.priceRanges && filters.priceRanges.length > 0) {
            let matchesPrice = false;
            filters.priceRanges.forEach(range => {
                if (range === '0-500' && product.price < 500) matchesPrice = true;
                if (range === '500-1000' && product.price >= 500 && product.price < 1000) matchesPrice = true;
                if (range === '1000-2000' && product.price >= 1000 && product.price < 2000) matchesPrice = true;
                if (range === '2000+' && product.price >= 2000) matchesPrice = true;
            });
            if (!matchesPrice) return false;
        }

        return true;
    });
}

// Sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Render products
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = '<p class="text-center">No products found.</p>';
        return;
    }

    container.innerHTML = products.map(product => createProductCard(product)).join('');
}
