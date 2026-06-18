const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Mohan - CI/CD Project");
});

app.listen(3000, () => {
  console.log("Server Running");
});
