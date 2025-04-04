<script setup lang="ts">
import { ref } from "vue";
import Input from "@/components/Input.vue";
import Radio from "@/components/Radio.vue";
import Select from "@/components/Select.vue";

const currentComponent = ref(Input);

const currentComponentName = ref("Input");

const componentList = [Input, Radio, Select];
const componentNameList = ["Input", "Radio", "Select"];

let currentComponentIndex = 0;

const switchComponent = (): void => {
  currentComponentIndex++;

  if (currentComponentIndex >= 3) {
    currentComponentIndex = 0;
  }

  currentComponent.value = componentList[currentComponentIndex];
  currentComponentName.value = componentNameList[currentComponentIndex];
}
</script>

<template>
  <p>컴포넌트명: {{ currentComponentName }}</p>
  <KeepAlive>
    <component v-bind:is="currentComponent"/>
  </KeepAlive>
  <button @click="switchComponent">컴포넌트 변경</button>
</template>