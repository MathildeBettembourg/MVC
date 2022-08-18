import { AxiosResponse } from 'axios';
import {UsersModel} from '../model/users.model'
import {Request, Response} from "express";
import { User } from '../userClass';

export class UsersControler{

    private users:UsersModel
    afficher:boolean =false

    constructor(users:UsersModel) {
        this.users=users
}

getUsers = async (req: Request, res: Response)=>{
    const users = await this.users.getUsers().then((resu: any) => resu.data)
        res.render('users', {users})
}

getId=async (req: Request, res: Response)=>{
    const id: string = req.params.id
    const usersId = await this.users.getUsersById(id).then((resu: any) => resu.data)
    res.render('usersSuccess', {usersId})
    // res.send('ok')
}
deleteUserById = (req: Request, res: Response)=>{
    const id: string = req.params.id
    this.users.deleteUsersById(id);
    res.redirect('/users')
        // res.render('NewUsers', {users})
}
afficherForm = (req: Request, res: Response)=>{
    res.render('userInput')
}

AfficherModifUserByid=async(req: Request, res: Response)=>{
    const id: string = req.params.id
    const usersId = await this.users.getUsersById(id).then((resu: any) => resu.data)
    res.render('userModif',  {usersId})
}
addUser=(req: Request, res: Response)=>{
    const user=new User(req.body) //objet est item
    this.users.addUser(user)
    res.redirect('/users')
}
modifUserById=async(req: Request, res: Response)=>{
    await console.log("test");
    // res.redirect('/users')
    // const id: string = req.params.id
    // const data =req.body
    // console.log(data);
    
}

}