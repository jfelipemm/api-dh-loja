import { Application } from "express";
import { ClienteModel } from "../model/ClienteModel";
import { FuncionarioModel } from "../model/FuncionarioModel";
import { PedidoModel } from "../model/PedidoModel";
import { PedidoProdutoModel } from "../model/PedidoProdutoModel";
import { GenericRouter } from "./generic.router";

const routerBinder = (app: Application) => {
    const clientesRoutes = new GenericRouter<ClienteModel>('clientes', 'id_cliente')
    const funcionariosRoutes = new GenericRouter<FuncionarioModel>('funcionarios', 'id_funcionario')
    const produtosRoutes = new GenericRouter<FuncionarioModel>('produtos', 'id_produto')
    const pedidosRoutes = new GenericRouter<PedidoModel>('pedidos', 'id_pedido')
    const pedidoProdutoRoutes = new GenericRouter<PedidoProdutoModel>('pedido_produtos', 'id_pedido_produto')

    app.use('/clientes', clientesRoutes.routes)
    app.use('/funcionarios', funcionariosRoutes.routes)
    app.use('/produtos', produtosRoutes.routes)
    app.use('/pedidos', pedidosRoutes.routes)
    app.use('/pedido-produtos', pedidoProdutoRoutes.routes)
}

export default routerBinder