import { Produto } from "../models/Produto";

export class ProdutoRepository {
    produtos: Produto[] = [];

    insert(produto: Produto): Produto {
        this.produtos.push(produto);
        return produto;
    }

    findAll(): Produto[] {
        return this.produtos;
    }
}