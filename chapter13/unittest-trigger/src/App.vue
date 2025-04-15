<script setup lang="ts">
import {ref} from "vue";

const isVisible = ref(false);
const onShowButtonClick = (): void => {
  isVisible.value = true;
}
</script>

<template>
  <p>
    숨겨진 영역
    <button data-testid="showButton" @click="onShowButtonClick">표시</button>
  </p>
  <p v-if="isVisible" data-testid="invisible">표시되었습니다.</p>
</template>