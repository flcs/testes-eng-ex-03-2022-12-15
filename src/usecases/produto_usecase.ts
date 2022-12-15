import { IProduto, Produto } from "../entities/produto_entitie"

interface IProdutoUseCase {
    status: string;
    recupera_produto(id: string): IProduto;
}

class ProdutoUseCase {
    status: string;
    constructor() {
        this.status = 'online';
    }

    recupera_produto(id: string): IProduto {
        const prod = new Produto('1', 'porca');
        return prod;
    }
}

export { IProdutoUseCase, ProdutoUseCase }