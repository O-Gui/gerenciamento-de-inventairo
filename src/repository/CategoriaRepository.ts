import {Categoria} from "../models/Categoria";
import ICategoriaRepository from "./iCategoriaRespository";
import {ProdutoRepository} from "./ProdutoRepository";

export class CategoriaRepository implements ICategoriaRepository {
    categorias: Categoria[] = [];

    produtoRepository = new ProdutoRepository();

    insert(categoria: Categoria): Categoria {
        this.categorias.push(categoria);
        return categoria;
    }

    update(categoria: Categoria): Categoria {
        this.categorias = this.categorias.map(p => p.getId() === categoria.getId() ? categoria : p);
        return categoria;
    }

    delete (id: number): void {
        const produtos = this.produtoRepository.findByCategory(id);
        if (produtos.length === 0) {
            this.categorias = this.categorias.filter(p => p.getId() !== id);
        }
    }

    findAll(): Categoria[] {
        return this.categorias;
    }

    findById(id: number): Categoria | undefined {
        return this.categorias.find(p => p.getId() === id);
    }

    findByName(name: string): Categoria | undefined {
        return this.categorias.find(p => p.getNome() === name);
    }
}