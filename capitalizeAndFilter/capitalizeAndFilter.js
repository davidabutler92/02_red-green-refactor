const capitalizeAndFilter = arr => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        const word = arr[i].toUpperCase();
        if(word[0] !== 'F')
        newArr.push(word);
    };
    return newArr;
};

module.exports = {
    capitalizeAndFilter
}
