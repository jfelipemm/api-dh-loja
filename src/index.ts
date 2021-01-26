import express, { Application } from "express"
import routerBinder from "./routes/router-binder"
import cors from 'cors'

const PORT = 3000
const app: Application = express()

app.use(express.json())
routerBinder(app)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());

app.listen(PORT, () => {
  console.log("Servidor escutando na porta " + PORT)
})