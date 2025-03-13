<script setup lang="ts">
import { ref } from "vue";

const randValue = ref("시작 전");
const onButtonClick = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue.value = String(rand);
}

const mousePointerX = ref(0);
const mousePointerY = ref(0);
const onImgMousemove = (event: MouseEvent): void => {
  mousePointerX.value = event.offsetX;
  mousePointerY.value = event.offsetY;
}

const pBgColor = ref("white");
const onPClick = (bgColor: string): void => {
  pBgColor.value = bgColor;
}

const pMsg = ref("이벤트 전 (Click!)");
const pBgColorEvent = ref("white");
const onPClickWithEvent = (bgColor: string, event: MouseEvent): void => {
  pBgColorEvent.value = bgColor;
  pMsg.value = event.timeStamp.toString();
};

const msg = ref("미전송");
const onFormSubmit = (): void => {
  msg.value = "전송";
}

const msg1 = ref("시작전");
const onEnterKey = (): void => {
  msg.value = "엔터 키 입력됨";
}

const onRightButtonClick = (): void => {
  msg.value = "마우스 우클릭";
}

const onShiftClick = (): void => {
  msg.value = "쉬프트 + 클릭";
}
</script>

<template>
  <section>
    <button v-on:click="onButtonClick">Click</button>
    <p>result : {{  randValue }}</p>
  </section>

  <section>
    <img src="./assets/logo.svg" alt="Vue logo" width="200" @mousemove="onImgMousemove">
    <p>Pointer : x = {{ mousePointerX }} / y = {{ mousePointerY }}</p>
  </section>

  <section>
    <p @click="onPClick('red')" :style="{ backgroundColor: pBgColor }">
      클릭-> 색상변경
    </p>
  </section>

  <section>
    <p @click="onPClickWithEvent('green', $event)" :style="{ backgroundColor: pBgColorEvent }">{{ pMsg }}</p>
  </section>

  <section>
    <form action="#" @submit.prevent="onFormSubmit">
      <input type="text" required>
      <button type="submit">전송</button>
    </form>
    <p>{{ msg }}</p>
  </section>

  <section>
    <p>{{ msg1 }}</p>
    <input type="text" @keydown.enter="onEnterKey"><br>
    <button @click.right="onRightButtonClick">우클릭</button>
    <button @clcik.shift="onShiftClick">시프트 + 클릭</button>
  </section>
</template>