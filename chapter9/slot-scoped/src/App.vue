<script setup lang="ts">
import OneSection from "@/components/OneSection.vue";
</script>

<template>
  <OneSection>
    <template v-slot="{memberName, memberState}">
      <dl>
        <dt>이름</dt>
        <dd>{{ memberName }}</dd>
        <dt>상황</dt>
        <dd>{{ memberState }}</dd>
      </dl>
    </template>
    <template #detail="slotProps2">
      <dl>
        <dt>이름</dt>
        <dd>{{ slotProps2.memberInfo.name }}</dd>
        <dt>상황</dt>
        <dd>{{ slotProps2.memberInfo.state }}</dd>
      </dl>
    </template>
  </OneSection>
</template>