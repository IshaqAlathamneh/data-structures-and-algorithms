'use strict';

let challenge = require('../array-binary-search');
describe('find the index?', () => {
    it('if the value is in the array', () => {
        
        expect(challenge([4,8,15,16,23,42], 15)).toEqual(2)
    })
    it('if the value not in the array', () => {
        
        expect(challenge([1, 2, 3, 5, 6, 7], 4)).toEqual(-1)
        expect(challenge([11,22,33,44,55,66,77], 90)).toEqual(-1)
    })
})