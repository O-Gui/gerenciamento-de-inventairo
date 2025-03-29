// import promptSync from "prompt-sync"
// const prompt = promptSync()
// const nome = prompt("Nome:")
// console.log(nome)

import {Produto} from "./models/Produto";
import {ProdutoRepository} from "./repository/ProdutoRepository";
import {CategoriaRepository} from "./repository/CategoriaRepository";
import {Categoria} from "./models/Categoria";

const produtoRepository = new ProdutoRepository();
const categoriaRepository = new CategoriaRepository();

const produto1 = new Produto(
    1,
    "Laptop",
    "Laptop de alta performance",
    1500.00,
    10,
    1,
    new Date(),
    new Date()
);

const categoria1 = new Categoria(
    1,
    "Eletrônicos",
    "Categoria de produtos eletrônicos",
    new Date()
)

produtoRepository.insert(produto1);
produtoRepository.findAll().forEach(produto => {
    console.log(produto);
});
console.log("-------------------");
console.log(produtoRepository.findById(2));
console.log("-------------------");
console.log(produtoRepository.update(new Produto(
    1,
    "Laptop Modificado",
    "Laptop de alta performance",
    1500.00,
    10,
    1,
    new Date(),
    new Date()
)))

console.log(produtoRepository.findById(1));

console.log("-------- Categoria -----------");

categoriaRepository.insert(categoria1);
categoriaRepository.findAll().forEach(categoria => {
    console.log(categoria);
});
categoriaRepository.delete(1);
console.log("-------- Categoria Deletada -----------");

categoriaRepository.findAll().forEach(categoria => {
    console.log(categoria);
});
