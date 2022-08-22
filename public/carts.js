const baseURL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', getCarts);

async function getCarts(e) {
  e.preventDefault();
  const res = await fetch(`${baseURL}/carts/`, {
    method: 'GET',
  });
  const carts = await res.json();
  displayData(carts);
}

const displayData = (carts) => {
  carts.forEach((cart) => createDiv(cart));
};

const createDiv = (cart) => {
  const carts = document.getElementById('carts');

  const divListItem = document.createElement('div');
  divListItem.classList.add('list-group-item');

  const divItemHeader = document.createElement('div');
  divItemHeader.classList.add('d-flex', 'w-100', 'justify-content-between');

  const itemHeader = document.createElement('h5');
  itemHeader.classList.add('mb-1');

  itemHeader.appendChild(
    document.createTextNode(`Carrito del usuario con ID: ${cart.userId}`)
  );
  divItemHeader.appendChild(itemHeader);
  divListItem.appendChild(divItemHeader);

  cart.products.forEach((product) => {
    const productIdContainer = document.createElement('p');
    const productQuantityContainer = document.createElement('p');
    const productIdText = document.createElement('b');

    const productQuantityText = document.createElement('b');

    productIdText.appendChild(document.createTextNode(`${product.productId}`));
    productQuantityText.appendChild(
      document.createTextNode(`${product.quantity}`)
    );

    productIdContainer.classList.add('mb-1');
    productQuantityContainer.classList.add('mb-1');

    productIdContainer.appendChild(
      document.createTextNode('Nombre del producto: ')
    );
    productQuantityContainer.appendChild(
      document.createTextNode('Cantidad de producto: ')
    );

    productIdContainer.appendChild(productIdText);
    productQuantityContainer.appendChild(productQuantityText);

    divListItem.appendChild(productIdContainer);
    divListItem.appendChild(productQuantityContainer);
  });

  carts.appendChild(divListItem);
};
