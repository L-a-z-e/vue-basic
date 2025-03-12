<script setup lang="ts">
import { ref, computed } from "vue";

const msg = ref("class binding");
const isTextColorRed = ref(true);
const isBgColorBlue = ref(false);
const styles = ref({
  textColorRed: false,
  bgColorBlue: true
});
const computedStyles = computed(
  (): { textColorRed: boolean; bgColorBlue: boolean; } => {
    const randText = Math.round(Math.random());
    let textColorFlag = true;
    if (randText == 0) {
      textColorFlag = false;
    }

    const randBg = Math.round(Math.random());
    let bgColorFlag = true;
    if (randBg == 0) {
      bgColorFlag = false;
    }

    return {
      textColorRed: textColorFlag,
      bgColorBlue: bgColorFlag
    };
  }
)

</script>

<template>
  <p v-bind:class="{textColorRed: true, bgColorBlue: true}">{{ msg }} -> {textColorRed: true, bgColorBlue: true}</p>
  <p v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">{{ msg }} -> {textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}</p>
  <p v-bind:class="{textColorPink: true}">{{ msg }} -> {textColorPink: true}</p>
  <p v-bind:class="{'text-color-pink': true}">{{ msg }} -> {'text-color-pink': true}</p>
  <p class="textSize24" v-bind:class="styles">{{ msg }} -> class="textSize24" v-bind:class="styles"</p>
  <p v-bind:class="computedStyles">{{ msg }} -> computedStyles</p>
</template>

<style>
  .textColorRed {
    color: red;
  }

  .text-color-pink {
    color: pink;
  }

  .bgColorBlue {
    background-color: blue;
  }

  .textSize24 {
    font-size: 24px;
  }
</style>