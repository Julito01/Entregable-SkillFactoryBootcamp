import { getProductNameById } from './products-functions.js';

export const resolveCartPromises = (res, promises, data) => {
  Promise.all(promises).then((promises) => {
    let counter = 0;
    data.forEach((cart) => {
      cart.products.forEach((product) => {
        product.productId = promises[counter];
        counter++;
      });
    });
    return res.json(data);
  });
};

export const getProductsIds = (data, apiURL) => {
  const promises = [];
  data.forEach((cart) => {
    let productsIds = cart.products.map((product) => product.productId);

    for (let i = 0; i < productsIds.length; i++) {
      promises.push(getProductNameById(productsIds[i], apiURL));
    }
  });
  return promises;
};
