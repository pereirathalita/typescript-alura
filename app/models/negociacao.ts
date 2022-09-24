//modelagem foi feita utilizando classes
export class Negociacao {
    //construtor é um metodo especial para criar e inicializar um objeto criado a partir de uma classe
    // sintaxe: constructor([argumentos]){...}
    //o this esta sendo utilizado para se referenciar a classe "pai"
    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ) {}

    //o get consegue acessar os atributos privados
    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

}