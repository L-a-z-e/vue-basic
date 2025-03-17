<script setup lang="ts">
import { onMounted, ref } from "vue";

const htmlStr = ref(`<a href="https://vuejs.org//">Vue.js 페이지 </a>`);
const price = ref(1000);
const hello = ref("{{ hello }}"); // 초기 메시지 변경

onMounted(() => {
  // 1초 후에 "hello"로 변경 (의도적으로 딜레이)
  setTimeout(() => {
    hello.value = "hello";
  }, 3000);
});
</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <section>{{ htmlStr }}</section>
    <section v-html="htmlStr"></section>
    <section v-pre>
      <p v-on:click="showHello">{{ hello }}</p>
    </section>
    <section>
      <input type="number" v-model="price">원<br>
      <p>금액은 {{ price }}원 입니다.</p>
      <p v-once>(once)금액은 {{ price }}원 입니다.</p>
    </section>
    <p>{{ hello }}</p>
    <p v-cloak>{{ hello }}</p>
  </div>
</template>

<style>
[v-cloak] {
  /* display: none; 대신 visibility: hidden; 사용 */
  visibility: hidden;
  /* 배경색을 추가하여 숨김 영역을 시각적으로 확인 */
  background-color: lightgray;
  padding: 10px; /* 내용이 없어도 영역을 보이게 하기 위해 padding 추가 */
}
</style>