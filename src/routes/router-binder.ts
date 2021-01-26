import { Application } from "express";
import { ClienteModel } from "../model/ClienteModel";
import { GenericRouter } from "./generic.router";

const routerBinder = (app: Application) => {
    const clientesRoutes = new GenericRouter<ClienteModel>('clientes')

    app.use('/clientes', clientesRoutes.routes)
}

export default routerBinder