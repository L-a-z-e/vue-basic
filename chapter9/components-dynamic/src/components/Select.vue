<script setup lang="ts">
import {ref} from "vue";

const memberTypeSelect = ref(1);
</script>

<template>
  <select v-model="memberTypeSelect">
    <option value="1">일반회원</option>
    <option value="2">특별회원</option>
    <option value="3">우수회원</option>
  </select>
  <br>
  <p>선택된 리스트: {{ memberTypeSelect }}</p>
</template>

<style scoped>

</style>