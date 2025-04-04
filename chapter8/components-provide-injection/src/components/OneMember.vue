<script setup lang="ts">
import { inject, computed } from "vue";
import type { Member } from "../interface"

interface Props {
  id: number;
}

const props = defineProps<Props>();
const memberList = inject("memberList") as Map<number, Member>;

const emit = defineEmits(["update:points"]);

const member = computed(
    (): Member => {
      return memberList.get(props.id) as Member;
    }
)

const localNote = computed(
    (): string => {
      let localNote = member.value.note;
      if (localNote == undefined) {
        localNote = "--";
      }
      return localNote;
    }
)
</script>

<template>
  <section class="box">
    <h4>{{ member.name }}님의 정보</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>EMAIL</dt>
      <dd>{{ member.email }}</dd>
      <dt>POINTS</dt>
      <dd>
        <input type="number" v-model.number="member.points" />
      </dd>
      <dt>Note</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>