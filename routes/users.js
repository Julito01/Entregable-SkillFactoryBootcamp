import { Router } from 'express';
import { reqDate } from '../middlewares/date.js';

export const uRouter = Router();

uRouter.get('/', [reqDate], getAllUsers);
