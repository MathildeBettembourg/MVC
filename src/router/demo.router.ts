import express from "express";
import {DemoController} from "../controller/demo.controller";
import {DemoModel} from "../model/demo.model";

// on définit le routeur de express
const router = express.Router();
const model = new DemoModel();
const controller = new DemoController(model);

// on définit les routes et les méthodes associées
router.get('/', controller.getString)
router.get('/page', controller.getPage)
router.get('/test/:id', controller.getTest)
router.post('/', controller.postString)

// on export le router
export default router;
