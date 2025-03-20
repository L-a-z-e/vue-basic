<script setup lang="ts">
import { ref } from "vue";

const cocktailListInit: string[] = ["화이트레이디", "블루하와이", "애플마티니"];
const cocktailList = ref(cocktailListInit);
const changeCocktailList = (): void => {
  cocktailList.value = ["준벅", "미도리샤워", "깔루아밀크"]; // 반응형 제대로 동작하지 않음 -> 이유 객체/배열 자체를 통째로 바꾸는 것은 감지하지 못함
  // cocktailList.value.splice(0, cocktailList.value.length, "준벅", "미도리샤워", "깔루아밀크");
}

const addCocktailList = (): void => {
  alert("add");
  cocktailList.value.push("블루문");
}

const deleteFromCocktailList = (): void => {
  cocktailList.value.pop();
}
</script>

<template>
  <ul>
    <li v-for="(cocktail, index) in cocktailList" v-bind:key="cocktail">
      {{ cocktail }} (인덱스 {{ index }})
    </li>
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