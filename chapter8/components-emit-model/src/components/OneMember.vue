<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}

// const props = defineProps<Props>();
const props = withDefaults(
    defineProps<Props>(),
    { note: "--" }
);
//
// interface Emits {
//   (event: "update:points", id: number): void;
// }
//
// const emit = defineEmits<Emits>();

const emit = defineEmits(["update:points"]);

const propsPoints = computed({
  get: () => props.points,
  set: (newVal) => {
    emit("update:points", newVal);
  }
})

// const onInput = (event: Event): void => {
//   const element = event.target as HTMLInputElement;
//   const inputPoints = Number(element.value);
//   emit("update:points", inputPoints);
// }

</script>

<template>
  <section class="box">
    <h4>{{ name }}님의 정보</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>EMAIL</dt>
      <dd>{{ email }}</dd>
      <dt>POINTS</dt>
      <dd>
<!--        <input type="number" v-bind:value="points" v-on:input="onInput">-->
        <input type="number" v-model.number="propsPoints" />
      </dd>
      <dt>Note</dt>
      <dd>{{ note }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>