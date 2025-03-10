<script setup lang="ts">
import {reactive, computed} from "vue"

const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10)
});

const area = computed(
  (): number => data.radius * data.radius * data.PI
)

setInterval(
  (): void => {
    data.radius = Math.round(Math.random() * 10);
  },
  1000
)
</script>

<template>
  <p> 반지름이 {{ data.radius }} 이고 원주율이 {{ data.PI }}인 원의 면적은 {{ area }}입니다.</p>
</template>