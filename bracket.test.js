import { bracketsAreMatching } from "./brackets";
import { expect, it } from 'vitest'

it('matches brackets', () => {
    const balancedInputs = [
        '(()())',
        '()',
        '[]',
    ];
    for (let index = 0; index < balancedInputs.length; index++) {
        const input = balancedInputs[index];
        expect(bracketsAreMatching(input)).toBe(true)
    }

     const unBalancedInputs = [
        '}{',
    ];
    
    for (let index = 0; index < unBalancedInputs.length; index++) {
        const input = unBalancedInputs[index];
        expect(bracketsAreMatching(input)).toBe(false)
    }

})