<script setup lang="ts">

import {type City, useWeatherStore} from "@/stores/weather.ts";
import {computed} from "vue";

const weatherStore = useWeatherStore();
weatherStore.prepareCityList();

const cityList = computed(
    (): Map<string, City> => {
      return weatherStore.cityList;
    }
);
</script>

<template>
  <section>
    <h2>도시 리스트</h2>
    <ul>
      <li
        v-for="[id,city] in cityList"
        v-bind:key="id">
        <RouterLink :to="{ name: 'WeatherInfo', params: { id: id }}">
          {{ city.name }}의 날씨
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>