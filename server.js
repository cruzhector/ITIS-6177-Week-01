const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// endpoint to get hello message.
app.get("/", (req, res) => {
  res.send("Hello from express!");
});

// endpoint to get name from path param.
app.get("/:name", (req, res) => {
  let name = req.params.name;
  res.send(`Hello ${name}!`);
});

// run the server.
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
