const baseURL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', getCarts);

async function getCarts(e) {
  e.preventDefault();
  const res = await fetch(`${baseURL}/carts/bigcarts`, {
    method: 'GET',
  });
  const bigCarts = await res.json();
  displayData(bigCarts);
}

const displayData = (carts) => {
  carts.forEach((cart) => createDiv(cart));
};

const createDiv = (cart) => {
  const mainContainer = document.getElementById('main-container');

  const userTitle = document.createElement('h5');
  const quantityTitle = document.createElement('p');
  const userName = document.createElement('b');
  const quantity = document.createElement('b');

  userTitle.appendChild(document.createTextNode('Carrito del usuario: '));
  quantityTitle.appendChild(document.createTextNode('Cantidad: '));

  userName.appendChild(document.createTextNode(cart.userId));
  quantity.appendChild(document.createTextNode(cart.products.length));

  userTitle.appendChild(userName);
  quantityTitle.appendChild(quantity);

  mainContainer.appendChild(userTitle);
  mainContainer.appendChild(quantityTitle);
};
