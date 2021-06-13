'use strict';

let challenge = require('../array-sort');
describe('Sort an array', () => {
    it('It should sort the array', () => {
        console.log(challenge([20,18,12,8,5,-2]));
        expect(challenge([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42])
        expect(challenge([20,18,12,8,5,-2])).toEqual([-2, 5, 8, 12, 18, 20])
        expect(challenge([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12])
        expect(challenge([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13])
    })
})