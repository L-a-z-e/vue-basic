<script setup lang="ts">
import { ref } from "vue";

const cocktailListInit = new Map<number, string>();
cocktailListInit.set(234, "화이트레이디");
cocktailListInit.set(564, "블루하와이");
cocktailListInit.set(423, "마티니");

const cocktailList = ref(cocktailListInit);

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

const cocktailDetailList: Cocktail[] = [
  { id: 123, name: "화이트레이디", price: 1200 },
  { id: 124, name: "블루하와이", price: 200 },
  { id: 125, name: "준벅", price: 300 },
  { id: 126, name: "깔루아밀크", price: 400 },
]

interface Cocktail {
  id: number;
  name: string;
  price: number;
}

const cocktailDetailMapInit: Map<number, Cocktail> = new Map();
cocktailDetailMapInit.set(1, { id: 123, name: "화이트레이디", price: 1200 })
cocktailDetailMapInit.set(2, { id: 125, name: "블루하와이", price: 120 })
cocktailDetailMapInit.set(5, { id: 127, name: "준벅", price: 100 })

const cocktailDetailMap = ref(cocktailDetailMapInit);
</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <section>
      <ul>
        <li
          v-for="[id, cocktailName] in cocktailList"
          v-bind:key="id">
          ID가 {{ id }}인 칵테일은 {{ cocktailName }}
        </li>
      </ul>
    </section>
    <section>
      <dl>
        <template
          v-for="(value, key) in whiteLady"
          v-bind:key="key">
          <dt>{{ key }}</dt>
          <dd>{{ value }}</dd>
        </template>
      </dl>
    </section>
    <section>
      <ul>
        <li
          v-for="cocktailItem in cocktailDetailList"
          v-bind:key="cocktailItem.id">
          {{ cocktailItem.name }}의 가격은 {{ cocktailItem.price }}원
        </li>
      </ul>
    </section>
    <section>
      <ul>
        <li
          v-for="[id, cocktailItem] in cocktailDetailMap"
          v-bind:key="id">
          id : {{ id }} cocktailId : {{ cocktailItem.id }} cocktailName : {{ cocktailItem.name }} price : {{ cocktailItem.price }}
        </li>
      </ul>
    </section>
    <section>
      <ul>
        <li
          v-for="r in 5"
          v-bind:key="r">
          반지름이 {{ r }}인 원의 둘레 : {{ 2 * r * 3.14 }}
        </li>
      </ul>
    </section>
    <section>
      <select>
        <option v-for="year in 60" v-bind:key="year" v-bind:value="year + 2025">
          {{ year + 2025 }}
        </option>
      </select>
    </section>
  </div>
</template>