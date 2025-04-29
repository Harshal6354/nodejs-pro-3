const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  return res.send("hello word");
});

app.listen(5000, () => console.log("server started"));
