const express = require("express");
const app = express();
const port = 3000;

app.post("/customers/:customerId/cif", (req, res) =>
  res.json({ data: { cif: "8a8e876f6e43792c016e43a65a6900da" } })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
