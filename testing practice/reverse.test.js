import { expect } from "@jest/globals";
import reverse from "./reverse"


test('reversing perro', () => {
    expect(reverse('perro')).toBe('orrep')
})

test('reversing with space', () => {
    expect(reverse('monte negro')).toBe('orgen etnom')
}) 

test('more than two words', () => {
    expect(reverse('uno dos tres')).toBe('sert sod onu')
}) 