import express, { Application } from "express"
import routerBinder from "./routes/router-binder"

const PORT = 3000
const app: Application = express()

app.use(express.json())
routerBinder(app)

app.listen(PORT, () => {
  console.log("Servidor escutando na porta " + PORT)
})