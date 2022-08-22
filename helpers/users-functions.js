import { HttpClient } from '../helpers/http-client.js';

const httpClient = new HttpClient();

export const getUsersIds = (data, apiURL) => {
  const responseData = [];

  data.forEach((bigCart) => {
    const userId = bigCart.userId;

    const user = getUserNameById(userId, apiURL);
    responseData.push(user);
  });

  return responseData;
};

export const resolveUserPromises = (res, promises, data) => {
  Promise.all(promises).then((promises) => {
    let counter = 0;

    data.forEach((bigCart) => {
      bigCart.userId =
        promises[counter].name.firstname +
        ' ' +
        promises[counter].name.lastname;
      counter++;
    });

    return res.json(data);
  });
};

const getUserNameById = async (id, apiURL) => {
  const data = await httpClient.get(`${apiURL}/users/${id}`);
  return data;
};
