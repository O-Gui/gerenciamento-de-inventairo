export function MenuProduto() {
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
         // Call the function to show all products
         break;
       case "2":
         // Call the function to create a new product
         break;
       case "3":
         // Call the function to modify an existing product
         break;
       case "4":
         // Call the function to delete an existing product
         break;
       case "5":
         // Go back to the main menu
         break;
       default:
         console.log("Opção inválida. Tente novamente.");
     }
     }
}