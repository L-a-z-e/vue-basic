import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils"
import App from "@/App.vue";

describe(
  "App.vue 테스트",
  () => {
    test(
      "초기값 테스트",
      () => {
        const wrapper = mount(App);
        const actual = wrapper.get(`[data-testid="ans"]`).text();
        const expected = "2";
        expect(actual).toBe(expected);
      }
    );
    test(
      "분자 8, 분모 2를 입력한 테스트",
      async () => {
        const wrapper = mount(App);
        await wrapper.get(`[data-testid="num1"]`).setValue(8);
        await wrapper.get(`[data-testid="num2"]`).setValue(2);
        const actual = wrapper.get(`[data-testid="ans"]`).text();
        const expected = "4";
        expect(actual).toBe(expected);
      }
    )
  }
)