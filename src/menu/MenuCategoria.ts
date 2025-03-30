import promptSync from "prompt-sync";
import { CategoriaRepository } from "../repository/CategoriaRepository";
import { Categoria } from "../models/Categoria";

export function MenuCategoria(categoriaRepository: CategoriaRepository) {
    const prompt = promptSync();

    while (true) {
        console.log("-=-=-=-=-= Categoria dos Produtos =-=-=-=-=");
        console.log("1 - Mostrar todas as categorias");
        console.log("2 - Criar nova categoria");
        console.log("3 - Modificar categoria existente");
        console.log("4 - Deletar categoria existente");
        console.log("5 - Buscar categoria por ID");
        console.log("6 - Buscar categoria por nome");
        console.log("7 - Voltar ao menu principal");
        console.log("=======================================");

        const option = prompt("Qual opção deseja ver?: ");

        switch (option) {
            case "1":
                mostrarTodasAsCategorias(categoriaRepository);
                break;
            case "2":
                criarNovaCategoria(categoriaRepository, prompt);
                break;
            case "3":
                modificarCategoriaExistente(categoriaRepository, prompt);
                break;
            case "4":
                deletarCategoriaExistente(categoriaRepository, prompt);
                break;
            case "5":
                buscarCategoriaPorId(categoriaRepository, prompt);
                break;
            case "6":
                buscarCategoriaPorNome(categoriaRepository, prompt);
                break;
            case "7":
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

function mostrarTodasAsCategorias(categoriaRepository: CategoriaRepository) {
    console.log("Lista de todas as categorias:");
    const categorias = categoriaRepository.findAll();
    categorias.forEach(categoria => console.log(categoria));
}

function criarNovaCategoria(categoriaRepository: CategoriaRepository, prompt: any) {
    const nome = prompt("Digite o nome da categoria: ");
    const descricao = prompt("Digite a descrição da categoria: ");

    if (!nome || !descricao) {
        console.log("Nome e descrição são obrigatórios. Tente novamente.");
        return;
    }

    const categoria = new Categoria(nome, descricao);
    const savedCategoria = categoriaRepository.insert(categoria);

    if (!savedCategoria) {
        console.log("Erro ao inserir a categoria. Tente novamente.");
    } else {
        console.log("Categoria inserida com sucesso!");
    }
}

function modificarCategoriaExistente(categoriaRepository: CategoriaRepository, prompt: any) {
    const id = parseInt(prompt("Digite o ID da categoria a ser modificada: "), 10);
    if (isNaN(id)) {
        console.log("ID inválido. Tente novamente.");
        return;
    }

    const categoriaExistente = categoriaRepository.findById(id);
    if (!categoriaExistente) {
        console.log("Categoria não encontrada.");
        return;
    }

    const nome = prompt(`Digite o novo nome da categoria (atual: ${categoriaExistente.getNome()}): `);
    const descricao = prompt(`Digite a nova descrição da categoria (atual: ${categoriaExistente.getDescricao()}): `);

    const categoriaAtualizada = new Categoria(nome, descricao);
    categoriaAtualizada.setId(id); // Certifique-se de que o ID permanece o mesmo
    categoriaRepository.update(categoriaAtualizada);

    console.log("Categoria modificada com sucesso!");
}

function deletarCategoriaExistente(categoriaRepository: CategoriaRepository, prompt: any) {
    const id = parseInt(prompt("Digite o ID da categoria a ser deletada: "), 10);
    if (isNaN(id)) {
        console.log("ID inválido. Tente novamente.");
        return;
    }

    const categoriaExistente = categoriaRepository.findById(id);
    if (!categoriaExistente) {
        console.log("Categoria não encontrada.");
        return;
    }

    categoriaRepository.delete(id);
    console.log("Categoria deletada com sucesso!");
}

function buscarCategoriaPorId(categoriaRepository: CategoriaRepository, prompt: any) {
    const id = parseInt(prompt("Digite o ID da categoria: "), 10);
    if (isNaN(id)) {
        console.log("ID inválido. Tente novamente.");
        return;
    }

    const categoria = categoriaRepository.findById(id);
    if (!categoria) {
        console.log("Categoria não encontrada.");
    } else {
        console.log(categoria);
    }
}

function buscarCategoriaPorNome(categoriaRepository: CategoriaRepository, prompt: any) {
    const nome = prompt("Digite o nome da categoria: ");
    if (!nome) {
        console.log("Nome inválido. Tente novamente.");
        return;
    }

    const categoria = categoriaRepository.findByName(nome);
    if (!categoria) {
        console.log("Categoria não encontrada.");
    } else {
        console.log(categoria);
    }
}