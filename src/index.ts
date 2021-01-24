import express, { Application } from "express";
import clientesRoutes from './routes/ClienteRoutes'

const PORT = 3000
const app: Application = express()

app.use(express.json())
app.use('', clientesRoutes)

app.listen(PORT, () => {
  console.log("Servidor escutando na porta " + PORT)
})