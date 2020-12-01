const upperCase = arr => {
    return arr.map(word => word.toUpperCase())
};

const capitalizeAndFilter = arr => {
    const newArr = upperCase(arr);
    return newArr.filter(word => word[0] !== 'F')
};

module.exports = {
    capitalizeAndFilter
}