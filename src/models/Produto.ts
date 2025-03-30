export class Produto {
    private static nextId: number = 1;
    private id: number;
    private nome: string;
    private descricao: string;
    private preco: number;
    private quantidade: number;
    private categoriaId: number;
    private dataCriacao?: Date;
    private _dataAtualizacao?: Date;

    constructor(nome: string, descricao: string, preco: number, quantidade: number, categoriaId: number) {
        this.id = Produto.nextId++;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoriaId = categoriaId;
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
        return <Date>this.dataCriacao;
    }

    setDataCriacao(dataCriacao: Date): void {
        this.dataCriacao = dataCriacao;
    }

    get dataAtualizacao(): Date {
        return <Date>this._dataAtualizacao;
    }

    setDataAtualizacao(dataAtualizacao: Date): void {
        this._dataAtualizacao = dataAtualizacao;
    }
}