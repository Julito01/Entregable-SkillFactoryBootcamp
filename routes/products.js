import { Router } from 'express';
import {
  getProductsByCategory,
  getAllProducts,
  getProductByID,
  getProductsSorted,
  getProductsExpensive,
} from '../controllers/products.js';
import { reqDate } from '../middlewares/date.js';

export const pRouter = Router();

pRouter.get('/', [reqDate], getAllProducts);

pRouter.get('/expensive', [reqDate], getProductsExpensive);

pRouter.get('/prices', [reqDate], getProductsSorted);

pRouter.get('/categories', [reqDate], getProductsByCategory);

pRouter.get('/:id', [reqDate], getProductByID);
