<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered} from "vue";
import type { DebuggerEvent } from "vue";

const heightInit = Math.round(Math.random() * 10);
const widthInit = Math.round(Math.random() * 10);
const height = ref(heightInit);
const width = ref(widthInit);
const area = computed(
    (): number => {
      return height.value * width.value;
    }
);

const change = (): void => {
  height.value = Math.round(Math.random() * 10);
  width.value = Math.round(Math.random() * 10);
}

onBeforeMount(
    (): void => {
      console.log(`beforeMount called: ${height.value} * ${width.value}`);
    }
)
onMounted(
    (): void => {
      console.log(`onMounted called: ${height.value} * ${width.value}`);
    }
)
onBeforeUpdate(
    (): void => {
      console.log(`onBeforeUpdate called: ${height.value} * ${width.value}`);
    }
)
onUpdated(
    (): void => {
      console.log(`onUpdated called: ${height.value} * ${width.value}`);
    }
)
onRenderTracked(
    (event: DebuggerEvent): void => {
      console.log(`onRenderTracked called: ${height.value} * ${width.value}`);
      console.log(event);
    }
)
onRenderTriggered(
    (event: DebuggerEvent): void => {
      console.log(`onRenderTriggered called: ${height.value} * ${width.value}`);
      console.log(event);
    }
)
</script>

<template>
  <p>세로 {{ height }}, 가로 {{ width }}인 사각형의 면적은 {{ area }}</p>
  <button @click="change">변경</button>
</template>