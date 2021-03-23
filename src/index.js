const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World Ignite - Fundamentos NodeJs!"})
});

// localhost:3031
app.listen(3333);