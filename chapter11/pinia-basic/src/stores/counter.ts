import {defineStore} from "pinia";
interface State {
  counter: number;
}

export const useCounterStore = defineStore('counter',{
  state: (): State => {
    return {
      counter: 0
    }
  },
  getters: {
    doubleCount: (state: State): number => {
      return state.counter * 2;
    }
  },
  actions: {
    incrementCount(): void {
      this.counter++;
    }
  }
});

// import { ref, computed } from 'vue';
// import { defineStore } from 'pinia';
//
// export const useCounterStore = defineStore('counter', () => {
//   const counter = ref(0);
//   const doubleCount = computed(() => counter.value * 2);
//   function incrementCount() {
//     counter.value++;
//   }
//   // 필요한 상태, 게터, 액션을 반환
//   return { counter, doubleCount, incrementCount };
// });