import { Negociacao } from "./models/negociacao";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.data);
//alterar para negociacao.volume
