import {Categoria} from "../models/Categoria";
import {Produto} from "../models/Produto";

export default interface ICategoriaRepository {
    insert(categoria: Categoria): Categoria;
    update(categoria: Categoria): Categoria;
    delete(id: number): void;
    findAll(): Categoria[];
    findById(id: number): Categoria | undefined;
    findByName(name: string): Categoria | undefined;
    assertThatCategoriaExists(id: number): Categoria;
}