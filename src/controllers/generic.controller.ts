import { Request, Response } from 'express'
import db from '../config/db'

export class GenericController<T> {

    constructor(private tableName: string, private primaryKeyName: string) {
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
        const filter: {[k: string]: any} = {};
        filter[`${this.primaryKeyName}`] = id
    
        db(this.tableName)
            .where(filter)
            .first()
            .then((obj: T) => res.status(200).json(obj))
            .catch((err: any) => res.status(500).json(err))
    }
    
    put = (req: Request, res: Response) => {
        const id: number = Number(req.params.id)
        const obj: T = req.body
        const filter: {[k: string]: any} = {};
        filter[`${this.primaryKeyName}`] = id
    
        db(this.tableName)
            .update(obj)
            .where(filter)
            .then((data: any) => res.status(200).json(data))
            .catch((err: any) => res.status(500).json(err))
    }
    
    remove = (req: Request, res: Response) => {
        const id: number = Number(req.params.id)
        const filter: {[k: string]: any} = {};
        filter[`${this.primaryKeyName}`] = id
    
        db(this.tableName)
            .del()
            .where(filter)
            .then(() => res.status(204).send())
            .catch((err: any) => res.status(500).json(err))
    }
}