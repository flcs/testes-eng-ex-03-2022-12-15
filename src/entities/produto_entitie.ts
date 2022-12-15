interface IProduto {
    id: string;
    description: string;
}

class Produto implements IProduto {
    id: string;
    description: string;

    constructor(id: string, description: string) {
        this.id = id;
        this.description = description;
    }   
}

export { IProduto, Produto }
