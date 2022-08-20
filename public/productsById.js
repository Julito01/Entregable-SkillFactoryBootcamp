const baseURL = 'http://localhost:3000';

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getProduct);
const idInput = document.getElementById('id-input');

async function getProduct(e) {
  e.preventDefault();
  const id = idInput.value || 1;
  const res = await fetch(`${baseURL}/products/${id}`, {
    method: 'GET',
  });
  const product = await res.json();

  if (Object.keys(product).length) {
    displayData(product);
  } else {
    clearData();
    document
      .getElementById('title')
      .appendChild(
        document.createTextNode('No existe un producto con ese id.')
      );
  }
}

const displayData = (product) => {
  const [productTitle, productDescription, productPrice] = selectElements();
  clearData();

  productTitle.appendChild(document.createTextNode(product.title));
  productDescription.appendChild(document.createTextNode(product.description));
  productPrice.appendChild(document.createTextNode(product.price));
};

const clearData = () => {
  const [productTitle, productDescription, productPrice] = selectElements();
  productTitle.textContent = '';
  productDescription.textContent = '';
  productPrice.textContent = '';
};

const selectElements = () => {
  const productTitle = document.getElementById('title');
  const productDescription = document.getElementById('description');
  const productPrice = document.getElementById('price');

  return [productTitle, productDescription, productPrice];
};
