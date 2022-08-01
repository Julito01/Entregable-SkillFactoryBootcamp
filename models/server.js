import express from 'express';
import cors from 'cors';

import { productsRouter } from '../routes/index.js';

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
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.paths.products, productsRouter);
  }
}

export default Server;
