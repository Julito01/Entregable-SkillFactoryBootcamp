import { response } from 'express';
import { HttpClient } from '../helpers/http-client.js';
import {
  resolveCartPromises,
  getProductsIds,
} from '../helpers/carts-functions.js';
import { fetchData } from '../helpers/global-functions.js';
import {
  getUsersIds,
  resolveUserPromises,
} from '../helpers/users-functions.js';

const httpClient = new HttpClient();
const apiURL = 'https://fakestoreapi.com';

export const getAllCarts = async (req, res = response) => {
  const data = await fetchData(apiURL, 'carts');

  const promises = getProductsIds(data, apiURL);

  return resolveCartPromises(res, promises, data);
};

export const getCartById = (req, res = response) => {
  const { id } = req.params;

  let data = [];

  if (parseInt(id) > 0) {
    httpClient
      .get(`${apiURL}/carts/${id}`)
      .then((cartData) => {
        data.push(cartData);
        const promises = getProductsIds(data, apiURL);
        return resolveCartPromises(res, promises, data);
      })
      .catch(() => {
        return res
          .status(500)
          .json({ msg: 'Ese carrito no existe o hubo un error - status 500' });
      });
  } else if (id != 'bigcarts') {
    res
      .status(400)
      .json({ msg: 'Ese carrito no existe o hubo un error - status 400' });
  }
};

export const getBigCarts = async (req, res = response) => {
  const data = await fetchData(apiURL, 'carts');
  const bigCarts = data.filter((bigCart) => bigCart.products.length > 2);

  const promises = getUsersIds(bigCarts, apiURL);

  return resolveUserPromises(res, promises, bigCarts);
};
