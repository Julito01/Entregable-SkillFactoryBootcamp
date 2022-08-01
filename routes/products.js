import { Router } from 'express';
import { getProductsByCategory } from '../controllers/products.js';
import { validateErrors } from '../middlewares/validate-errors.js';

export const pRouter = Router();

pRouter.get('/categories', getProductsByCategory);
