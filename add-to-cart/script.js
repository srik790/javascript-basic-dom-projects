const cartItems = [];

// Add event listener to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
	button.addEventListener('click', addToCart);
});

function addToCart(event) {
	const button = event.target;
	const item = {
		name: button.dataset.name,
		price: button.dataset.price
	};
	cartItems.push(item);
	updateCart();
}

function updateCart() {
	const cartTotal = document.getElementById('cart-total');
	const cartItemsList = document.getElementById('cart-items');
	let total = 0;
	cartItemsList.innerHTML = '';
	cartItems.forEach(item => {
		const li = document.createElement('li');
		li.innerText = `${item.name} - $${item.price}`;
		cartItemsList.appendChild(li);
		total += parseFloat(item.price);
	});
	cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', checkout);

function checkout() {
	alert('Thank you for your purchase!');
	cartItems.length = 0;
	updateCart();
}
