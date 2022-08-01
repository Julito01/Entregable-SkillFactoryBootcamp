import Server, { app } from './models/server.js';

const server = new Server();

app.listen(3000, () => {
  console.log('Listening at port ', 3000);
});
