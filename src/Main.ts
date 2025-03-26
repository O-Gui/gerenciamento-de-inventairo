// import promptSync from "prompt-sync"
// const prompt = promptSync()
// const nome = prompt("Nome:")
// console.log(nome)

import { Produto } from "./models/Produto";
import { ProdutoRepository } from "./repository/ProdutoRepository";

 const produtoRepository = new ProdutoRepository();

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


 produtoRepository.insert(produto1);
 produtoRepository.findAll().forEach(produto => {
     console.log(produto);
 });
