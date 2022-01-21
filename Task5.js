var arr = [1, 2, -4, 3, -9, -1, 7];

function changeArr(array) {
    var positiveArr = [];
    for (let i = 0; i < array.length; i++) {
        if (isPositive(array[i])) {
            positiveArr.push(array[i]);
        }
    }
    return positiveArr;
}

function isPositive(value) {
    if (typeof value !== "number") {
        throw new Error("parameter type is not a Number");
    }
    if (value > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(changeArr(arr));