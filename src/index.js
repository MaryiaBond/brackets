module.exports = function check(str, bracketsConfig) {
    let length = str.length / 2;
    let array = bracketsConfig.map(n => n = n[0] + n[1])
    for (let i = 1; i <= length; i++) {
        for (let j = 0; j <= array.length; j++) {
            str = str.replace(array[j], '');
        }
    }
    return str.length === 0 ? true : false;
};
