<script setup lang="ts">
import { ref, computed } from "vue"

const cocktailDataListInit: Cocktail[] = [
  { id: 1234, name: "화이트레이디", price: 1200 },
  { id: 1235, name: "준벅", price: 1500 },
  { id: 1236, name: "미도리", price: 1800 },
];

const cocktailDataList = ref(cocktailDataListInit);

const priceMoreThan1500 = computed(
    (): Cocktail[] => {
      const newList = cocktailDataList.value.filter(
          (cocktailItem: Cocktail): boolean => {
            return cocktailItem.price >= 1500;
          }
      );
      return newList;
    }
)
interface Cocktail {
  id: number;
  name: string;
  price: number;
}
</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <section>
      <ul>
        <li
          v-for="cocktailItem in cocktailDataList"
          v-bind:key="cocktailItem.id">
          {{ cocktailItem.name }}의 가격은 {{ cocktailItem.price }}원
        </li>
      </ul>
    </section>
    <section>
      <hr>
      <ul>
        <li
          v-for="cocktailItem in priceMoreThan1500"
          v-bind:key="cocktailItem.id">
          {{ cocktailItem.name }}의 가격은 {{ cocktailItem.price }}원
        </li>
      </ul>
    </section>
  </div>
</template>