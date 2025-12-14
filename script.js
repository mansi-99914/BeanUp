/* =========================================
   1. DATA SOURCE (Simulated Backend)
   ========================================= */
const coffeeMenu = [
  {
    id: 1,
    name: "Classic Espresso",
    category: "Hot Coffee",
    price: 180.0,
    rating: 4.8,
    image:
      "https://t3.ftcdn.net/jpg/15/87/65/92/360_F_1587659204_8lzNToloDjNBj4iOEnBJthZa9SP4FFXZ.jpg",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Vanilla Latte",
    category: "Hot Coffee",
    price: 260.0,
    rating: 4.7,
    image:
      "https://t4.ftcdn.net/jpg/15/40/46/85/360_F_1540468516_PHM1mLCJsSzLIhm8qlbnqgYeooRTrvLB.jpg",
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    category: "Hot Coffee",
    price: 280.0,
    rating: 4.9,
    image: "assets/Caramel Macchiato.jpg",
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Cold Brew Tonic",
    category: "Cold Coffee",
    price: 320.0,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/1974603715/photo/espresso-tonic-in-a-glass-on-cafe-table-coffee-with-tonic-in-a-glass-with-ice-on-a-light.jpg?s=612x612&w=0&k=20&c=1RuUewe4HWHnPyxYWZv1TBh82Ti3LBV0n3--dQfWdSQ=",
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Iced Americano",
    category: "Cold Coffee",
    price: 220.0,
    rating: 4.5,
    image: "assets/Iced Americano.jpg",
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Hazelnut Frappe",
    category: "Special Flavors",
    price: 350.0,
    rating: 4.9,
    image:
      "https://www.nestleprofessional.in/sites/default/files/2021-08/Cookie-Frappe-Thumbnail.jpg",
    isBestSeller: true,
  },
  {
    id: 7,
    name: "Pumpkin Spice Latte",
    category: "Special Flavors",
    price: 330.0,
    rating: 4.7,
    image: "assets/Pumpkin Spice Latte.jpg",
    isBestSeller: false,
  },
  {
    id: 8,
    name: "Irish Coffee",
    category: "Signature",
    price: 420.0,
    rating: 5.0,
    image: "assets/Irish Coffee.jpg",
    isBestSeller: true,
  },
  {
    id: 9,
    name: "Affogato Delight",
    category: "Signature",
    price: 380.0,
    rating: 4.8,
    image:
      "https://img.freepik.com/premium-photo/ice-cream-decorated-with-mint-cookies_636803-1140.jpg",
    isBestSeller: false,
  },
  {
    id: 10,
    name: "Flat White",
    category: "Hot Coffee",
    price: 240.0,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/2956954/pexels-photo-2956954.jpeg?cs=srgb&dl=pexels-urlapovaanna-2956954.jpg&fm=jpg",
    isBestSeller: false,
  },
  {
    id: 11,
    name: "Mocha Bliss",
    category: "Hot Coffee",
    price: 290.0,
    rating: 4.8,
    image:
      "https://img.freepik.com/premium-photo/iced-mocha-coffee-bliss_1170794-45801.jpg",
    isBestSeller: true,
  },
  {
    id: 12,
    name: "Iced Vanilla Latte",
    category: "Cold Coffee",
    price: 300.0,
    rating: 4.7,
    image:
      "https://wendisaipkitchen.com/wp-content/uploads/2021/05/Iced-Vanilla-Latte-Landscape-500x500.jpg?crop=1",
    isBestSeller: false,
  },
  {
    id: 13,
    name: "Chocolate Frappe",
    category: "Cold Coffee",
    price: 360.0,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/926990564/photo/chocolate-milk-and-whipped-cream.jpg?s=612x612&w=0&k=20&c=LabS3iGKio9kYS7OUGsosTm0Bb4XKY8WkXPer_RU3IQ=",
    isBestSeller: true,
  },
  {
    id: 14,
    name: "Cinnamon Cappuccino",
    category: "Hot Coffee",
    price: 270.0,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA=",
    isBestSeller: false,
  },
  {
    id: 15,
    name: "Iced Caramel Latte",
    category: "Cold Coffee",
    price: 320.0,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/673742908/photo/iced-caramel-latte-coffee-in-a-tall-glass.jpg?s=612x612&w=0&k=20&c=L5vH2S7jFqzOM8qGIK-iLKrUfSGGGf68ZPmR5xrdAKU=",
    isBestSeller: true,
  },
  {
    id: 16,
    name: "Rose Latte",
    category: "Special Flavors",
    price: 340.0,
    rating: 4.5,
    image:
      "https://cornercoffeestore.com/wp-content/uploads/2021/08/rose-latte_darimo_Shutterstock.jpg",
    isBestSeller: false,
  },
  {
    id: 17,
    name: "Coconut Cold Brew",
    category: "Special Flavors",
    price: 360.0,
    rating: 4.7,
    image: "https://rawc.com.au/wp-content/uploads/2025/02/conct.jpg",
    isBestSeller: false,
  },
  {
    id: 18,
    name: "Double Shot Espresso",
    category: "Hot Coffee",
    price: 210.0,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/1482708529/photo/professional-espresso-machine-while-preparing-two-espressos-shot-in-a-coffee-shop-close-up-of.jpg?s=612x612&w=0&k=20&c=7o9oeh9hnVv2ZB0W8ZZbZME9Gfr9ZNgziaVs-iX3riM=",
    isBestSeller: true,
  },
  {
    id: 19,
    name: "Honey Almond Latte",
    category: "Signature",
    price: 390.0,
    rating: 4.8,
    image:
      "https://taylorandcolledge.co.uk/assets/recipes/assets/d5c074d3f978452f9dfcac8f058db3d7/1272x764/int-tc-2024-flavours-almond-almod-coffee-4.webp",
    isBestSeller: false,
  },
  {
    id: 20,
    name: "Belgian Chocolate Mocha",
    category: "Signature",
    price: 430.0,
    rating: 5.0,
    image:
      "https://img.freepik.com/premium-photo/belgian-chocolate-mocha-european-chocolate-shop_887552-46787.jpg",
    isBestSeller: true,
  },
  {
    id: 21,
    name: "Single Origin Pour Over",
    category: "Signature",
    price: 450.0,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974",
    isBestSeller: true,
  },
];

/* =========================================
   2. STATE MANAGEMENT & INITIALIZATION
   ========================================= */
let cart = JSON.parse(localStorage.getItem("beanup-cart")) || [];
let favorites = JSON.parse(localStorage.getItem("beanup-favs")) || [];
let currentFilter = "all";
let searchQuery = "";
let currentSort = "default";

document.addEventListener("DOMContentLoaded", () => {
  // Simulate Loading
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => document.getElementById("loader").remove(), 500);
  }, 1500);

  initSlider();
  renderProducts();
  updateCartUI();
  updateFavUI();
  setupEventListeners();
  setupTheme();
});

/* =========================================
   3. HERO SLIDER LOGIC
   ========================================= */
function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Auto slide
  let slideInterval = setInterval(nextSlide, 5000);

  // Controls
  nextBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000);
  });

  prevBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 5000);
  });
}

/* =========================================
   4. RENDER & FILTER PRODUCTS
   ========================================= */
function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  // Filter Logic
  let filtered = coffeeMenu.filter((item) => {
    const matchesCategory =
      currentFilter === "all" ||
      (currentFilter === "best-seller"
        ? item.isBestSeller
        : item.category === currentFilter);
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort Logic
  if (currentSort === "low-high") filtered.sort((a, b) => a.price - b.price);
  if (currentSort === "high-low") filtered.sort((a, b) => b.price - a.price);

  // Render
  filtered.forEach((item) => {
    const isFav = favorites.some((fav) => fav.id === item.id);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <div class="card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${
                  item.isBestSeller
                    ? '<span class="best-seller-badge">Best Seller</span>'
                    : ""
                }
            </div>
            <div class="card-info">
                <div class="card-header">
                    <h3>${item.name}</h3>
                    <span class="price">₹${item.price.toFixed(2)}</span>
                </div>
                <div class="rating">
                    ${getStarRating(item.rating)} <span>(${item.rating})</span>
                </div>
                <div class="card-actions">
                    <button class="add-btn" onclick="addToCart(${item.id})">
                        Add to Cart
                    </button>
                    <button class="fav-btn-card ${
                      isFav ? "active" : ""
                    }" onclick="toggleFav(${item.id})">
                        <i class="${
                          isFav ? "ri-heart-fill" : "ri-heart-line"
                        }"></i>
                    </button>
                </div>
            </div>
        `;
    grid.appendChild(card);
  });

  if (filtered.length === 0) {
    grid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center;">No coffee found matching your criteria.</p>';
  }
}

function getStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  let stars = "";
  for (let i = 0; i < fullStars; i++) stars += '<i class="ri-star-fill"></i>';
  if (hasHalf) stars += '<i class="ri-star-half-fill"></i>';
  return stars;
}

/* =========================================
   5. CART & FAVORITES LOGIC
   ========================================= */
function addToCart(id) {
  const item = coffeeMenu.find((p) => p.id === id);
  const existing = cart.find((c) => c.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${item.name} to cart!`);
  openCart();
}

function updateCartQty(id, change) {
  const item = cart.find((c) => c.id === id);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) cart = cart.filter((c) => c.id !== id);
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(id) {
  cart = cart.filter((c) => c.id !== id);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("beanup-cart", JSON.stringify(cart));
}

function updateCartUI() {
  const container = document.getElementById("cart-items");
  const countBadge = document.getElementById("cart-count");
  const subtotalEl = document.getElementById("cart-subtotal");
  const taxEl = document.getElementById("cart-tax");
  const totalEl = document.getElementById("cart-total-final");

  countBadge.innerText = cart.reduce((acc, item) => acc + item.qty, 0);
  container.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.qty;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateCartQty(${
                      item.id
                    }, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQty(${
                      item.id
                    }, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${
              item.id
            })"><i class="ri-delete-bin-line"></i></button>
        `;
    container.appendChild(div);
  });

  if (cart.length === 0)
    container.innerHTML =
      '<div class="empty-cart-msg">Your cart is empty.</div>';

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  subtotalEl.innerText = `₹${subtotal.toFixed(2)}`;
  taxEl.innerText = `₹${tax.toFixed(2)}`;
  totalEl.innerText = `₹${total.toFixed(2)}`;
}

// --- Favorites Logic ---
function toggleFav(id) {
  const item = coffeeMenu.find((p) => p.id === id);
  const index = favorites.findIndex((f) => f.id === id);

  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Removed from favorites");
  } else {
    favorites.push(item);
    showToast("Added to favorites");
  }

  localStorage.setItem("beanup-favs", JSON.stringify(favorites));
  renderProducts(); // Re-render to update heart icon
  updateFavUI();
}

function updateFavUI() {
  document.getElementById("fav-count").innerText = favorites.length;
  const container = document.getElementById("fav-items");
  container.innerHTML = "";

  favorites.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>₹${item.price.toFixed(2)}</p>
                <button class="add-btn" style="padding: 5px 10px; font-size: 0.8rem; margin-top:5px;" onclick="addToCart(${
                  item.id
                })">Move to Cart</button>
            </div>
            <button class="remove-item" onclick="toggleFav(${
              item.id
            })"><i class="ri-close-circle-line"></i></button>
        `;
    container.appendChild(div);
  });
}

/* =========================================
   6. UI INTERACTIONS & EVENTS
   ========================================= */
function setupEventListeners() {
  // Search & Filter
  document.getElementById("search-input").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  document.getElementById("sort-select").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderProducts();
    });
  });

  // Sidebar Toggles
  const cartSidebar = document.getElementById("cart-sidebar");
  const favSidebar = document.getElementById("fav-sidebar");
  const overlay = document.getElementById("cart-overlay");

  window.openCart = () => {
    // Exposed globally
    cartSidebar.classList.add("open");
    overlay.classList.add("open");
    favSidebar.classList.remove("open");
  };

  document.getElementById("cart-btn").addEventListener("click", openCart);
  document.getElementById("close-cart").addEventListener("click", () => {
    cartSidebar.classList.remove("open");
    overlay.classList.remove("open");
  });

  document.getElementById("fav-btn").addEventListener("click", () => {
    favSidebar.classList.add("open");
    overlay.classList.add("open");
    cartSidebar.classList.remove("open");
  });

  document.getElementById("close-fav").addEventListener("click", () => {
    favSidebar.classList.remove("open");
    overlay.classList.remove("open");
  });

  overlay.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
    favSidebar.classList.remove("open");
    overlay.classList.remove("open");
  });

  // Mobile Menu
  const navLinks = document.getElementById("navLinks");
  document.getElementById("menu-btn").addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Sticky Navbar
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });
}

/* =========================================
   7. UTILITIES
   ========================================= */
function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color: var(--accent)"></i> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideInRight 0.3s ease reverse";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function setupTheme() {
  const toggle = document.getElementById("theme-toggle");
  const icon = toggle.querySelector("i");

  // Check saved theme
  const savedTheme = localStorage.getItem("beanup-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  icon.className = savedTheme === "dark" ? "ri-sun-line" : "ri-moon-line";

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("beanup-theme", next);
    icon.className = next === "dark" ? "ri-sun-line" : "ri-moon-line";
  });
}
