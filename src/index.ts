import express, { Router } from "express";
import { ProdutoController } from "./controller/produto_controller";
import { executaFatories } from "./infra";

const app = express();

const route = Router();

executaFatories();
route.get('/produto/:id', ProdutoController.obtem_um);

app.use(express.json());
app.use(route);

app.listen(3000, ()  => {
    console.log("na porta 3000");
});


