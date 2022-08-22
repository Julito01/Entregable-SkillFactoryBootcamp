import { HttpClient } from '../helpers/http-client.js';

const httpClient = new HttpClient();

export const fetchProductsByCategory = async (apiURL) => {
  const productsByCategory = await getCategories(apiURL);
  const products = await Promise.all(productsByCategory);

  return createArrays(products);
};

export const getProductNameById = async (id, apiURL) => {
  const data = await httpClient.get(`${apiURL}/products/${id}`);
  return data.title;
};

export const getCategories = async (apiURL) => {
  const categories = await httpClient.get(`${apiURL}/products/categories`);

  const productsByCategory = categories.map(async (category) => {
    return await httpClient.get(`${apiURL}/products/category/${category}`);
  });

  return productsByCategory;
};

export const getMostExpensiveProduct = (productsList) => {
  let mostExpensiveProduct = {};
  let price = 0;

  for (let i = 0; i < productsList.length; i++) {
    if (i == 0) {
      price = productsList[i].price;
      mostExpensiveProduct = productsList[i];
    } else if (productsList[i].price > price) {
      price = productsList[i].price;
      mostExpensiveProduct = productsList[i];
    }
  }

  return mostExpensiveProduct;
};

export const createArrays = (products) => {
  const arrays = {
    electronicProducts: [],
    jewerelyProducts: [],
    menProducts: [],
    womenProducts: [],
  };

  products.forEach((element) => {
    element.forEach((product) => {
      switch (product.category) {
        case 'electronics':
          arrays.electronicProducts.push(product);
          break;
        case 'jewelery':
          arrays.jewerelyProducts.push(product);
          break;
        case "men's clothing":
          arrays.menProducts.push(product);
          break;
        case "women's clothing":
          arrays.womenProducts.push(product);
          break;
      }
    });
  });

  return arrays;
};
