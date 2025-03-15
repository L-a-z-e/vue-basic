<script setup lang="ts">
import { ref } from "vue"

const inputNameModel = ref("양방향");

const inputNameBind = ref("홍길동");
const inputNameOn = ref("null");

const onInputName = (event: Event): void => {
  const element = event.target as HTMLInputElement
  inputNameOn.value = element.value;
}

const inputTextArea = ref("텍스트 영역 문자 입력 \n(개행추가)");
const memberType = ref(1);
const memberTypeSelect = ref(1);
const isAgreed = ref(false);
const isAgreed01 = ref(0);
const selectedOS = ref([]);
const selectedOSSelct = ref([]);
</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <div>
      <input type="text" v-model="inputNameModel">
      <p>{{ inputNameModel }}</p>
    </div>

    <div>
      <input type="text" v-bind:value="inputNameBind">
    </div>

    <div>
      <input type="text" v-on:input="onInputName">
      <p>{{ inputNameOn }}</p>
    </div>

    <div>
      <textarea v-model="inputTextArea"></textarea>
      <textarea>{{ inputTextArea }}</textarea>
      <br>
      <section>
        <label><input type="radio" name="memberType" value="1" v-model="memberType">일반회원</label>
        <label><input type="radio" name="memberType" value="2" v-model="memberType">특별회원</label>
        <label><input type="radio" name="memberType" value="3" v-model="memberType">우수회원</label>
        <br>
        <p>selected radio button : {{ memberType }}</p>
      </section>
      <br>
      <section>
        <select v-model="memberTypeSelect">
          <option value="1">일반회원</option>
          <option value="2">특별회원</option>
          <option value="3">우수회원</option>
        </select>
        <br>
        <p>선택된 리스트: {{ memberTypeSelect }}</p>
      </section>
      <br>
      <section>
        <label><input type="checkbox" v-model="isAgreed">동의</label>
        <p>동의 결과 : {{ isAgreed }}</p>
      </section>
      <section>
        <label><input type="checkbox" v-model="isAgreed01" true-value="1" false-value="0">동의</label>
        <p>동의 결과 : {{ isAgreed01 }}</p>
      </section>
      <section>
        <label><input type="checkbox" v-model="selectedOS" value="1">macOS</label>
        <label><input type="checkbox" v-model="selectedOS" value="2">Windows</label>
        <label><input type="checkbox" v-model="selectedOS" value="3">Linux</label>
        <label><input type="checkbox" v-model="selectedOS" value="4">iOS</label>
        <label><input type="checkbox" v-model="selectedOS" value="5">Android</label>
        <p>선택된 OS: {{ selectedOS }}</p>
      </section>
      <section>
        <select v-model="selectedOSSelct" multiple>
          <option value="1">macOS</option>
          <option value="2">Windows</option>
          <option value="3">Linux</option>
          <option value="4">iOS</option>
          <option value="5">Android</option>
        </select>
        <p>선택된 OS: {{ selectedOSSelct }}</p>
      </section>
      
    </div>
  </div>


</template>