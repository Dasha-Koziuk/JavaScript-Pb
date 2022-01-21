function f(val1, val2, val3) {
    if (typeof val1 !== "number" || typeof val2 !== "number" || typeof val3 !== "number") {
        throw new Error('all parameters type should be a Number');
    }
    return (val1 - val2) / val3;
}


console.log(f(6, 2, 3));
console.log(f(6, 's', 3));