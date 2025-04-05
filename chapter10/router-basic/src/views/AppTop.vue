<script setup lang="ts">
import { RouterLink} from "vue-router";
</script>

<template>
  <h1>TOP</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>TOP</li>
    </ul>
  </nav>
  <section>
    <p>
      <RouterLink :to="{ name: 'MemberList' }">
        회원 관리는 여기서
      </RouterLink>
    </p>
  </section>
</template>