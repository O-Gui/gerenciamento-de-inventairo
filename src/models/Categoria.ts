export class Categoria {
    private static nextId: number = 1;
    private id: number;
    private nome: string;
    private descricao: string;
    private dataCriacao?: Date;

    constructor(nome: string, descricao: string) {
        this.id = Categoria.nextId++;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = new Date();
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

    getDataCriacao(): Date {
        return <Date>this.dataCriacao;
    }

    setDataCriacao(dataCriacao: Date): void {
        this.dataCriacao = dataCriacao;
    }
}