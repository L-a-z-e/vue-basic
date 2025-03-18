<script setup lang="ts">
import { computed, ref } from "vue"

const number = ref(80);
const showOrNot = computed(
  (): boolean => {
    let showOrNot = false;
    const rand = Math.round(Math.random() * 100);

    if (rand >= 50) {
      showOrNot = true;
    }
    return showOrNot;
  }
)

const cocktailListInit: string[] = ["코스모폴리탄", "롱아일랜드", "애플마티니"];
const cocktailList = ref(cocktailListInit);

const cocktailList2Init: { [key: number]: string; } = {
  234: "코스모폴리탄",
  543: "롱아일랜드",
  712: "애플마티니",
};

const cocktailList2 = ref(cocktailList2Init);

</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <section>
      <p v-if="number >= 50">
        number >= 50 조건
      </p>
      <p v-if="Math.round(Math.random() * 100) >= 50">
        random 1 ~ 100 >= 50 ?
      </p>
      <p v-if="showOrNot">
        showOrNot
      </p>
    </section>
    <section v-show="showOrNot">
      v-show : showOrNot
    </section>
    <section>
      <ul>
        <li
        v-for="cocktailName in cocktailList"
        v-bind:key="cocktailName"
        >
        {{ cocktailName }}
        </li>
      </ul>
      <ul>
        <li
        v-for="(cocktailName, index) in cocktailList"
        v-bind:key="cocktailName">
        {{ cocktailName }} (인덱스 {{ index}})
      </li>
      </ul>
    </section>
    <section>
      <ul>
        <li
        v-for="(cocktailName, id) in cocktailList2"
        v-bind:key="'cocktailList' + id">
          ID가 {{ id }}인 칵테일은 {{ cocktailName }}
        </li>
      </ul>
      <ul>
        <li
        v-for="(cocktailName, id, index) in cocktailList2"
        v-bind:key="'cocktailListWithIdx' + id">
          {{ index + 1 }}: ID가 {{ id }}인 칵테일은 {{ cocktailName }}
      </li>
      </ul>
    </section>

  </div>

</template>