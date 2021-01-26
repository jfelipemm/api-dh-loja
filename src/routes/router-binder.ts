import { Application } from "express";
import { ClienteModel } from "../model/ClienteModel";
import { FuncionarioModel } from "../model/FuncionarioModel";
import { GenericRouter } from "./generic.router";

const routerBinder = (app: Application) => {
    const clientesRoutes = new GenericRouter<ClienteModel>('clientes', 'id_cliente')
    const funcionariosRoutes = new GenericRouter<FuncionarioModel>('funcionarios', 'id_funcionario')
    const produtosRoutes = new GenericRouter<FuncionarioModel>('produtos', 'id_produto')

    app.use('/clientes', clientesRoutes.routes)
    app.use('/funcionarios', funcionariosRoutes.routes)
    app.use('/produtos', produtosRoutes.routes)
}

export default routerBinder