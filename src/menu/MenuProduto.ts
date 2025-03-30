import promptSync from "prompt-sync";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Produto } from "../models/Produto";

export function MenuProduto(produtoRepository: ProdutoRepository) {
    const prompt = promptSync();

    while (true) {
        console.log("-=-=-=-=-= Menu de Produtos =-=-=-=-=");
        console.log("1 - Mostrar todos os produtos");
        console.log("2 - Criar novo produto");
        console.log("3 - Modificar produto existente");
        console.log("4 - Deletar produto existente");
        console.log("5 - Voltar ao menu principal");
        console.log("=======================================");

        const option = prompt("Qual opção deseja ver?: ");

        switch (option) {
            case "1":
                mostrarTodosOsProdutos(produtoRepository);
                break;
            case "2":
                criarNovoProduto(produtoRepository, prompt);
                break;
            case "3":
                modificarProdutoExistente(produtoRepository, prompt);
                break;
            case "4":
                deletarProdutoExistente(produtoRepository, prompt);
                break;
            case "5":
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

function mostrarTodosOsProdutos(produtoRepository: ProdutoRepository) {
    console.log("Lista de todos os produtos:");
    const produtos = produtoRepository.findAll();
    produtos.forEach(produto => console.log(produto));
}

function criarNovoProduto(produtoRepository: ProdutoRepository, prompt: any) {
    const nome = prompt("Digite o nome do produto: ");
    const descricao = prompt("Digite a descrição do produto: ");
    const preco = parseFloat(prompt("Digite o preço do produto: "));
    const quantidade = parseInt(prompt("Digite a quantidade do produto: "), 10);
    const categoriaId = parseInt(prompt("Digite o ID da categoria do produto: "), 10);

    if (!nome || !descricao) {
        console.log("Nome e descrição são obrigatórios. Tente novamente.");
        return;
    }

    if (isNaN(preco) || preco <= 0) {
        console.log("Preço inválido. Deve ser um número positivo. Tente novamente.");
        return;
    }

    if (isNaN(quantidade) || quantidade < 0) {
        console.log("Quantidade inválida. Deve ser um número não negativo. Tente novamente.");
        return;
    }

    if (isNaN(categoriaId) || categoriaId <= 0) {
        console.log("ID da categoria inválido. Deve ser um número positivo. Tente novamente.");
        return;
    }

    const produto = new Produto(nome, descricao, preco, quantidade, categoriaId);
    const savedProduct = produtoRepository.insert(produto);

    if (!savedProduct) {
        console.log("Erro ao inserir o produto. Tente novamente.");
    } else {
        console.log("Produto inserido com sucesso!");
    }
}

function modificarProdutoExistente(produtoRepository: ProdutoRepository, prompt: any) {
    const id = parseInt(prompt("Digite o ID do produto a ser modificado: "), 10);
    if (isNaN(id)) {
        console.log("ID inválido. Tente novamente.");
        return;
    }

    const produtoExistente = produtoRepository.findById(id);
    if (!produtoExistente) {
        console.log("Produto não encontrado.");
        return;
    }

    const nome = prompt(`Digite o novo nome do produto (atual: ${produtoExistente.getNome()}): `);
    const descricao = prompt(`Digite a nova descrição do produto (atual: ${produtoExistente.getDescricao()}): `);
    const preco = parseFloat(prompt(`Digite o novo preço do produto (atual: ${produtoExistente.getPreco()}): `));
    const quantidade = parseInt(prompt(`Digite a nova quantidade do produto (atual: ${produtoExistente.getQuantidade()}): `), 10);
    const categoriaId = parseInt(prompt(`Digite o novo ID da categoria do produto (atual: ${produtoExistente.getCategoriaId()}): `), 10);

    if (isNaN(preco) || isNaN(quantidade) || isNaN(categoriaId)) {
        console.log("Valores inválidos para preço, quantidade ou ID da categoria. Tente novamente.");
        return;
    }

    const produtoAtualizado = new Produto(nome, descricao, preco, quantidade, categoriaId);
    produtoAtualizado.setId(id); // Certifique-se de que o ID permanece o mesmo
    produtoRepository.update(produtoAtualizado);

    console.log("Produto modificado com sucesso!");
}

function deletarProdutoExistente(produtoRepository: ProdutoRepository, prompt: any) {
    const id = parseInt(prompt("Digite o ID do produto a ser deletado: "), 10);
    if (isNaN(id)) {
        console.log("ID inválido. Tente novamente.");
        return;
    }

    const produtoExistente = produtoRepository.findById(id);
    if (!produtoExistente) {
        console.log("Produto não encontrado.");
        return;
    }

    produtoRepository.delete(id);
    console.log("Produto deletado com sucesso!");
}