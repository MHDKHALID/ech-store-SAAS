// Product Database
const products = [
    {
        id: 1,
        name: 'MacBook Pro 16"',
        category: 'laptops',
        price: 2499.99,
        description: 'Powerful laptop with M2 Pro chip, 16GB RAM, and stunning Retina display',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
        rating: 4.8,
        reviews: 328,
        featured: true
    },
    {
        id: 2,
        name: 'iPhone 15 Pro',
        category: 'smartphones',
        price: 1199.99,
        description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system',
        image: 'https://images.unsplash.com/photo-1592286927505-f0cb2900e751?w=500&q=80',
        rating: 4.9,
        reviews: 542,
        featured: true
    },
    {
        id: 3,
        name: 'iPad Pro 12.9"',
        category: 'tablets',
        price: 1099.99,
        description: 'Premium tablet with M2 chip, Liquid Retina XDR display, and all-day battery',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
        rating: 4.7,
        reviews: 215,
        featured: true
    },
    {
        id: 4,
        name: 'AirPods Pro 2',
        category: 'accessories',
        price: 249.99,
        description: 'Wireless earbuds with active noise cancellation and spatial audio',
        image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80',
        rating: 4.6,
        reviews: 892,
        featured: true
    },
    {
        id: 5,
        name: 'Dell XPS 15',
        category: 'laptops',
        price: 1899.99,
        description: 'High-performance Windows laptop with Intel Core i7 and NVIDIA graphics',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80',
        rating: 4.5,
        reviews: 187,
        featured: false
    },
    {
        id: 6,
        name: 'Samsung Galaxy S24',
        category: 'smartphones',
        price: 899.99,
        description: 'Flagship Android smartphone with AI features and advanced camera',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
        rating: 4.7,
        reviews: 423,
        featured: false
    },
    {
        id: 7,
        name: 'Microsoft Surface Pro 9',
        category: 'tablets',
        price: 999.99,
        description: '2-in-1 tablet and laptop with detachable keyboard and Surface Pen support',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
        rating: 4.4,
        reviews: 156,
        featured: false
    },
    {
        id: 8,
        name: 'Sony WH-1000XM5',
        category: 'accessories',
        price: 399.99,
        description: 'Premium noise-canceling headphones with exceptional sound quality',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80',
        rating: 4.8,
        reviews: 634,
        featured: false
    },
    {
        id: 9,
        name: 'Lenovo ThinkPad X1',
        category: 'laptops',
        price: 1599.99,
        description: 'Business laptop with legendary keyboard, military-grade durability',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
        rating: 4.6,
        reviews: 245,
        featured: false
    },
    {
        id: 10,
        name: 'Google Pixel 8 Pro',
        category: 'smartphones',
        price: 999.99,
        description: 'AI-powered smartphone with incredible camera and clean Android experience',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
        rating: 4.5,
        reviews: 312,
        featured: false
    },
    {
        id: 11,
        name: 'Samsung Galaxy Tab S9',
        category: 'tablets',
        price: 799.99,
        description: 'Android tablet with S Pen, AMOLED display, and multitasking features',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
        rating: 4.3,
        reviews: 178,
        featured: false
    },
    {
        id: 12,
        name: 'Logitech MX Master 3S',
        category: 'accessories',
        price: 99.99,
        description: 'Ergonomic wireless mouse with precision scrolling and multi-device support',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
        rating: 4.7,
        reviews: 521,
        featured: false
    },
    {
        id: 13,
        name: 'ASUS ROG Zephyrus G14',
        category: 'laptops',
        price: 2199.99,
        description: 'Gaming laptop with RTX 4080, Ryzen 9 processor, and stunning display',
        image: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=500&q=80',
        rating: 4.8,
        reviews: 289,
        featured: false
    },
    {
        id: 14,
        name: 'OnePlus 12',
        category: 'smartphones',
        price: 799.99,
        description: 'Fast-charging flagship phone with Hasselblad camera and smooth display',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
        rating: 4.4,
        reviews: 198,
        featured: false
    },
    {
        id: 15,
        name: 'Amazon Fire HD 10',
        category: 'tablets',
        price: 149.99,
        description: 'Affordable entertainment tablet perfect for reading, browsing, and streaming',
        image: 'https://images.unsplash.com/photo-1585789575591-c1e9f2dc2e8f?w=500&q=80',
        rating: 4.1,
        reviews: 456,
        featured: false
    },
    {
        id: 16,
        name: 'Apple Magic Keyboard',
        category: 'accessories',
        price: 149.99,
        description: 'Wireless keyboard with Touch ID, rechargeable battery, and elegant design',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
        rating: 4.5,
        reviews: 367,
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
    const stars = generateStarRating(product.rating);
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="product-badge" style="display:none;">
                    <i class="fas fa-${getCategoryIcon(product.category)}"></i>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${stars}
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        laptops: 'laptop',
        smartphones: 'mobile-alt',
        tablets: 'tablet-alt',
        accessories: 'headphones'
    };
    return icons[category] || 'box';
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
