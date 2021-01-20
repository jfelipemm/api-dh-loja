const app = require("express")();
const consign = require("consign");
const db = require("./db");
const bodyParser = require("body-parser");

app.db = db;
app.use(bodyParser);

app.listen(3000, () => {
  console.log("servidor funcionando")
})