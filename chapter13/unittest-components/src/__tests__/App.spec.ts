import {describe, test, expect} from "vitest";
import {mount} from '@vue/test-utils';
import App from '@/App.vue';
import OneMember from "@/components/OneMember.vue";

describe(
  "App.vue 테스트",
  () => {
    test(
      "포인트 합계 표시 테스트",
      () => {
        const options = {
          global: {
            stubs: {
              OneMember: true
            }
          }
        };
        const wrapper = mount(App, options);
        const actualText = wrapper.text();
        const expected = "모든 회원의 보유 포인트 합계: 3000";
        expect(actualText).toContain(expected);
      }
    );
    test(
      "Emit 메서드 테스트",
      async() => {

        const options = {
          global: {
            stubs: {
              OneMember: true
            }
          }
        };

        const wrapper = mount(App, options);
        const oneMemberComponent = wrapper.findComponent(OneMember);
        await oneMemberComponent.vm.$emit("incrementPoint", 1);
        const actualText = wrapper.text();
        const expected = "모든 회원의 보유 포인트 합계: 3001";
        expect(actualText).toContain(expected);
      }
    )
  }
)