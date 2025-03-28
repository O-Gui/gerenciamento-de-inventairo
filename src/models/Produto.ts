export class Produto {
    private id: number;
    private nome: string;
    private descricao: string;
    private preco: number;
    private quantidade: number;
    private categoriaId: number;
    private dataCriacao: Date;
    private dataAtualizacao: Date;

    constructor(id: number, nome: string, descricao: string, preco: number, quantidade: number, categoriaId: number, dataCriacao: Date, dataAtualizacao: Date) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoriaId = categoriaId;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getDescricao(): string {
        return this.descricao;
    }

    setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    getPreco(): number {
        return this.preco;
    }

    setPreco(preco: number): void {
        this.preco = preco;
    }

    getQuantidade(): number {
        return this.quantidade;
    }

    setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }

    getCategoriaId(): number {
        return this.categoriaId;
    }

    setCategoriaId(categoriaId: number): void {
        this.categoriaId = categoriaId;
    }

    getDataCriacao(): Date {
        return this.dataCriacao;
    }

    setDataCriacao(dataCriacao: Date): void {
        this.dataCriacao = dataCriacao;
    }

    getDataAtualizacao(): Date {
        return this.dataAtualizacao;
    }

    setDataAtualizacao(dataAtualizacao: Date): void {
        this.dataAtualizacao = dataAtualizacao;
    }
}