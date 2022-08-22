import { response } from 'express';

import {
  getMostExpensiveProduct,
  fetchProductsByCategory,
} from '../helpers/products-functions.js';
import { fetchData } from '../helpers/global-functions.js';
import { HttpClient } from '../helpers/http-client.js';

const httpClient = new HttpClient();
const apiURL = 'https://fakestoreapi.com';

export const getAllProducts = async (req, res = response) => {
  const data = await fetchData(apiURL, 'products');
  res.json(data);
};

export const getProductByID = async (req, res = response) => {
  try {
    const { id } = req.params;
    const data = await httpClient.get(`${apiURL}/products/${id}`);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const getProductsByCategory = async (req, res = response) => {
  res.json(fetchProductsByCategory(apiURL));
};

export const getProductsSorted = async (req, res = response) => {
  const data = await fetchData(apiURL, 'products');
  const { order } = req.query;
  let productsSorted = [];
  if (order == 'asc') {
    productsSorted = data.sort((productA, productB) => {
      return productA.price - productB.price;
    });
  } else {
    productsSorted = data.sort((productA, productB) => {
      return productB.price - productA.price;
    });
  }
  res.json(productsSorted);
};

export const getProductsExpensive = async (req, res = response) => {
  const data = await fetchProductsByCategory(apiURL);
  const mostExpensiveProducts = [];

  mostExpensiveProducts.push(getMostExpensiveProduct(data.electronicProducts));
  mostExpensiveProducts.push(getMostExpensiveProduct(data.jewerelyProducts));
  mostExpensiveProducts.push(getMostExpensiveProduct(data.menProducts));
  mostExpensiveProducts.push(getMostExpensiveProduct(data.womenProducts));

  res.json(mostExpensiveProducts);
};
