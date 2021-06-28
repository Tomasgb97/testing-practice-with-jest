import { expect } from "@jest/globals"
import calculator from "./calculator"

test("add 2 + 2", () => {
    expect(calculator.sum(2,2)).toBe(4);
})

test("substract 10 - 8", () => {
    expect(calculator.substract(10,8)).toBe(2);
})

test("multiply 10 * 8", () => {
    expect(calculator.multiply(10,8)).toBe(80);
})

test("divide 21 / 3", () => {
    expect(calculator.divide(21,3)).toBe(7);
})