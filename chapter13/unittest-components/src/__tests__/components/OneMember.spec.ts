import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
// import OneMember from "@/components/OneMember.vue";
import OneMember from "@/components/OneMember.vue";
describe(
  "Onemember.vue 테스트",
  () => {
    test(
      "비고 데이터가 있을 때 Props 테스트",
      () => {
        const propsData = {
          id: 1,
          name: "laze",
          email: "yysi8771@gmail.com",
          points: 200,
          note: "비고있음"
        };

        const wrapper = mount(OneMember, {props: propsData});
        const actualText = wrapper.text();
        expect(actualText).toContain(String(propsData.id));
        expect(actualText).toContain(String(propsData.name));
        expect(actualText).toContain(String(propsData.email));
        expect(actualText).toContain(String(propsData.points));
        expect(actualText).toContain(String(propsData.note));
      }
    );
    test(
      "비고 데이터가 없을 때 Props 테스트",
      () => {
        const propsData = {
          id: 1,
          name: "laze",
          email: "yysi8771@gmail.com",
          points: 200,
        };

        const wrapper = mount(OneMember, {props: propsData});
        const actualText = wrapper.text();
        expect(actualText).toContain(String(propsData.id));
        expect(actualText).toContain(String(propsData.name));
        expect(actualText).toContain(String(propsData.email));
        expect(actualText).toContain(String(propsData.points));
        expect(actualText).toContain(String("--"));
      }
    );
    test(
      "Point Up 버튼 클릭 테스트",
      async () => {
        const propsData = {
          id: 1,
          name: "laze",
          email: "yysi8771@gmail.com",
          points: 200,
          note: "비고있음"
        };

        const wrapper = mount(OneMember, {props: propsData});
        await wrapper.get("button").trigger("click");
        const incrementPointEvent = wrapper.emitted("incrementPoint");
        expect(incrementPointEvent).toHaveLength(1);
        const expectedIncrementPointEvent = [[propsData.id]];
        expect(incrementPointEvent).toEqual(expectedIncrementPointEvent);
      }
    )
  }
)