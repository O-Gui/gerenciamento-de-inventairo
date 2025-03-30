import {ProdutoRepository} from "./repository/ProdutoRepository";
import {CategoriaRepository} from "./repository/CategoriaRepository";
import {Menu} from "./menu/Menu";

const produtoRepository = new ProdutoRepository();
const categoriaRepository = new CategoriaRepository();

Menu(produtoRepository, categoriaRepository);

