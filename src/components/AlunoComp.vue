<template>
  <div>
    <!-- <h1>Aluno - {{ $store.state.aulasCompletas }}</h1> -->
    <h1>Aluno - {{ aulasCompletas }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AlunoComp",
  computed: {
    ...mapState(["aulasCompletas"]),
  },
};
</script>

<style></style>
