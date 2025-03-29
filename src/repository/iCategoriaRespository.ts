import {Categoria} from "../models/Categoria";

export default interface ICategoriaRepository {
    insert(categoria: Categoria): Categoria;
    update(categoria: Categoria): Categoria;
    findAll(): Categoria[];
    findById(id: number): Categoria | undefined;
    findByName(name: string): Categoria | undefined;
}