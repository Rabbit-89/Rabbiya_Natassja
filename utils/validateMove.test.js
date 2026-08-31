import {describe, it, expect} from 'vitest';
import {validateMove} from '/utils/validateMove.js';

describe('validateMove', () => {

    it ('should return invaldig if address is missing', () => {
            const moveForm = { address: '', zipCode: '12345', moveDate: '2024-07-01' };
            const result = validateMove(moveForm);
            expect(result).toStictEqual('Invalid address');
    })
})

// postnummer 5 siffror
// flyttdatum i framtiden
// flyttdatum format ÅÅÅÅÅ-MM-DD
// minst 14 dagar fram i tiden
// exakt 14 dagar okej, 13 inte okej