<script setup lang="ts">
import { ref, computed } from "vue";
import OneMember from "@/components/OneMember.vue";

const memberListInit = new Map<number, Member>();
memberListInit.set(1, {id: 1, name: "user1", email: "user1@example.com", points: 1000, note: "note1"});
memberListInit.set(2, {id: 2, name: "user2", email: "user2@example.com", points: 2000});
const memberList = ref(memberListInit);

const totalPoints = computed(
    (): number => {
      let total = 0;
      for (const member of memberList.value.values()) {
        total += member.points;
      }
      return total;
    }
)

const onIncrementPoint = (id: number): void => {
  const member = memberList.value.get(id);
  if (member != undefined) {
    member.points++;
  }
}
interface Member {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}

</script>

<template>
  <section>
    <h1>회원 리스트</h1>
    <p>모든 회원의 보유 포인트 합계: {{ totalPoints }}</p>
    <OneMember
        v-for="[realId, member] of memberList"
        v-bind:key="realId"
        v-bind:id="member.id"
        v-bind:name="member.name"
        :email="member.email"
        :points="member.points"
        :note="member.note"
        @incrementPoint="onIncrementPoint"
    />
  </section>
</template>