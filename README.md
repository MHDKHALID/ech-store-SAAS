# TechStore - Modern SaaS E-commerce Website

A beautiful, fully-functional tech store built with HTML, CSS, and vanilla JavaScript. Features a modern design, responsive layout, shopping cart, and checkout process.

![TechStore](https://img.shields.io/badge/Version-1.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Product Catalog**: Browse 16+ tech products across multiple categories
- **Advanced Filtering**: Filter products by category and price range
- **Shopping Cart**: Add/remove items, update quantities with persistent storage
- **Checkout System**: Complete order form with payment method selection
- **Local Storage**: Cart data persists across browser sessions
- **No Dependencies**: Pure HTML, CSS, and JavaScript (no frameworks needed)

## 📂 Project Structure

```
tech-store-saas/
├── index.html          # Home page
├── products.html       # Products listing page
├── cart.html          # Shopping cart page
├── checkout.html      # Checkout page
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   ├── products.js    # Product database and functions
│   ├── cart.js        # Shopping cart logic
│   ├── main.js        # Main JavaScript functionality
│   ├── filter.js      # Product filtering
│   └── checkout.js    # Checkout processing
└── README.md          # This file
```

## 🛠️ Installation & Setup

### Option 1: Direct Download
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start shopping!

### Option 2: Local Server (Recommended)
Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## 🌐 Deployment to GitHub Pages

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com)
   - Click "New Repository"
   - Name it (e.g., `tech-store`)
   - Make it public
   - Don't initialize with README

2. **Push your code to GitHub**
   ```bash
   cd tech-store-saas
   git init
   git add .
   git commit -m "Initial commit - TechStore SaaS website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tech-store.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR_USERNAME.github.io/tech-store/`

## 💻 Usage

### Home Page
- View featured products
- Browse by category
- Subscribe to newsletter
- Access all main navigation

### Products Page
- Filter by category (Laptops, Smartphones, Tablets, Accessories)
- Filter by price range
- Sort products by price or name
- Add items to cart

### Shopping Cart
- View all cart items
- Update quantities
- Remove items
- See order summary with tax and shipping
- Proceed to checkout

### Checkout
- Fill in billing information
- Choose payment method
- Review order summary
- Complete purchase

## 🎨 Customization

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2563eb;  /* Main brand color */
    --primary-dark: #1e40af;   /* Darker shade */
    --secondary-color: #64748b; /* Secondary elements */
    /* ... more variables */
}
```

### Add Products
Edit the products array in `js/products.js`:
```javascript
{
    id: 17,
    name: 'Your Product Name',
    category: 'laptops', // or smartphones, tablets, accessories
    price: 999.99,
    description: 'Product description',
    icon: '💻', // Emoji icon
    featured: false // true to show on home page
}
```

### Modify Layout
- Edit HTML structure in respective `.html` files
- Update styles in `css/style.css`
- Adjust functionality in JavaScript files

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript (ES6+)**: Dynamic functionality
- **Font Awesome**: Icons
- **Local Storage API**: Cart persistence

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance
- Lightweight (< 100KB total)
- No external dependencies
- Fast load times
- Optimized for SEO

## 📱 Features Breakdown

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px, 768px, and 968px
- Touch-friendly interfaces
- Optimized images

### Shopping Cart
- Add/remove products
- Quantity controls
- Automatic price calculation
- Tax calculation (8%)
- Shipping calculation (free over $50)
- Persistent storage

### Product Filtering
- Real-time filtering
- Multiple filter combinations
- Category filtering
- Price range filtering
- Sort by price/name

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! If you have suggestions or improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

Potential features to add:
- User authentication
- Backend integration
- Payment gateway integration
- Product reviews and ratings
- Wishlist functionality
- Order history
- Search functionality
- Product image galleries
- Discount codes

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the code comments for documentation

## 🌟 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography inspiration
- The open-source community

---

**Made with ❤️ for learning and showcasing web development skills**

*Ready to deploy! Perfect for your GitHub portfolio.*
