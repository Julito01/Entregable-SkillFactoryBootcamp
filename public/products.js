const baseURL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', getProducts);

async function getProducts(e) {
  e.preventDefault();
  const res = await fetch(`${baseURL}/products/`, {
    method: 'GET',
  });
  const products = await res.json();
  displayData(products);
}

const displayData = (products) => {
  products.forEach((product) => createDiv(product));
};

const createDiv = (product) => {
  const products = document.getElementById('products');

  const divListItem = document.createElement('div');
  divListItem.classList.add('list-group-item');

  const divItemHeader = document.createElement('div');
  divItemHeader.classList.add('d-flex', 'w-100', 'justify-content-between');

  const itemHeader = document.createElement('h5');
  itemHeader.classList.add('mb-1');

  const itemDescription = document.createElement('p');
  itemDescription.classList.add('mb-1');

  const itemPrice = document.createElement('small');

  itemHeader.appendChild(document.createTextNode(product.title));
  divItemHeader.appendChild(itemHeader);
  itemDescription.appendChild(document.createTextNode(product.description));
  itemPrice.appendChild(document.createTextNode(product.price));

  divListItem.appendChild(divItemHeader);
  divListItem.appendChild(itemDescription);
  divListItem.appendChild(itemPrice);

  products.appendChild(divListItem);
};
