<template>
  <div>
    <h1>Aulas</h1>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>
          {{ aula.nome }} - <span>{{ aula.duracao }}</span>
        </p>
        <!-- <button @click="COMPLETAR_AULA(aula)">Completar aula</button> -->
        <!-- <button @click="handleClick(aula)">Completar aula</button> -->
        <button @click="completarAula(aula)">Completar aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "AulasComp",
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15,
        },
        {
          nome: "JavaScript",
          duracao: 30,
        },
        {
          nome: "Ux Design",
          duracao: 20,
        },
      ],
    };
  },
  methods: {
    // ...mapMutations(["COMPLETAR_AULA"]),
    // completarAula(aula) {
    //   //   this.$store.commit("COMPLETAR_AULA", aula);
    //   this.COMPLETAR_AULA(aula);
    // },
    // handleClick(aula) {
    //     this.$store.dispatch('completarAula', aula)
    // },
    ...mapActions(['completarAula'])
  },
};
</script>

<style></style>
