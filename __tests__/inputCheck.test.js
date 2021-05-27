const { test, expect } = require('@jest/globals');
const inputCheck = require('../utils/inputCheck');

test('inputCheck() returns null when all properties exist', () => {
    const obj = { first_name: 'fiona', last_name: 'Brict', role_id: '1' };

    expect(inputCheck(obj, 'first_name', 'last_name', 'role_id')).toBe(null);
});

test('InputCheck() returns an object when a property is missing', () => {
    const obj = { first_name: 'fiona', last_name: 'Brict', role_id: '' };

    expect(inputCheck(obj, 'first_name', 'last_name', 'role_id')).toEqual(
        expect.objectContaining({
            error: expect.stringContaining('Need all entries specified')
        })
    );
});