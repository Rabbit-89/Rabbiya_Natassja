import {it, describe, expect} from 'vitest';
import {firstName} from '/utils/user.js';

it('should return the first name from a full name', () => {
    const fullName = 'Anna Andersson';
    const result = firstName(fullName);
    expect(result).toBe('Anna');
})
