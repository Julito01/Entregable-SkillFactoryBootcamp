import express from 'express';
import cors from 'cors';

export const app = express();

class Server {
  constructor() {
    this.app = app;
    this.port = 3000;
    this.path = 'https://fakestoreapi.com/';
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }
}
