'usr strict';

const bracValidate = require('../multi-bracket-validation');

describe('Brackets Validation', ()=> {
    
    it('Validate if the brackets are balanced', ()=> {
        
        expect(bracValidate('()[[Extra Characters]]')).toEqual(true);
        expect(bracValidate('{}{Code}[Fellows](())')).toEqual(true);
        expect(bracValidate('(](')).toEqual(false);
        expect(bracValidate('{(})')).toEqual(false);
    });
})