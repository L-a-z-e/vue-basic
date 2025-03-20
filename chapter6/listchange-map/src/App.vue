<script setup lang="ts">
import { ref } from "vue";

const cocktailListInit = new Map<number, string>();
cocktailListInit.set(234, "화이트레이디");
cocktailListInit.set(564, "블루하와이");
cocktailListInit.set(423, "마티니");

const cocktailList = ref(cocktailListInit);

const changeCocktailList = (): void => {
  cocktailList.value.clear();
  cocktailListInit.set(111, "준벅");
  cocktailListInit.set(222, "미도리샤워");
  cocktailListInit.set(333, "깔루아밀크");
}

const addCocktailList = (): void => {
  cocktailList.value.set(444, "코스모폴리탄");
}

const deleteFromCocktailList = (): void => {
  cocktailList.value.delete(111);
}
</script>

<template>
  <ul>
    <li v-for="[key, value] in cocktailList" v-bind:key="key">
      {{ key }} : {{ value }}
    </li>
<!--    <li v-for="([key, value], index) in cocktailList" v-bind:key="key">-->
<!--      {{ key }} : {{ value }} : {{ index }}-->
<!--    </li>-->
  </ul>
  <p>
    CocktailList 변경
    <button @click="changeCocktailList">변경</button>
  </p>
  <p>
    CocktailList 요소 추가
    <button @click="addCocktailList">추가</button>
  </p>
  <p>
    CocktailList 요소 삭제
    <button @click="deleteFromCocktailList">삭제</button>
  </p>
</template>