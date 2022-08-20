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
