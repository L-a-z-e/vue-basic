<script setup lang="ts">
import OneSelection from "@/components/OneSelection.vue";
</script>

<template>
  <h1>컴포넌트 기초</h1>
  <section>
    <h2> 컴포넌트 1개 </h2>
    <OneSelection/>
  </section>
  <section>
    <h2> 컴포넌트 여러개 </h2>
    <OneSelection/>
    <OneSelection/>
    <OneSelection/>
  </section>
</template>

<style scoped>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
