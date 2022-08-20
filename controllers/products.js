import { response } from 'express';
import fetch from 'node-fetch';

import { createArrays } from '../helpers/products-functions.js';
import { HttpClient } from '../helpers/http-client.js';

const httpClient = new HttpClient();
const apiURL = 'https://fakestoreapi.com';

export const getAllProducts = async (req, res = response) => {
  const data = await httpClient.get(`${apiURL}/products`);
  return res.json(data);
};

export const getProductByID = async (req, res = response) => {
  try {
    const { id } = req.params;
    const data = await httpClient.get(`${apiURL}/products/${id}`);
    return res.json(data);
  } catch (error) {
    res.json(error);
  }
};

const getCategories = async () => {
  const categories = await httpClient.get(`${apiURL}/products/categories`);

  const productsByCategory = categories.map(async (category) => {
    return await httpClient.get(`${apiURL}/products/category/${category}`);
  });

  return productsByCategory;
};

export const getProductsByCategory = async (req, res = response) => {
  const productsByCategory = await getCategories();
  const products = await Promise.all(productsByCategory);

  const productsArrays = createArrays(products);
  res.json(productsArrays);
};
