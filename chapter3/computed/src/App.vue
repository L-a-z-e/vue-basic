<script setup lang="ts">
import { ref, computed } from "vue"

const radiusInit = Math.round(Math.random() * 10);
const PI = ref(3.14);
const radius = ref(radiusInit);

const area = computed(
  (): number => {
    return radius.value * radius.value * PI.value;
  }
);

setInterval(
  (): void => {
    radius.value = Math.round(Math.random() * 10);
  },
  1000
)
</script>

<template>
  <p>반지름이 {{  radius }} 이고 원주율이 {{  PI  }}인 원의 면적은 {{ area }}</p>
</template>