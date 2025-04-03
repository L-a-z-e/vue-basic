<script setup lang="ts">
import { ref } from "vue";

const name = ref("이름 없음");
</script>

<template>
  <section>
    <p>{{ name }} 님</p>
    <input type="text" v-model="name" />
  </section>
</template>

<style scoped>
section {
  border: orange 1px dashed;
  margin: 10px;
}
</style>