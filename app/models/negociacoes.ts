import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //Negociacao[] é a mesma coisa que dizer Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    //readonly Negociacao[] é a mesma coisa que dizer ReadonlyArray<Negociacao>
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
