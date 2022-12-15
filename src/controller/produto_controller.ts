import { Request, Response } from "express";

import { IProduto, Produto } from '../entities/produto_entitie';
import { IProdutoUseCase, ProdutoUseCase } from "../usecases/produto_usecase";

interface IProdutoController {
    setUseCase(produtoUseCase: ProdutoUseCase): void;
    obtem_um(req: Request, resp: Response): void;    
}

class ProdutoController {
    static produtoUseCase: IProdutoUseCase;

    static setUseCase(produtoUseCase: ProdutoUseCase) {
        ProdutoController.produtoUseCase = produtoUseCase;
    }

    static obtem_um(req: Request, resp: Response) {
        const { id } = req.params;
        
        const produto = ProdutoController.produtoUseCase.recupera_produto(id);
        resp.status(200).json( produto );
    }
}

export { IProdutoController, ProdutoController }