const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(201).send('server is running')
});
app.listen(3000, () => {
  console.log("http://localhost:3000");

  console.log("server is running");
});
