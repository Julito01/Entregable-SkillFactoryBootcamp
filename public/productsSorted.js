const baseURL = 'http://localhost:3000';

const searchButton = document.getElementById('search-button');
const sortOption = document.getElementById('sort-options');

searchButton.addEventListener('click', getProductsSorted);

async function getProductsSorted(e) {
  e.preventDefault();
  const sortOption = document.getElementById('sort-options').value;
  const res = await fetch(`${baseURL}/products/prices?order=${sortOption}`, {
    method: 'GET',
  });
  //   const products = await res.json();
  //   displayData(products);
}

const displayData = (products) => {};

const createDiv = (product, productsList) => {
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

  productsList.appendChild(divListItem);
};
