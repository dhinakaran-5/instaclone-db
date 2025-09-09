// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  noCors: false, // keep CORS enabled
});

const port = process.env.PORT || 10000;

server.use(middlewares);

// Optional: allow JSON body parsing and simple logger
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  // you can add custom headers or auth here
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running on port', port);
});
