<script setup lang="ts">
import {reactive} from "vue";

const memberInfo = reactive({
  name: "laze",
  state: "no problem"
});
</script>

<template>
  <section>
    <slot v-bind:memberName="memberInfo.name"
      v-bind:memberState="memberInfo.state">
      <h1>{{ memberInfo.name }}</h1> // fallback 임
      <p>{{ memberInfo.state }}</p> // fallback 임
    </slot>
    <slot name="detail" v-bind:memberInfo="memberInfo">
      <h1>{{ memberInfo.name }}</h1> // fallback 임
      <p>{{ memberInfo.state }}</p> // fallback 임
    </slot>
  </section>
</template>

<style scoped>

</style>