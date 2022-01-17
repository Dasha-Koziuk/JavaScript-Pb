function doSmth() {
    var num = 0;
    var n = 1000;

    while (n > 50) {
        n /= 2;
        num++;
    }

    console.log("Число: " + n);
    console.log("Количество: " + num);
}

doSmth();