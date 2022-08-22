const baseURL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', getProductsExpensive);

async function getProductsExpensive(e) {
  e.preventDefault();
  const res = await fetch(`${baseURL}/products/expensive`, {
    method: 'GET',
  });
  const products = await res.json();
  //   displayData(products);
}
