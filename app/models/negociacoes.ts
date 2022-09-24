import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //Negociaca[] é a mesma coisa que dizer Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}
