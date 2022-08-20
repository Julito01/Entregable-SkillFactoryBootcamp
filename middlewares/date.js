export const reqDate = (_1, _2, next) => {
  console.log(`Fecha de la request: ${new Date().toString()}`);
  return next();
};
