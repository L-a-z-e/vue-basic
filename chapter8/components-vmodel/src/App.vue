<script setup lang="ts">
import WithModel from "@/components/WithModel.vue";
</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <h1>컴포넌트의 독립성</h1>
    <section>
      <h2>v-model을 포함한 컴포넌트</h2>
      <WithModel/>
      <WithModel/>
    </section>
  </div>

</template>

<style scoped>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>