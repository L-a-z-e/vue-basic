import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from '@/App.vue';
describe(
  "App.vue Test",
  () => {
    test(
      "초기값 표기 내용 테스트",
      () => {
        const wrapper = mount(App);
        const actual = wrapper.find("p").text();
        const expected = "6 / 3 = 2";
        expect(actual).toBe(expected);
      }
    )
  }
)