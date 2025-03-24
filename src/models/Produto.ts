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

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }

    public getCategoriaId(): number {
        return this.categoriaId;
    }

    public setCategoriaId(categoriaId: number): void {
        this.categoriaId = categoriaId;
    }

    public getDataCriacao(): Date {
        return this.dataCriacao;
    }

    public setDataCriacao(dataCriacao: Date): void {
        this.dataCriacao = dataCriacao;
    }

    public getDataAtualizacao(): Date {
        return this.dataAtualizacao;
    }

    public setDataAtualizacao(dataAtualizacao: Date): void {
        this.dataAtualizacao = dataAtualizacao;
    }
}