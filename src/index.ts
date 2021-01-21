const app = require("express")();
const consign = require("consign");
const db = require("../src/config/db.ts");
const bodyParser = require("body-parser");

app.db = db;
app.use(bodyParser);

consign()
  .include("./src/config/api.ts")

  .then("./src/routes/ApiRoutes.ts")
  .into(app)


app.listen(3000, () => {
  console.log("servidor funcionando")
})