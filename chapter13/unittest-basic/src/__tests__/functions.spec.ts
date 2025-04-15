import {describe, expect, test} from "vitest";
import {divideTwoNums} from '../functions';

describe(
  "functions.ts > divideTwoNums() 테스트",
  () => {
    test(
      "나눗셈 테스트",
      () => {
        const num1 = 6;
        const num2 = 3;
        const actual = divideTwoNums(num1, num2);
        const expected = 2;
        expect(actual).toBe(expected);
      }
    );
    test(
      "분자가 0인 경우 테스트",
      () => {
        const num1 = 0;
        const num2 = 3;
        const actual = divideTwoNums(num1, num2);
        const expected = 0;
        expect(actual).toBe(expected);
      }
    );
    test(
      "분모가 0인 경우 테스트",
      () => {
        const num1 = 6;
        const num2 = 0;
        const actual = divideTwoNums(num1, num2);
        expect(actual).toBe(Infinity);
      }
    )
  }
)