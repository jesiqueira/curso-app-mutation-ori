export default {
  namespaced: true,
  state: {
    acao: null,
  },
  mutations: {
    UPDATE_ACAO(state, payloud) {
      state.acao = payloud;
    },
  },
  actions: {
    puxarAcao(context) {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
        .then((r) => r.json())
        .then((respostaJson) => {
          context.commit("UPDATE_ACAO", respostaJson);
        });
    },
  },
};
