'use strict';

let challenge = require('../array-reverse');
describe('Reverse an array', () => {
    it('reverse the array?', () => {
        
        expect(challenge([1,2,4,5])).toEqual([5,4,2,1])
    })
})