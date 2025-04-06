<script setup lang="ts">
import {RouterView} from "vue-router";
import type {Member} from "@/interface";
import {useMembersStore} from "@/stores/members.ts";

const memberStore = useMembersStore();
memberStore.initList();
const memberList = new Map<number, Member>();

</script>

<template>
  <header>
    <h1>Pinia Sample</h1>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style>
  main {
    border: blue 1px solid;
    padding: 10px;
  }

  #breadcrumbs ul li {
    display: inline;
    list-style-type: none;
  }

  #breadcrumbs {
    margin-left: 0;
  }

  #breadcrumbs ul {
    padding-left: 0;
  }

  #breadcrumbs ul .current {
    color: red;
  }

  #breadcrumbs ul li:first-child::before {
    content: none;
  }
</style>