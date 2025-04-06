<script setup lang="ts">
import { inject, computed, ref } from "vue";
import {onBeforeRouteUpdate, RouterLink, useRoute} from "vue-router";
import type { Member } from "@/interface";

interface Props {
  id: number;
}

const route = useRoute();

const props = defineProps<Props>();
const memberList = inject("memberList") as Map<number, Member>;
// const member = computed(
//     (): Member => {
//       return memberList.get(props.id) as Member;
//     }
// );

let id = Number(route.params.id);
const member = ref(memberList.get(id) as Member);
onBeforeRouteUpdate(
    (to, from) => {
      id = Number(to.params.id);
      member.value = memberList.get(id) as Member;
    }
)

const localNote = computed(
    (): string => {
      let localNote = "--";
      if (member.value.note != undefined) {
        localNote = member.value.note;
      }
      return localNote;
    }
)
</script>

<template>
  <h1>회원 관리</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'AppTop' }">
          TOP
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'MemberList' }">
          회원 리스트
        </RouterLink>
      </li>
      <li>회원 상세정보</li>
    </ul>
  </nav>
  <section>
    <h2>회원 상세정보</h2>
    <dl>
      <dt>ID</dt>
      <dd>{{ member.id }}</dd>
      <dt>이름</dt>
      <dd>{{ member.name }}</dd>
      <dt>메일주소</dt>
      <dd>{{ member.email }}</dd>
      <dt>보유 포인트</dt>
      <dd>{{ member.points }}</dd>
      <dt>비고</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>

<style scoped>

</style>