<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>

<template>
  <section class="box">
    <h1>{{ name }} 님의 상황</h1>
    <slot name="default">
    <p>slot fallback</p>
    </slot>
    <slot name="detail"/>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>