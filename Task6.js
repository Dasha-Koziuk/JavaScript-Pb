function isEven(value) {
    if (typeof value !== "number") {
        throw new Error("parameter type is not a Number");
    }
    if (value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log (isEven(3));
console.log (isEven(4));
console.log (isEven('Content'));