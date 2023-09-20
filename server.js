const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/goodbye", (req, res) => {
  res.send("Sayonara, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
