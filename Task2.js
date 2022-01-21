function sum () {
    var sum = 0;
    for (item of arguments) {
        if (typeof item === "number") {
            sum += item;
        } else {
            throw new Error('all parameters type should be a Number');
        }
    }
    return sum;
}

console.log(sum(1,2,3,4));
console.log(sum(1,'s',3,4));