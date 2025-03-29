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
        return this.dataCriacao;
    }

     setDataCriacao(dataCriacao: Date): void {
        this.dataCriacao = dataCriacao;
    }
}