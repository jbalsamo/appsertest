const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/goodbye", (req, res) => {
  res.send("Sayonara, World!");
});

app.get("/", (req, res) => {
  res.send("<H1>THIS IS AN API</H1>");
});

app.listen(443, () => {
  console.log("Server is running on port 3000");
});
