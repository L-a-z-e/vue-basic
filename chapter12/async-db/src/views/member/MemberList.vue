<script setup lang="ts">
import {RouterLink} from "vue-router";
import {useMembersStore} from "@/stores/members.ts";
import {computed} from "vue";
import type {Member} from "@/interface.ts";

const memberStore = useMembersStore();
memberStore.prepareMemberList();

const memberList = computed(
    (): Map<number, Member> => {
      return memberStore.memberList;
    }
)

const isEmptyList = computed(
    (): boolean => {
      return memberStore.isMemberListEmpty;
    }
)

const isLoading = computed(
    (): boolean => {
      return memberStore.isLoading;
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
      <li>회원 리스트</li>
    </ul>
  </nav>
  <section>
    <h2>회원 리스트</h2>
    <p>
      신규 <router-link :to="{ name: 'MemberAdd'}">등록</router-link>
    </p>
    <p v-if="isLoading">
      데이터 취득중...
    </p>
    <section v-else>
      <ul>
        <li v-if="isEmptyList">회원 정보가 없습니다.</li>
        <li v-for="[id, member] in memberList" :key="id">
          <RouterLink :to="{ name: 'MemberDetail', params: { id: id}}">
            ID가 {{ id }}인 {{ member.name }}님
          </RouterLink>
        </li>
      </ul>
    </section>
  </section>
  <RouterView/>
</template>

<style scoped>

</style>