import { IProdutoController, ProdutoController } from "../controller/produto_controller";
import { IProdutoUseCase, ProdutoUseCase } from "../usecases/produto_usecase";

function criaProdutoController() {
    const produtoUseCase: IProdutoUseCase = new ProdutoUseCase();
    ProdutoController.setUseCase(produtoUseCase);
}

export { criaProdutoController }