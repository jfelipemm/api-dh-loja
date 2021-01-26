import { Router } from "express"
import { GenericController } from "../controllers/generic.controller"

export class GenericRouter<T> {

    private repository: GenericController<T>
    routes = Router()

    constructor(tableName: string, primaryKeyName: string, repository?: GenericController<T>) {
        if (repository) {
            this.repository =  repository
        } else {
            this.repository =  new GenericController<T>(tableName, primaryKeyName)
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