const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("The listener is a Pokemon");
});

app.listen(PORT, () => {
  `You are the listener, you are on port ${PORT}`;
});
