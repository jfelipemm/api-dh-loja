import { Router } from "express"
import { GenericRepository } from "../config/generic.repository"

export class GenericRouter<T> {

    private repository: GenericRepository<T>
    routes = Router()

    constructor(tableName: string, repository?: GenericRepository<T>) {
        if (repository) {
            this.repository =  repository
        } else {
            this.repository =  new GenericRepository<T>(tableName)
        }

        this.routes.route('')
            .get(this.repository.get)
            .post(this.repository.save)
    
        this.routes.route(`/:id`)
            .get(this.repository.getById)
            .put(this.repository.put)
            .delete(this.repository.remove)
    }
}