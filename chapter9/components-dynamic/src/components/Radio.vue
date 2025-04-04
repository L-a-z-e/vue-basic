<script setup lang="ts">
import {ref} from "vue";

const memberType = ref(1);
</script>

<template>
  <label>
    <input type="radio" name="memberType" value="1" v-model="memberType">
    일반회원
  </label>
  <label>
    <input type="radio" name="memberType" value="2" v-model="memberType">
    특별회원
  </label>
  <label>
    <input type="radio" name="memberType" value="3" v-model="memberType">
    우수회원
  </label>
  <br>
  <p>선택된 라디오 버튼: {{ memberType }}</p>
</template>

<style scoped>

</style>