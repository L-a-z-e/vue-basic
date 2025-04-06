<script setup lang="ts">
import { inject } from "vue";
import { RouterLink } from "vue-router";
import type { Member } from "@/interface";

const memberList = inject("memberList") as Map<number, Member>;
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
      <ul>
        <li v-for="[id, member] in memberList" :key="id">
          <RouterLink :to="{ name: 'MemberDetail', params: { id: id}}">
            ID가 {{ id }}인 {{ member.name }}님
          </RouterLink>
        </li>
      </ul>
  </section>
  <RouterView/>
</template>

<style scoped>

</style>