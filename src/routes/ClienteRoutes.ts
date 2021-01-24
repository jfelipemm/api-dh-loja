import { Router } from "express"
import ClienteController from "../controller/cliente.controller"

const routes = Router()

routes.route('/clientes/')
	.get(ClienteController.get)
	.post(ClienteController.save)

routes.route('/clientes/:id')
	.get(ClienteController.getById)
	.put(ClienteController.put)
	.delete(ClienteController.remove)

export default routes