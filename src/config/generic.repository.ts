import { Request, Response } from 'express'
import db from "./db";

export class GenericRepository<T> {

    constructor(private tableName: string) {
    }

    get = (req: Request, res: Response) => {
        db(this.tableName)
            .then((objs: T) => res.status(200).json(objs))
            .catch((err: any) => res.status(500).json(err))
    }
    
    save = (req: Request, res: Response) => {
        const obj: T = req.body
    
        db(this.tableName)
            .insert(obj)
            .then((data: any) => res.status(201).json(data))
            .catch((err: any) => res.status(500).json(err))
    }
    
    getById = (req: Request, res: Response) => {
        const id: number = Number(req.params.id)
    
        db(this.tableName)
            .where({id: id})
            .first()
            .then((obj: T) => res.status(200).json(obj))
            .catch((err: any) => res.status(500).json(err))
    }
    
    put = (req: Request, res: Response) => {
        const id: number = Number(req.params.id)
        const obj: T = req.body
    
        db(this.tableName)
            .update(obj)
            .where({id: id})
            .then((data: any) => res.status(200).json(data))
            .catch((err: any) => res.status(500).json(err))
    }
    
    remove = (req: Request, res: Response) => {
        const id: number = Number(req.params.id)
    
        db(this.tableName)
            .del()
            .where({id: id})
            .then(() => res.status(204).send())
            .catch((err: any) => res.status(500).json(err))
    }
}