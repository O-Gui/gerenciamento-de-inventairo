// Função para mostrar o menu de categorias de produtos

import promptSync from "prompt-sync";
import {CategoriaRepository} from "../repository/CategoriaRepository";

export function MenuCategoria(categoriaRepository: CategoriaRepository) {
    const prompt = promptSync()
    while (true) {
        console.log("-=-=-=-=-= Categoria dos Produtos =-=-=-=-=");
        console.log("1 - Mostrar todas as categorias");
        console.log("2 - Criar nova categoria");
        console.log("3 - Modificar categoria existente");
        console.log("4 - Deletar categoria existente");
        console.log("5 - Voltar ao menu principal");
        console.log("=======================================");
        const option = prompt("Qual opção deseja ver?: ");

        switch (option) {
            case "1":
                // Call the function to show all categories
                break;
            case "2":
                // Call the function to create a new category
                break;
            case "3":
                // Call the function to modify an existing category
                break;
            case "4":
                // Call the function to delete an existing category
                break;
            case "5":
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
