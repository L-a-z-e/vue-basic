<script setup lang="ts">
import { ref, computed } from "vue";

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(1, { id: 123, name: "화이트레이디", price: 1200 })
cocktailDataListInit.set(2, { id: 125, name: "블루하와이", price: 120 })
cocktailDataListInit.set(5, { id: 127, name: "준벅", price: 50 })
interface Cocktail {
  id: number;
  name: string;
  price: number;
}

const cocktailDataList = ref(cocktailDataListInit);

const cocktail100 = computed(
    (): Map<number, Cocktail> => {
      const newList = new Map<number, Cocktail>();
      cocktailDataList.value.forEach(
          (value: Cocktail, key: number): void => {
            if (value.price >= 100)
              newList.set(key, value);
          }
      );

      return newList;
    }
)

const changeWhiteLadyPrice = (): void => {
  const whiteLady = cocktailDataList.value.get(1) as Cocktail;
  whiteLady.price = 1500;
}
</script>

<template>
  <section>
    칵테일 리스트
    <ul>
      <li v-for="[key, cocktail] in cocktailDataList" :key="cocktail.id">
        key : {{ key }} / id : {{ cocktail.id }} / name : {{ cocktail.name }} / price : {{ cocktail.price }}
      </li>
    </ul>
  </section>
  <section>
    가격이 100이상인 칵테일 리스트
    <ul>
      <li v-for="[key, cocktail] in cocktail100" :key="cocktail.id">
        key : {{ key }} / id : {{ cocktail.id }} / name : {{ cocktail.name }} / price : {{ cocktail.price }}
      </li>
    </ul>
  </section>
  <p>
    WhiteLady 가격 변경
    <button @click="changeWhiteLadyPrice">변경</button>
  </p>
</template>