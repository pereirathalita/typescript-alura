//modelagem foi feita utilizando classes
export class Negociacao {
    //construtor é um metodo especial para criar e inicializar um objeto criado a partir de uma classe
    // sintaxe: constructor([argumentos]){...}
    //o this esta sendo utilizado para se referenciar a classe "pai"
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    //o get consegue acessar os atributos privados
    //o get não pode ter o mesmo nome da propriedade (propriedade = o que o constructor recebe)
    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

}