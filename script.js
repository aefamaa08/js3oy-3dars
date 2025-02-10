const productContainer = document.getElementById("productContainer");
const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
let total = 0;

fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then(data => {
        kartochkanichiqar(data); 
    });

function kartochkanichiqar(products) {
    productContainer.innerHTML = ''; 
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card'); 
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3>${product.title}</h3>
            <p>${product.description.slice(0, 100)}...</p>
            <p><strong> ${product.price}</strong></p>
            <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
        `;
        productContainer.appendChild(card);
    });
}

function addToCart(id, title, price) {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${title} - ${price}`;
    cartItems.appendChild(cartItem);
    
    total += price;
    totalPriceElement.textContent = `Total: ${total.toFixed(2)}`;
}