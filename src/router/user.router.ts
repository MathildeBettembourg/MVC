import express from "express";
import {UsersControler} from "../controller/users.controler";
import {UsersModel} from "../model/users.model";

// on définit le routeur de express
const router = express.Router();
const user = new UsersModel();
const controller = new UsersControler(user);

// on définit les routes et les méthodes associées
router.get('/users', controller.getUsers)
router.get('/users/:id', controller.getId)
// router.get('/NewUsers', controller.deleteUserById)
router.get('/deleteUser/:id', controller.deleteUserById)
router.get('/userInput', controller.afficherForm)
router.post('/addUser', controller.addUser)
router.get('/modifUser/:id', controller.AfficherModifUserByid)
router.post('modifUserById/:id', controller.modifUserById)

// on export le router
export default router;
