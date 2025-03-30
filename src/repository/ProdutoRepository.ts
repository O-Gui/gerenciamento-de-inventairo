import {Produto} from "../models/Produto";
import IProdutoRepository from "./iProdutoRespository";

export class ProdutoRepository implements IProdutoRepository {
    produtos: Produto[] = [];

    insert(produto: Produto): Produto {
        this.produtos.push(produto);
        return produto;
    }

    update(produto: Produto): Produto {
        this.assertThatProductExists(produto.getId());
        this.produtos = this.produtos.map(p => p.getId() === produto.getId() ? produto : p);
        return produto;
    }

    delete(id: number) {
        this.assertThatProductExists(id);
        this.produtos = this.produtos.filter(p => p.getId() !== id);
    }

    findAll(): Produto[] {
        return this.produtos;
    }

    findById(id: number): Produto | undefined {
        return this.produtos.find(p => p.getId() === id);
    }

    findByName(name: string): Produto | undefined {
        return this.produtos.find(p => p.getNome() === name);
    }

    findByCategory(categoryId: number): Produto[] {
        return this.produtos.filter(p => p.getCategoriaId() === categoryId);
    }

    assertThatProductExists(id: number): Produto {
        const produto = this.findById(id);
        if (!produto) {
            throw new Error(`Produto com id ${id} não encontrado`);
        }
        return produto;
    }
}