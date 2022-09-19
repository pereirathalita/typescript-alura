//modelagem foi feita utilizando classes
export class Negociacao {
    //utilizamos a tralha para identificar que os atributos são privados, ou seja, eles não podem ser alterados,
        //são definidos atraves do constructor
    #data;
    #quantidade;
    #valor;

    //construtor é um metodo especial para criar e inicializar um objeto criado a partir de uma classe
    // sintaxe: constructor([argumentos]){...}
    //o this esta sendo utilizado para se referenciar a classe "pai"
    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    //o get consegue acessar os atributos privados
    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }

}