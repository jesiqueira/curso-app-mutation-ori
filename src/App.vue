<template>
  <div id="app">
    <ul>
      <li v-for="livro in $store.state.livros" :key="livro.nome">
        <p>{{ livro.nome }}</p>
      </li>
      <h2>Livros Lidos</h2>
      <!-- <li v-for="livro in $store.getters.livrosLidos" :key="livro.nome">
        <p>{{ livro.nome }}</p>
      </li> -->
      <li v-for="livro in livrosLidos(true)" :key="livro.id">
        <p>{{ livro.nome }}</p>
      </li>
    </ul>
    <hr />
    {{ $store.state.acao.acao }}
    <aluno-comp />
    <curso-comp />
    <aulas-comp />
  </div>
</template>

<script>
import AlunoComp from "@/components/AlunoComp.vue";
import CursoComp from "@/components/CursoComp.vue";
import AulasComp from "./components/AulasComp.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    AlunoComp,
    CursoComp,
    AulasComp,
  },
  computed: {
    ...mapGetters(["livrosLidos"]),
  },
  created() {
    this.$store.dispatch("acao/puxarAcao");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
