function f(val) {
    if (typeof val !== "number") {
        throw new Error("parameter type is not a Number");
    }
    if (val > 7 && val < 1) {
        throw new Error("parameter should be in the range of 1 to 7");
    }
    return (val == 1) ? "Воскресенье" : (val == 2) ? "Понедельник" : (val == 3) ? "Вторник" : (val == 4) ? "Среда" : (val == 5) ? "Четвер" : (val == 6) ? "Пятница" : "Суббота";
}
console.log(f(1));
console.log(f('s'));