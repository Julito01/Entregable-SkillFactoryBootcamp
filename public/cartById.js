const baseURL = 'http://localhost:3000';

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getCart);
const idInput = document.getElementById('id-input');

async function getCart(e) {
  e.preventDefault();
  const id = idInput.value || 1;
  const res = await fetch(`${baseURL}/carts/${id}`, {
    method: 'GET',
  });
  const cart = await res.json();

  if (Object.keys(cart).length) {
    displayData(cart);
  } else {
    clearData();
    document
      .getElementById('title')
      .appendChild(document.createTextNode('No existe un carrito con ese id.'));
  }
}

const displayData = (cart) => {
  const [cartId, productName, quantity] = selectElements();
  clearData();

  cart.products.forEach((product) => {
    cartId.appendChild(document.createTextNode(cart.userId));
    productName.appendChild(document.createTextNode(product.productId));
    quantity.appendChild(document.createTextNode(product.quantity));
  });
};

const clearData = () => {
  const [cartId, productName, quantity] = selectElements();
  cartId.textContent = '';
  productName.textContent = '';
  quantity.textContent = '';
};

const selectElements = () => {
  const cartId = document.getElementById('user-id');
  const productName = document.getElementById('product-name');
  const quantity = document.getElementById('quantity');

  return [cartId, productName, quantity];
};
