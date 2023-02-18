import Vue from "vue";
import Vuex from "vuex";
import acao from "@/store/acao";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    acao,
  },
  state: {
    aulasCompletas: [],
    livros: [
      {
        id: 1,
        nome: "O senhor dos Anéis",
        lido: true,
      },
      {
        id: 2,
        nome: "Harry Potter",
        lido: true,
      },
      {
        id: 3,
        nome: "As crônicas de gelo e fogo",
        lido: false,
      },
    ],
  },
  mutations: {
    COMPLETAR_AULA(state, payloud) {
      state.aulasCompletas.push(payloud);
    },
  },
  actions: {
    completarAula(context, payloud) {
      context.commit("COMPLETAR_AULA", payloud);
    },
  },
  getters: {
    // livrosLidos(state){
    //   return state.livros.filter(livro => livro.lido)
    // }
    // livrosLidos(state){
    //   return function(lido){
    //     return state.livros.filter(livro => livro.lido == lido)
    //   }
    // }
    livrosLidos: (state) => (lido) =>
      state.livros.filter((livro) => livro.lido == lido),
  },
});
