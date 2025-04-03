<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      height: Math.round(Math.random() * 10),
      width: Math.round(Math.random() * 10)
    }
  },
  methods: {
    change(): void {
      this.height = Math.round(Math.random() * 10);
      this.width = Math.round(Math.random() * 10);
    }
  }
})
</script>

<template>
  <p>세로 {{ height }}, 가로 {{ width }}</p>
  <button @click="change">변경</button>
</template>