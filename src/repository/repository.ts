import { IProduto } from "../entities/produto_entitie";

interface IRepository {
    find(id: string) : IProduto;
    append(produto: IProduto): boolean;
    update(produto: IProduto): boolean;
    // ...
}
export { IRepository }