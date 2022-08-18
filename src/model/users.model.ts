import { AxiosResponse } from 'axios';
import 'dotenv/config'
import axios from 'axios';
export class UsersModel {
    URI = process.env.URI


    getUsers = () => {
        return axios.get(`${this.URI}`)
    }

    getUsersById = (id:string) => {
        return axios.get(`${this.URI}/${id}`)
    }

    deleteUsersById = (id:string) => {
        axios.delete(`${this.URI}/${id}`)
    }
    addUser =(user:any)=>{
        axios.post(`${this.URI}`, user)
    }
    modifUserById=(id:string, userModif:any) =>{
        axios.patch(`${this.URI}${id}`, {userModif})
    }

}
