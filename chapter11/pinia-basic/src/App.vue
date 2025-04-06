<script setup lang="ts">
import {computed} from "vue";
import {useCounterStore} from "@/stores/counter.ts";

const counterStore = useCounterStore();
const count = computed(
    (): number => {
      return counterStore.counter;
    }
);

const doubleCount = computed(
    (): number => {
      return counterStore.doubleCount;
    }
);

const onIncrementClick = () => {
  counterStore.incrementCount();
};
</script>

<template>
    <p>현재 Count: {{ count }}</p>
    <p>현재 Count의 두배: {{ doubleCount }}</p>
    <button @click="onIncrementClick">가산</button>
</template>

<style scoped>

</style>
<!--<script setup lang="ts">-->
<!--// computed 는 이제 App.vue 레벨에서는 직접적으로 필요하지 않을 수 있습니다.-->
<!--// import {computed} from "vue";-->
<!--import { storeToRefs } from 'pinia'; // 1. storeToRefs 를 import 합니다.-->
<!--import { useCounterStore } from "@/stores/counter.ts";-->

<!--const counterStore = useCounterStore();-->

<!--// 2. storeToRefs를 사용하여 state와 getters의 반응성을 유지하며 구조 분해합니다.-->
<!--//    counter는 Ref<number>, doubleCount는 ComputedRef<number>가 됩니다.-->
<!--const { counter, doubleCount } = storeToRefs(counterStore);-->

<!--// 3. Actions는 스토어 인스턴스에서 직접 구조 분해하거나 가져옵니다.-->
<!--const { incrementCount } = counterStore; // incrementCount는 함수입니다.-->

<!--// 4. 기존의 count, doubleCount computed는 더 이상 필요하지 않습니다.-->
<!--//    템플릿에서 storeToRefs로 가져온 counter, doubleCount를 직접 사용합니다.-->
<!--// const count = computed( ... ); // 삭제-->
<!--// const doubleCount = computed( ... ); // 삭제-->

<!--// 5. 클릭 핸들러는 동일하게 유지하거나, 액션을 직접 바인딩할 수도 있습니다.-->
<!--const onIncrementClick = () => {-->
<!--  incrementCount(); // 구조 분해한 액션 함수 호출-->
<!--  // 또는 counterStore.incrementCount(); 로 호출해도 동일합니다.-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  &lt;!&ndash; 불필요한 중첩 <template> 제거 &ndash;&gt;-->
<!--  <div>-->
<!--    &lt;!&ndash; 6. 템플릿에서는 storeToRefs로 가져온 변수를 직접 사용합니다. &ndash;&gt;-->
<!--    &lt;!&ndash;    Vue가 자동으로 .value 를 언래핑해줍니다. &ndash;&gt;-->
<!--    <p>현재 Count: {{ counter }}</p>-->
<!--    <p>현재 Count의 두배: {{ doubleCount }}</p>-->
<!--    <button @click="onIncrementClick">가산</button>-->
<!--    &lt;!&ndash; 또는 액션을 직접 바인딩 &ndash;&gt;-->
<!--    &lt;!&ndash; <button @click="incrementCount">가산</button> &ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--/* 스타일은 그대로 유지 */-->
<!--</style>-->