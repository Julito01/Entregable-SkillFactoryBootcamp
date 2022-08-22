import { HttpClient } from './http-client.js';

const httpClient = new HttpClient();

export const fetchData = async (apiURL, param) => {
  const data = await httpClient.get(`${apiURL}/${param}`);
  return data;
};
