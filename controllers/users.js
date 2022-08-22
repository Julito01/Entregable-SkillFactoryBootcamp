import { response } from 'express';

import { HttpClient } from '../helpers/http-client.js';

const httpClient = new HttpClient();
const apiURL = 'https://fakestoreapi.com';

export const getAllUsers = async (req, res = response) => {
  const data = await httpClient.get(`${apiURL}/users`);
  return res.json(data);
};
