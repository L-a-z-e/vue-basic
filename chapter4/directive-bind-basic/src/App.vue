<script setup lang="ts">
import { ref } from "vue";

const url = ref("https://vuejs.org/");
const isSendButtonDisabled = ref(true);
const widthOrHeight = ref("height");
const withOrHeightValue = ref(200);
const imgAttributes = ref({
  src: "/images/logo.svg",
  alt: "VueLogo",
  width: 75,
  height: 75
});
</script>

<template>
  <p><a v-bind:href="url" target="_blank">Vue.js사이트</a></p>
  <p><a :href="url" target="_blank">Vue.js(약어)</a></p>
  <p><a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.js 가이드페이지</a></p>
  <p><button type="button" v-bind:disabled="isSendButtonDisabled">전송</button></p>
  <p><img alt="VueLogo" src="./assets/logo.svg" v-bind:[widthOrHeight]="withOrHeightValue"></p>
  <p><img v-bind:="imgAttributes"></p>
  <p><img :imgAttributes title="로고"></p>
  <p><img :imgAttributes alt="로고"></p>
</template>