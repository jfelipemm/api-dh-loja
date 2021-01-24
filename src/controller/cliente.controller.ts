import { Request, Response } from "express";
import db from "../config/db";
import { ClienteModel } from '../model/ClienteModel'

const get = (req: Request, res: Response) => {
	db('clientes')
		.then((clients: ClienteModel) => res.status(200).json(clients))
		.catch((err: any) => res.status(500).json(err))
}

const save = (req: Request, res: Response) => {
	const client: ClienteModel = req.body

	db('clientes')
		.insert(client)
		.then((data: any) => res.status(201).json(data))
		.catch((err: any) => res.status(500).json(err))
}

const getById = (req: Request, res: Response) => {
	const id: number = Number(req.params.id)

	db('clientes')
		.where({id: id})
		.first()
		.then((client: ClienteModel) => res.status(200).json(client))
		.catch((err: any) => res.status(500).json(err))
}

const put = (req: Request, res: Response) => {
	const id: number = Number(req.params.id)
	const client: ClienteModel = req.body

	db('clientes')
		.update(client)
		.where({id: id})
		.then((data: any) => res.status(200).json(data))
		.catch((err: any) => res.status(500).json(err))
}

const remove = (req: Request, res: Response) => {
	const id: number = Number(req.params.id)

	db('clientes')
		.del()
		.where({id: id})
		.then(() => res.status(204).send())
		.catch((err: any) => res.status(500).json(err))
}

export default {get, save, getById, put, remove}