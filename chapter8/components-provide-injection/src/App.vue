<script setup lang="ts">
import {reactive, provide} from "vue";
import BaseSection from "@/components/BaseSection.vue";
import type { Member } from "./interface";

const memberList = new Map<number, Member>();
memberList.set(1, {id: 1, name: "user1", email: "user1@example.com", points: 1000, note: "note1"});
memberList.set(2, {id: 2, name: "user2", email: "user2@example.com", points: 2000});
provide("memberList", reactive(memberList))
</script>

<template>
  <BaseSection/>
</template>