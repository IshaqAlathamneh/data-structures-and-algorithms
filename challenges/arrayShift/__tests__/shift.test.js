'use strict';

let challenge = require('../array-shift');
describe('Shift an array', () => {
    it('shifted the array?', () => {
        let a = [1,2,4,5]
        let b = 3;
        expect(challenge(a,b)).toEqual([1,2,3,4,5])
    })
})