<script setup lang="ts">
import { ref } from "vue";

const whiteLadyInit: {
  id: number;
  name: string;
  price: number;
  recipe: string;
} = {
  id: 123,
  name: "화이트레이디",
  price: 1200,
  recipe: "진 + 쿠앵트로 + 레몬과즙"
};

const whiteLady = ref(whiteLadyInit);

const changeWhiteLadyPrice = (): void => {
  whiteLady.value.price = 1500;
}
</script>

<template>
  <dl>
    <template v-for="(value, key) in whiteLady" :key="key">
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </dl>
  <p>
    가격 변경
    <button @click="changeWhiteLadyPrice">변경</button>
  </p>
</template>