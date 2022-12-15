import express, { Router } from "express";
import { ProdutoController } from "./produto_controller";

const app = express();

const route = Router();

const produtoController = new ProdutoController();
route.get('/produto/:id', produtoController.get)

app.use(express.json());
app.use(route);

app.listen(3000);


