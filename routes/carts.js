import { Router } from 'express';
import { reqDate } from '../middlewares/date.js';
import { getAllCarts, getCartById, getBigCarts } from '../controllers/carts.js';

export const cRouter = Router();

cRouter.get('/bigcarts', [reqDate], getBigCarts);

cRouter.get('/', [reqDate], getAllCarts);

cRouter.get('/:id', [reqDate], getCartById);
