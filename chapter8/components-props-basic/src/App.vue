<script setup lang="ts">
import OneInfo from "@/components/OneInfo.vue";
import { ref } from "vue";

const weatherListInit = new Map<number, Weather>();
weatherListInit.set(1, {id: 111, title: "오늘 날씨", content: "맑음"});
weatherListInit.set(2, {id: 222, title: "내일 날씨", content: "흐림"});
weatherListInit.set(3, {id: 333, title: "모레 날씨", content: "눈"});

const weatherList = ref(weatherListInit);
interface Weather {
  id: number;
  title: string;
  content: string;
}
</script>

<template>
  <h1>Props 기초</h1>
  <section>
    <h2>속성에 직접 기술</h2>
    <OneInfo
        title="Props basic"
        content="자식 컴포넌트로 데이터를 넘겨주는 props"
    />
    <h2>v-for Props 조합</h2>
    <OneInfo
      v-for="[index, weather] in weatherList"
      v-bind:key="index"
      v-bind:title="weather.title"
      v-bind:content="weather.content"/>
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>