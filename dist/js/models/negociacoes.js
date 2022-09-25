export class Negociacoes {
    constructor() {
        //Negociacao[] é a mesma coisa que dizer Array<Negociacao>
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //readonly Negociacao[] é a mesma coisa que dizer ReadonlyArray<Negociacao>
    lista() {
        return this.negociacoes;
    }
}
