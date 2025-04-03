<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const cocktailDataListInit = new Map<number, Cocktail>();
    cocktailDataListInit.set(1, {id: 1, name: "화이트레이디", price: 1200});
    cocktailDataListInit.set(2, {id: 2, name: "블루하와이", price: 1500});
    cocktailDataListInit.set(3, {id: 3, name: "준벅", price: 1100});
    cocktailDataListInit.set(4, {id: 4, name: "코스모폴리탄", price: 1500});
    const cocktailNo = ref(1);
    const priceMsg = ref("123");
    return {
      cocktailNo,
      priceMsg
    }
  }
})

interface Cocktail {
  id: number;
  name: string;
  price: number;
}

</script>

<template>
  <p>cocktailNo : {{ cocktailNo }}</p>
  <p>priceMsg : {{ priceMsg }}</p>
</template>