//modelagem foi feita utilizando classes
export class Negociacao {

    private _data;
    private _quantidade;
    private _valor;

    //construtor é um metodo especial para criar e inicializar um objeto criado a partir de uma classe
    // sintaxe: constructor([argumentos]){...}
    //o this esta sendo utilizado para se referenciar a classe "pai"
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //o get consegue acessar os atributos privados
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}