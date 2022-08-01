import { response } from 'express';
import fetch from 'node-fetch';

const apiURL = 'https://fakestoreapi.com';

const getCategories = async () => {
  const categories = await fetch(`${apiURL}/products/categories`).then((res) =>
    res.json()
  );

  const productsByCategory = categories.map(async (category) => {
    return await fetch(`${apiURL}/products/category/${category}`).then((res) =>
      res.json()
    );
  });

  return productsByCategory;
};

const createArrays = (products) => {
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

export const getProductsByCategory = async (req, res = response) => {
  const productsByCategory = await getCategories();
  const products = await Promise.all(productsByCategory);

  const productsArrays = createArrays(products);
  res.json(productsArrays);
};
