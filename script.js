
/* =========================================
   1. PRODUCT SEARCH
========================================= */

const searchInput = document.getElementById("product-search");
const products = document.querySelectorAll(".product-card");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    let found = 0;

    products.forEach(function (product) {
        const productText = product.textContent.toLowerCase();

        if (productText.includes(searchText)) {
            product.style.display = "";
            found++;
        } else {
            product.style.display = "none";
        }
    });

    if (found === 0) {
        noResults.hidden = false;
    } else {
        noResults.hidden = true;
    }
});


/* =========================================
   2. SHOPPING CART
========================================= */

let cart = [];

const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartItems = document.getElementById("cart-items");
const cartPanel = document.getElementById("cart-panel");

const openCart = document.getElementById("open-cart");
const closeCart = document.getElementById("close-cart");
const clearCart = document.getElementById("clear-cart");

const cartMessage = document.getElementById("cart-message");
const cartStatus = document.getElementById("cart-status");

const addButtons = document.querySelectorAll(".add-to-cart");


/* Update Cart Details */

function updateCart() {
    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach(function (item, index) {
        const row = document.createElement("div");
        row.className = "cart-item";

        const itemName = document.createElement("span");
        itemName.textContent = item.name + " - ₹" + item.price;

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.className = "remove-item";

        removeButton.addEventListener("click", function () {
            const removedItem = cart[index];

            cart.splice(index, 1);

            updateCart();

            cartStatus.textContent =
                removedItem.name + " removed from cart.";
        });

        row.appendChild(itemName);
        row.appendChild(removeButton);

        cartItems.appendChild(row);

        total = total + item.price;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}


/* Add Product to Cart */

addButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const product = button.closest(".product-card");

        const name = product.querySelector("h3").textContent;

        const priceText = product.querySelector(".price").textContent;

        const price = Number(priceText.replace(/[^0-9.]/g, ""));

        const item = {
            name: name,
            price: price
        };

        cart.push(item);

        updateCart();

        cartPanel.hidden = false;

        cartMessage.textContent = name + " added to your cart!";

        cartStatus.textContent = "Product added successfully.";
    });
});


/* Open Cart */

openCart.addEventListener("click", function () {
    cartPanel.hidden = false;
});


/* Close Cart */

closeCart.addEventListener("click", function () {
    cartPanel.hidden = true;
});


/* Clear Entire Cart */

clearCart.addEventListener("click", function () {
    cart = [];

    updateCart();

    cartStatus.textContent = "Your cart has been cleared.";
    cartMessage.textContent = "";
});


/* Initial Cart Display */

updateCart();


/* =========================================
   3. MOBILE NAVIGATION
========================================= */

const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


/* Open and Close Mobile Menu */

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);
});


/* Close Menu After Clicking a Link */

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
    });
});


/* ========================================
   WEEK 5: SIMPLE SPA ROUTING
   ======================================== */

const spaRoutes = {
    home: ["home", "categories", "products", "reviews"],
    categories: ["categories"],
    products: ["products"],
    reviews: ["reviews"]
};

function showSpaPage(page, updateHistory = true) {
    // Check whether the requested page exists
    if (!spaRoutes[page]) {
        page = "home";
    }

    // Find the main content sections
    const sections = [
        "home",
        "categories",
        "products",
        "reviews"
    ];

    // Show or hide sections according to the selected page
    sections.forEach(function (sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            section.hidden = !spaRoutes[page].includes(sectionId);
        }
    });

    // Show other homepage sections only on Home
    const homeOnlySections = [
        ".benefits",
        ".offer-section"
    ];

    homeOnlySections.forEach(function (selector) {
        const section = document.querySelector(selector);

        if (section) {
            section.hidden = page !== "home";
        }
    });

    // Close the cart when navigating to another page
    const cartPanel = document.getElementById("cart-panel");

    if (cartPanel) {
        cartPanel.hidden = true;
    }

    // Update the browser URL without reloading the page
    if (updateHistory) {
        history.pushState({ page: page }, "", "#" + page);
    }

    // Move to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Handle navigation links and buttons that use page hashes
document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');

    if (!link) {
        return;
    }

    const page = link.getAttribute("href").substring(1);

    if (spaRoutes[page]) {
        event.preventDefault();
        showSpaPage(page);
    }
});

// Handle browser Back and Forward buttons
window.addEventListener("popstate", function () {
    const page = window.location.hash.substring(1) || "home";
    showSpaPage(page, false);
});

// Load the correct page when the website opens
const initialPage = window.location.hash.substring(1) || "home";
showSpaPage(initialPage, false);


