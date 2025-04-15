<script setup lang="ts">

import {computed, ref} from "vue";
import {divideTwoNums} from '@/functions'

const num1 = ref(6);
const num2 = ref(3);
const ans = computed(
    (): number => {
      return divideTwoNums(num1.value, num2.value);
    }
)
</script>

<template>
  <p>{{ num1 }} / {{ num2 }} = {{ ans }}</p>
</template>