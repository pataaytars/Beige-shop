// Load cart from localStorage
let cart = [];

function loadCart() {
    const savedCart = localStorage.getItem('beigeshop_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartDisplay();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('beigeshop_cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Update cart count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const checkoutSection = document.getElementById('checkoutSection');
    
    updateCartCount();
    
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        emptyCart.style.display = 'block';
        checkoutSection.style.display = 'none';
        return;
    }
    
    emptyCart.style.display = 'none';
    checkoutSection.style.display = 'block';
    
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rs. ${item.price}</div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <button class="btn-remove" onclick="removeItem(${index})">🗑️</button>
                </div>
            </div>
            <div style="margin-left: auto; font-size: 1.3rem; font-weight: bold; color: #4a3933;">
                Rs. ${item.price * item.quantity}
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    updateSummary();
}

// Increase quantity
function increaseQuantity(index) {
    cart[index].quantity++;
    saveCart();
}

// Decrease quantity
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        saveCart();
    }
}

// Remove item
function removeItem(index) {
    if (confirm('Remove this item from cart?')) {
        cart.splice(index, 1);
        saveCart();
    }
}

// Update summary
function updateSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? 150 : 0;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = `Rs. ${subtotal}`;
    document.getElementById('shipping').textContent = `Rs. ${shipping}`;
    document.getElementById('total').textContent = `Rs. ${total}`;
}

// Toggle checkout form
function toggleCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    
    if (form.style.display === 'block') {
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

// Submit order
function submitOrder(event) {
    event.preventDefault();
    
    const orderData = {
        customer: {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            postalCode: document.getElementById('postalCode').value
        },
        paymentMethod: document.getElementById('paymentMethod').value,
        instructions: document.getElementById('instructions').value,
        items: cart,
        subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        shipping: 150,
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 150
    };
    
    // In a real application, you would send this to a server
    console.log('Order submitted:', orderData);
    
    // Show success message
    alert(`Thank you for your order, ${orderData.customer.name}!\n\nOrder Total: Rs. ${orderData.total}\n\nYou will receive a confirmation email at ${orderData.customer.email}`);
    
    // Clear cart
    cart = [];
    saveCart();
    
    // Reset form
    document.getElementById('checkoutForm').reset();
    toggleCheckoutForm();
    
    // Optionally redirect to home page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});