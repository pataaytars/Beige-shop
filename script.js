/**
 * The Beige Shop - Main JavaScript
 * script.js
 */

// ==========================================
// PRODUCT DATA
// ==========================================

const candleProducts = {
    1: {
        name: 'Fall Pillar Candles',
        price: 3500,
        images: [
            'https://theduskstore.com/cdn/shop/files/IMG_3962.jpg?v=1697475133&width=800',
            'https://theduskstore.com/cdn/shop/files/IMG_3965.jpg?v=1697475133&width=800',
            'https://theduskstore.com/cdn/shop/files/IMG_3962.jpg?v=1697475133&width=800'
        ],
        description: 'Beautiful fall-themed pillar candles perfect for autumn ambiance. Hand-poured with premium wax and featuring warm, inviting colors. Burns evenly for hours of enjoyment.'
    },
    2: {
        name: 'Fall Ceramic Candles',
        price: 4850,
        images: [
            'https://theduskstore.com/cdn/shop/files/IMG_3950.jpg?v=1697475359&width=800',
            'https://theduskstore.com/cdn/shop/files/IMG_3953.jpg?v=1697475359&width=800',
            'https://theduskstore.com/cdn/shop/files/IMG_3950.jpg?v=1697475359&width=800'
        ],
        description: 'Elegant ceramic candles with fall-inspired designs. Comes in beautiful ceramic containers that can be reused after the candle burns down. Premium scented wax blend.'
    },
    3: {
        name: 'Wax Warmer',
        price: 3000,
        images: [
            'https://theduskstore.com/cdn/shop/files/IMG_3980.jpg?v=1697475260&width=800',
            'https://theduskstore.com/cdn/shop/files/IMG_3982.jpg?v=1697475260&width=800',
            'https://theduskstore.com/cdn/shop/files/IMG_3980.jpg?v=1697475260&width=800'
        ],
        description: 'Electric wax warmer for melting scented wax safely. Features temperature control and elegant design that fits any decor. Currently sold out - check back soon!'
    },
    4: {
        name: 'Botanical Wax Melts',
        price: 2000,
        images: [
            'https://theduskstore.com/cdn/shop/files/IMG_3970.jpg?v=1697475199&width=800',
            'https://theduskstore.com/cdn/shop/files/IMG_3972.jpg?v=1697475199&width=800',
            'https://theduskstore.com/cdn/shop/files/IMG_3970.jpg?v=1697475199&width=800'
        ],
        description: 'Natural botanical wax melts infused with essential oils. Beautiful designs with real dried flowers. Long-lasting fragrance for any room.'
    },
    5: {
        name: 'Aura Wavy Pillar',
        price: 3000,
        images: [
            'https://theduskstore.com/cdn/shop/products/Aura_Wavy_Pillar.jpg?v=1658406399&width=800',
            'https://theduskstore.com/cdn/shop/products/Aura_Wavy_Pillar_2.jpg?v=1658406399&width=800',
            'https://theduskstore.com/cdn/shop/products/Aura_Wavy_Pillar.jpg?v=1658406399&width=800'
        ],
        description: 'Unique wavy design pillar candle that adds artistic flair to any space. Modern aesthetic meets traditional candlemaking. Premium quality wax.'
    },
    6: {
        name: 'Luna Display Tray',
        price: 4500,
        images: [
            'https://theduskstore.com/cdn/shop/files/Luna_Display_Tray.jpg?v=1692874122&width=800',
            'https://theduskstore.com/cdn/shop/files/Luna_Display_Tray_2.jpg?v=1692874122&width=800',
            'https://theduskstore.com/cdn/shop/files/Luna_Display_Tray.jpg?v=1692874122&width=800'
        ],
        description: 'Elegant moon-shaped display tray perfect for showcasing candles or decorative items. Made from premium materials with smooth finish.'
    },
    7: {
        name: 'Donut Candle Holder',
        price: 1000,
        images: [
            'https://theduskstore.com/cdn/shop/files/Donut_Candle_Holder.jpg?v=1692873884&width=800',
            'https://theduskstore.com/cdn/shop/files/Donut_Candle_Holder_2.jpg?v=1692873884&width=800',
            'https://theduskstore.com/cdn/shop/files/Donut_Candle_Holder.jpg?v=1692873884&width=800'
        ],
        description: 'Cute donut-shaped candle holder that adds playful charm to your space. Sturdy ceramic construction. Perfect for taper candles.'
    },
    8: {
        name: 'Arch Candle',
        price: 5000,
        images: [
            'https://theduskstore.com/cdn/shop/products/Arch_Candle.jpg?v=1646734567&width=800',
            'https://theduskstore.com/cdn/shop/products/Arch_Candle_2.jpg?v=1646734567&width=800',
            'https://theduskstore.com/cdn/shop/products/Arch_Candle.jpg?v=1646734567&width=800'
        ],
        description: 'Statement arch-shaped candle with minimalist design. Perfect centerpiece for modern interiors. Premium quality with extended burn time.'
    }
};

const dealProducts = {
    ramadan: {
        name: 'Ramzan Deal',
        price: 1000,
        images: [
            'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop'
        ],
        description: 'Complete Ramadan productivity bundle! Includes: 3 X Namaz planners to track your daily prayers, 1 Upgrade Bookmark for Quran reading, and 2 beautiful Quran Badges. Weekly modifications help make your Ramzan more productive and spiritually rewarding. High-quality materials with elegant Islamic designs.'
    },
    notebook: {
        name: 'Notebook Deal',
        price: 1500,
        images: [
            'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop'
        ],
        description: 'Premium collection of 5 beautiful notebooks with elegant beige-themed designs. Perfect for journaling, planning, and creative writing. Features high-quality paper (100 GSM) for smooth writing experience, durable covers with unique patterns, and lay-flat binding. Each notebook contains 190 pages. Ideal for students, professionals, and stationery enthusiasts.'
    }
};

// ==========================================
// CART FUNCTIONALITY
// ==========================================

let cart = [];
let currentModalProduct = null;
let currentModalQuantity = 1;

// Update cart count display
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4a3933;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Open cart (placeholder function)
function openCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    alert(`Cart page would open here.\nTotal items: ${totalItems}`);
    console.log('Cart contents:', cart);
}

// ==========================================
// MODAL FUNCTIONALITY
// ==========================================

function openProductModal(productId) {
    const product = candleProducts[productId];
    if (!product) return;
    
    currentModalProduct = { id: productId, ...product };
    currentModalQuantity = 1;
    
    displayModalContent(product.name, product.price, product.images, product.description);
}

function openDealModal(dealType) {
    const deal = dealProducts[dealType];
    if (!deal) return;
    
    currentModalProduct = { id: dealType, ...deal };
    currentModalQuantity = 1;
    
    displayModalContent(deal.name, deal.price, deal.images, deal.description);
}

function displayModalContent(name, price, images, description) {
    const modal = document.getElementById('productModal');
    
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalPrice').textContent = `Rs. ${price.toLocaleString()}.00 PKR`;
    document.getElementById('modalOldPrice').textContent = '';
    document.getElementById('quantityInput').value = 1;
    
    document.getElementById('modalMainImage').src = images[0];
    
    const thumbnails = document.getElementById('modalThumbnails');
    thumbnails.innerHTML = '';
    
    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.onclick = () => {
            document.getElementById('modalMainImage').src = img;
            document.querySelectorAll('.modal-thumbnails img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        if (index === 0) thumb.classList.add('active');
        thumbnails.appendChild(thumb);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentModalProduct = null;
    currentModalQuantity = 1;
}

function increaseQuantity() {
    const input = document.getElementById('quantityInput');
    let value = parseInt(input.value) || 1;
    if (value < 99) {
        value++;
        input.value = value;
        currentModalQuantity = value;
    }
}

function decreaseQuantity() {
    const input = document.getElementById('quantityInput');
    let value = parseInt(input.value) || 1;
    if (value > 1) {
        value--;
        input.value = value;
        currentModalQuantity = value;
    }
}

function addToCartFromModal() {
    if (!currentModalProduct) return;
    
    const quantity = parseInt(document.getElementById('quantityInput').value) || 1;
    const existingItem = cart.find(item => item.id === currentModalProduct.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: currentModalProduct.id,
            name: currentModalProduct.name,
            price: currentModalProduct.price,
            image: currentModalProduct.images[0],
            quantity: quantity
        });
    }
    
    updateCartCount();
    showNotification(`${quantity} x ${currentModalProduct.name} added to cart!`);
    closeModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Handle quantity input changes
document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantityInput');
    if (quantityInput) {
        quantityInput.addEventListener('change', () => {
            let value = parseInt(quantityInput.value) || 1;
            if (value < 1) value = 1;
            if (value > 99) value = 99;
            quantityInput.value = value;
            currentModalQuantity = value;
        });
    }
});

// ==========================================
// CANDLE SEASON PRODUCT INTERACTIONS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const blob = card.querySelector('.blob-container');
        const productId = card.getAttribute('data-id');

        // Give the card a 3D space for the tilt to work
        card.style.perspective = "1000px";

        // Click Handling - Open Modal
        card.addEventListener('click', () => {
            openProductModal(parseInt(productId));
        });

        // Optimized Mouse Interaction for 3D Tilt Effect
        card.addEventListener('mousemove', (e) => {
            if (!blob) return;

            const rect = card.getBoundingClientRect();
            
            // Calculate mouse position relative to center of card (-0.5 to 0.5)
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            // Disable transition temporarily during mousemove
            blob.style.transition = "none";

            // Apply tilt and lift effect
            blob.style.transform = `
                translateY(-10px) 
                rotateX(${-y * 15}deg) 
                rotateY(${x * 15}deg)
            `;
        });

        // Reset on Mouse Leave
        card.addEventListener('mouseleave', () => {
            if (!blob) return;

            // Re-enable smooth transition
            blob.style.transition = "transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), border-radius 0.8s ease";
            blob.style.transform = `translateY(0) rotateX(0) rotateY(0)`;
        });
    });

    // Initialize cart count
    updateCartCount();
});

    // ==========================================
// REVIEW SLIDER (5 REVIEWS)
// ==========================================
const swiper = new Swiper('.reviewsSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// See More Toggle Logic
function toggleReview(btn) {
    const parent = btn.parentElement;
    const shortText = parent.querySelector('.review-text-short');
    const fullText = parent.querySelector('.review-text-full');
    
    if (fullText.classList.contains('hidden')) {
        fullText.classList.remove('hidden');
        shortText.classList.add('hidden');
        btn.textContent = 'See Less';
    } else {
        fullText.classList.add('hidden');
        shortText.classList.remove('hidden');
        btn.textContent = 'See More';
    }
}