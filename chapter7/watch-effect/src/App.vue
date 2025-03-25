<script setup lang="ts">
import { ref, watchEffect } from "vue";

const cocktailNo = ref(1);
const priceMsg = ref("");

watchEffect(
    (): void => {
      priceMsg.value = getCocktailInfo(cocktailNo.value);
    }
);

setInterval(
    (): void => {
      cocktailNo.value = Math.round(Math.random() * 3) + 1;
    },
    1000
)

interface Cocktail {
  id: number;
  name: string;
  price: number;
}

function getCocktailInfo(cocktailNo: number): string {
  const cocktailDataListInit = new Map<number, Cocktail>();
  cocktailDataListInit.set(1, {id: 1, name: "화이트레이디", price: 1200});
  cocktailDataListInit.set(2, {id: 2, name: "블루하와이", price: 1500});
  cocktailDataListInit.set(3, {id: 3, name: "준벅", price: 1100});
  cocktailDataListInit.set(4, {id: 4, name: "코스모폴리탄", price: 1500});

  const cocktail = cocktailDataListInit.get(cocktailNo);

  if (cocktail) {
    return `${cocktail.name}의 가격은 ${cocktail.price}원 입니다.`;
  } else {
    return "해당 칵테일 정보가 없습니다.";
  }
}
</script>

<template>
  <p>현재 칵테일 번호 : {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>