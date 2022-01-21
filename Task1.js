function f(value) {
    if (typeof value === "number") {
        console.log(value * value * value);
    } else {
        throw new Error('parameter type is not a Number!');
    }
}

f(4);
f('Hello');