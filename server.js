const express = require('express');
const next = require('next');
const app = next({
  dev: process.env.NODE_ENV === 'development',
});

app.prepare().then(() => {
  const server = express();

  server.use((req, res) => {
    return app.getRequestHandler()(req, res);
  });

  server.listen(3000, (err) => {
    console.log('listening on 3000');
  });
});
