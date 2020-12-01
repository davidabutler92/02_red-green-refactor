const { copyAndPush } = require('./copyAndPush');

const number = [1, 2, 3];

describe('copyName', () => {
    it('returns a new array with all the items in the original array and new item pushed to the end', () => {
        const newArr = copyAndPush(number, 4)
        expect(newArr)
        .toEqual([1, 2, 3, 4]);
    });
});
