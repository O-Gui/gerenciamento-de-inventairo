// File: Menu.ts
import { MenuCategoria } from "./MenuCategoria";
import { MenuProduto } from "./MenuProduto";


while (true) {
    console.log("=======================================");
    console.log("Bem Vindo ao Zé da horta!");
    console.log("Escolha uma opção:");
    console.log("1 - Menu de Categoria de Produtos");
    console.log("2 - Menu de Produtos");
    console.log("3 - Sair");
    console.log("=======================================");
    
    const option = prompt("Qual opção deseja ver?: ");

    switch (option) {
        case "1":
          console.log(MenuCategoria());
            break;
        case "2":
          console.log(MenuProduto());
            break;
        case "3":
          console.log("Saindo do programa...");
          process.exit(0);
          // Exit the program
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
