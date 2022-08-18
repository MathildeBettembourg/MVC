import express, {Request, Response} from 'express';
import demoRouter from "./router/demo.router";
import * as path from 'path';
import userRouter from './router/user.router'
import 'dotenv/config'
// on instancie express
const app = express();
const port = process.env.PORT

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(demoRouter);
app.use(userRouter)



// mise en place de bootstrap
app.use('/bootstrap', express.static(path.join(process.cwd(),'/node_modules/bootstrap/dist/css')));

// mise en place du dossier public
app.use('/public', express.static(path.join(process.cwd(), '/src/public')));

// configuration de ejs
app.set('views', path.join(process.cwd(), 'src/view'));
app.set('view engine', 'ejs');



// on lance le server
app.listen(port, () => {
    console.log(` serveur lancé sur le port ${port}qui est defini dans dotenv`)
})
