function getDivisors(value) {
    if (typeof value !== "number") {
        throw new Error("parameter type is not a Number");
    }
    if (value < 0) {
        throw new Error("parameter should be in the range of 1 to 7");
    }
    var resArr = [];
    for (let i = 1; i <= value; i++) {
        if (value % i === 0) {
            resArr.push(i);
        }
    }
    return resArr;
}

console.log(getDivisors(3));
console.log(getDivisors(66));
console.log(getDivisors(100));