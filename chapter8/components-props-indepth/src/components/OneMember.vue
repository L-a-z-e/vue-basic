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

const localPoints = ref(props.points)

const localNote = computed(
    (): string => {
      let localNote = props.note;
      if (localNote === undefined) {
        localNote = "--";
      }
      return localNote;
    }
)

const pointUp = (): void => {
  localPoints.value++;
}
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
      <dd>{{ localPoints }}</dd>
      <dt>Note</dt>
      <dd>{{ note }}</dd>
    </dl>
    <button @click="pointUp">포인트 UP</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>