import {it, expect} from 'vitest';
// import {} from './format';
import {invoiceAmount} from '/utils/format.js';

it('should format the invoice amount with kr', () => { 
    const amount = 1200;
    const result = invoiceAmount(amount);
    expect(result).toBe('1 200 kr');
})

// invoice.amount
// kr