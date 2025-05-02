document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const categoryFilter = document.getElementById('category-filter');
  const materialFilter = document.getElementById('material-filter');
  const priceFilter = document.getElementById('price-filter');
  const productsGrid = document.querySelector('.products-grid');
  
  // Sample product data - in a real app, this would come from a database
  const products = [
    {
      id: 1,
      name: 'Coffee Table',
      description: 'Handcrafted lamp made from a recycled wine bottle with LED lights.',
      price: 400.00,
      image: 'pictures/coffee table- tire.jpg',
      category: 'home-decor',
      material: 'rubber',
    },
    {
      id: 2,
      name: 'Tire Planter',
      description: 'Colorful garden planter made from an upcycled car tire.',
      price: 499.00,
      image: 'pictures/planter.jpg',
      category: 'garden',
      material: 'rubber'
    },
    {
      id: 3,
      name: 'Bottle Planter',
      description: 'Unique garden planter made from recycled bottles.',
      price: 200.00,
      image: 'pictures/bottle-planter.jpg',
      category: 'home-decor',
      material: 'glass'
    },
    {
      id: 4,
      name: 'bag from cloth',
      description: 'Stylish upcycled bag made from repurposed cloth.',
      price: 250.00,
      image: 'pictures/A stylish upcycled bag made from repurposed cloth. The fabric is sewn together creatively, featuring patchwork or eco-friendly designs. The bag has st.webp',
      category: 'fashion',
      material: 'fabric'
    },
    {
      id: 5,
      name: 'Lamb Keepsake Toy',
      description: 'Unique keepsake toy made from upcycled old clothes.',
      price: 150.00,
      image: 'pictures/Keepsake-Toy-Lamb-Buntys-Basket-Keepsakes-.jpg',
      category: 'fashion',
      material: 'fabric'
    },
    {
      id: 6,
      name: 'Doormat',
      description: 'Handcrafted doormat made from recycled clothes.',
      price: 350.00,
      image: 'pictures/doormat from old cloths.webp',
      category: 'fashion',
      material: 'fabric'
    }
  ];
  
  
  // Filter products based on search and filter criteria
  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    const materialValue = materialFilter.value;
    const priceValue = priceFilter.value;
    
    return products.filter(product => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm);
      
      // Category filter
      const matchesCategory = categoryValue === '' || product.category === categoryValue;
      
      // Material filter
      const matchesMaterial = materialValue === '' || product.material === materialValue;
      
      // Price filter
      let matchesPrice = true;
      if (priceValue === 'under-10') {
        matchesPrice = product.price < 100;
      } else if (priceValue === '10-25') {
        matchesPrice = product.price >= 100 && product.price <= 250;
      } else if (priceValue === '25-50') {
        matchesPrice = product.price > 250 && product.price <= 400;
      } else if (priceValue === '50-100') {
        matchesPrice = product.price > 400 && product.price <= 800;
      } else if (priceValue === 'over-100') {
        matchesPrice = product.price > 800;
      }
      
      return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
    });
  }
  
  // Format price in Indian Rupees
  function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  }
  
  // Render products to the grid
  function renderProducts() {
    const filteredProducts = filterProducts();
    
    // Clear the grid
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
      productsGrid.innerHTML = '<p class="no-results">No products match your criteria. Try adjusting your filters.</p>';
      return;
    }
    
    // Add each product to the grid
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <p class="product-price">${formatPrice(product.price)}</p>
          <div class="product-meta">
            <span class="product-category">${formatCategory(product.category)}</span>
            <span class="product-material">${formatMaterial(product.material)}</span>
          </div>
          <button class="btn primary-btn" data-product-id="${product.id}">Buy Now</button>
        </div>
      `;
      
      productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to the view details buttons
    document.querySelectorAll('.product-card .btn').forEach(button => {
      button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        alert(`Product details would open for product ID: ${productId}`);
        // In a real app, this would navigate to a product details page
      });
    });
  }
  
  // Format category for display
  function formatCategory(category) {
    switch(category) {
      case 'home-decor':
        return 'Home Decor';
      case 'garden':
        return 'Garden';
      case 'furniture':
        return 'Furniture';
      case 'fashion':
        return 'Fashion & Accessories';
      case 'art':
        return 'Art & Crafts';
      default:
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
  }
  
  // Format material for display
  function formatMaterial(material) {
    switch(material) {
      case 'fabric':
        return 'Fabric & Textiles';
      case 'paper':
        return 'Paper & Cardboard';
      default:
        return material.charAt(0).toUpperCase() + material.slice(1);
    }
  }
  
  // Event listeners
  if (searchBtn) {
    searchBtn.addEventListener('click', renderProducts);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        renderProducts();
      }
    });
  }
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', renderProducts);
  }
  
  if (materialFilter) {
    materialFilter.addEventListener('change', renderProducts);
  }
  
  if (priceFilter) {
    priceFilter.addEventListener('change', renderProducts);
  }
  
  // Check URL parameters for filters
  function applyUrlFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('category')) {
      const category = urlParams.get('category');
      if (categoryFilter.querySelector(`option[value="${category}"]`)) {
        categoryFilter.value = category;
      }
    }
    
    if (urlParams.has('material')) {
      const material = urlParams.get('material');
      if (materialFilter.querySelector(`option[value="${material}"]`)) {
        materialFilter.value = material;
      }
    }
    
    if (urlParams.has('price')) {
      const price = urlParams.get('price');
      if (priceFilter.querySelector(`option[value="${price}"]`)) {
        priceFilter.value = price;
      }
    }
    
    if (urlParams.has('search')) {
      searchInput.value = urlParams.get('search');
    }
  }
  
  // Initialize
  if (productsGrid) {
    applyUrlFilters();
    renderProducts();
  }
  
  
  // Sell button functionality
  const sellButton = document.querySelector('.sell-section .btn');
  if (sellButton) {
    sellButton.addEventListener('click', function() {
      alert('In a complete application, this would take you to a seller registration or product listing page.');
    });
  }
});
