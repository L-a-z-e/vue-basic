import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue"

describe(
  "App.vue 테스트",
  () => {
    test(
      "초기 상태(숨김 영역 비표시) 테스트",
      () => {
        const wrapper = mount(App);
        const actual = wrapper.find(`[data-testid="invisible"]`).exists();
        const expected = false;
        expect(actual).toBe(expected);
      }
    );
    test(
      "표시 버튼 클릭 테스트",
      async () => {
        const wrapper = mount(App);
        await wrapper.get(`[data-testid="showButton"]`).trigger("click");
        const actual = wrapper.find(`[data-testid="invisible"]`).exists();
        const expected = true;
        expect(actual).toBe(expected);

      }
    )
  }
)