import { UsersModel } from './../model/users.model';
import {Request, Response} from "express";
import {DemoModel} from "../model/demo.model";



export class DemoController {

    private model: DemoModel;
   

    constructor(model: DemoModel) {
        this.model = model
    }

    getString = (req: Request, res: Response) => {
        const data = this.model.getData()
        res.render('demo', {data})
    }

    getPage = (req: Request, res: Response) => {
        res.render('page')
    }

    getTest = (req: Request, res: Response) => {
        const id: string = req.params.id
        res.render('test', {id})
    }

    postString = (req: Request, res: Response) => {
        res.send((req.body).JSON.stringify())
    }

}
