<script setup lang="ts">

import {type City, useWeatherStore} from "@/stores/weather.ts";
import {computed} from "vue";

interface Props {
  id: string;
}

const props = defineProps<Props>();

const weatherStore = useWeatherStore();
weatherStore.recieveWeatherInfo(props.id);

const isLoading = computed(
    (): boolean => {
      return weatherStore.isLoading;
    }
);

const selectedCity = computed(
    (): City => {
      return weatherStore.selectedCity;
    }
)

const weatherDescription = computed(
    (): string => {
      return weatherStore.weatherDescription;
    }
);
</script>

<template>
  <p v-if="isLoading">데이터 취득 중...</p>
  <section v-else>
    <h2>{{ selectedCity.name }}</h2>
    <p>{{ weatherDescription }}</p>
  </section>
  <p>리스트로 <RouterLink :to="{ name: 'CityList' }">돌아가기</RouterLink></p>
</template>

<style scoped>

</style>