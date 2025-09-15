const http = require("http");
const bodyParser = require("body-parser");
const hostname = "localhost";
const port = 5000;
const express = require("express");
const productRouter = require("./productName");
const app = express();

app.use(bodyParser.json());
app.use('/products', productRouter);

app.listen(port, hostname, () => {
  console.log("server is stupid");
});

