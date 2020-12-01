const { capitalizeAndFilter } = require('./capitalizeAndFilter');

const arr = ['spot', 'rover', 'bingo', 'fred'];

describe('capitalizeAndFilter', () => {
    it('returns an array of strings to upperCase and removes words that start with F', () => {
        const newArr = capitalizeAndFilter(arr)
        expect(newArr).toEqual(['SPOT', 'ROVER', 'BINGO']);
    });
});