import { IProduto } from "../entities/produto_entitie";
import { IRepository } from "./repository";


class MemoryRepo implements IRepository {
    registros: Array<IProduto>;
    constructor() {
        this.registros = [];
    }

    private findIndex(id:string) : number {
        const prodIndex = this.registros.findIndex(prod => prod.id == id)
        return prodIndex;
    }

    find(id: string) : IProduto {
        const prodIndex = this.findIndex(id);
        return this.registros[prodIndex];
    }

    append(produto: IProduto): boolean {
        this.registros.push(produto);
        return true;
    }

    update(produto: IProduto): boolean {
        const prodIndex = this.findIndex(produto.id);
        this.registros[prodIndex] = produto;
        return true;
    }
}
