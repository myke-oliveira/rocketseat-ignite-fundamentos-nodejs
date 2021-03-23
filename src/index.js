const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.send('Fala aí galera!!!!')
});

// localhost:3031
app.listen(3333);