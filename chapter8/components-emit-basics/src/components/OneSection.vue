<script setup lang="ts">
interface Props {
  rand: number;
}

interface Emits {
  (event: "createNewRand"): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const onNewRandButtonClick = (): void => {
  emit("createNewRand");
}
</script>

<template>
  <section class="box">
    <p>자식 컴포넌트로 무작위 값을 표시 : {{ rand }}</p>
    <button @click="onNewRandButtonClick">새로운 무작위 값 발생</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>