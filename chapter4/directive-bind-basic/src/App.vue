<script setup lang="ts">
import { computed, ref } from "vue";

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

const msg = ref("style속성 테스트");
const msgTextRed = ref("red");
const msgTextColor = ref("white");
const msgBoxColor = ref("black");
const msgStyles = ref({
  color: "white",
  backgroundColor: "black"
});
const msgStyle2 = ref ({
  fontSize: "24pt"
});
const msgStyle3 = ref ({
  color: "pink",
  fontSize: "24pt"
});
const textSize = computed(
  (): string => {
    const size = Math.round(Math.random() * 25) + 10;
    return `$(size)pt`;
  }
)

</script>

<template>
  <div>
    <p><a v-bind:href="url" target="_blank">Vue.js사이트</a></p>
    <p><a :href="url" target="_blank">Vue.js(약어)</a></p>
    <p><a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.js 가이드페이지</a></p>
    <p><button type="button" v-bind:disabled="isSendButtonDisabled">전송</button></p>
    <p><img alt="VueLogo" src="./assets/logo.svg" v-bind:[widthOrHeight]="withOrHeightValue"></p>
    <p><img v-bind:="imgAttributes"></p>
    <p><img :imgAttributes title="로고"></p>
    <p><img :imgAttributes alt="로고"></p>
  </div>
  <div>
    <p v-bind:style="{ color: msgTextRed }">{{ msg }}</p>
    <p v-bind:style="{ color: 'pink' }">{{ msg }}</p>
    <p v-bind:style="{ fontSize: textSize }">{{ msg }}</p>
    <p v-bind:style="{ color: msgTextColor, backgroundColor: msgBoxColor }">{{ msg }}</p>
    <p v-bind:style="{ color: msgTextColor, 'background-color': msgBoxColor }">{{ msg }}</p>
    <p v-bind:style="msgStyles">{{ msg }}</p>
    <p v-bind:style="[msgStyles, msgStyle2]">{{ msg }}</p>
    <p v-bind:style="[msgStyles, msgStyle3]">{{ msg }}</p>
    <p v-bind:style="[msgStyle2, msgStyle3]">{{ msg }}</p>

  </div>
  
</template>