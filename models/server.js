import express from 'express';
import cors from 'cors';

import { productsRouter } from '../routes/index.js';
import { reqDate } from '../middlewares/date.js';

export const app = express();

class Server {
  constructor() {
    this.app = app;
    this.port = 3000;
    this.paths = {
      products: '/products',
      cart: '/cart',
      users: '/users',
    };
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public', { extensions: ['html'] }));
    this.app.use(reqDate);
  }

  routes() {
    this.app.use(this.paths.products, productsRouter);
    this.app.all('*', (req, res) => {
      res.status(404).send('<h1>404! Ese endpoint no existe</h1>');
    });
  }
}

export default Server;
