export class Categoria {
    private id: number;
    private nome: string;
    private descricao: string;
    private dataCriacao: Date;

    constructor(id: number, nome: string, descricao: string, dataCriacao: Date) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
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

    public getDataCriacao(): Date {
        return this.dataCriacao;
    }

    public setDataCriacao(dataCriacao: Date): void {
        this.dataCriacao = dataCriacao;
    }
}