const productButtons = document.querySelectorAll('.add-to-wishlist');
const wishlist = document.querySelector('#wishlist ul');
const noItemsMessage = wishlist.querySelector('.no-items');

productButtons.forEach(button => {
	button.addEventListener('click', () => {
		const productId = button.dataset.id;
		const product = button.parentElement;
		const productTitle = product.querySelector('h3').innerText;
		const productPrice = product.querySelector('p').innerText;

		const wishlistItem = document.createElement('li');
		wishlistItem.innerHTML = `
  <span>${productTitle}</span>
  <span>${productPrice}</span>
  <button class="remove-from-wishlist" data-id="${productId}">Remove</button>
`;

		wishlist.appendChild(wishlistItem);
		noItemsMessage.style.display = 'none';

		const removeButtons = wishlist.querySelectorAll('.remove-from-wishlist');
		removeButtons.forEach(button => {
			button.addEventListener('click', () => {
				const productId = button.dataset.id;
				const wishlistItem = button.parentElement;
				wishlistItem.remove();

				const remainingItems = wishlist.querySelectorAll('li');
				if (remainingItems.length === 0) {
					noItemsMessage.style.display = 'block';
				}
			});
		});
	})
})

