<script setup lang="ts">
import { reactive, provide } from "vue";
import { RouterView } from "vue-router";
import type { Member } from  "@/interface";

const memberList = new Map<number, Member>();
memberList.set(1, {id: 1, name: "user1", email: "user1@example.com", points: 1000, note: "note1"});
memberList.set(2, {id: 2, name: "user2", email: "user2@example.com", points: 2000});
provide("memberList", reactive(memberList));
</script>

<template>
  <header>
    <h1>Vue Router Sample</h1>
  </header>
  <main>
    <RouterView/>
  </main>
  <section id="sub">
    <RouterView name="sub"/>
  </section>
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