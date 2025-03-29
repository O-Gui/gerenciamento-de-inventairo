import {Produto} from "../models/Produto";

export default interface IProdutoRepository {
    insert(produto: Produto): Produto;
    update(produto: Produto): Produto;
    delete(id: number): void;
    findAll(): Produto[];
    findById(id: number): Produto | undefined;
    findByName(name: string): Produto | undefined;
    findByCategory(categoryId: number): Produto[];
}