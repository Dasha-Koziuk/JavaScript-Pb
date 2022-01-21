var arr = [1, 2, 3];

var recursive_function = function (array) {
    if (array.length > 0) {
        console.log(array[0]);
        recursive_function(array.slice(2))
    }
}

recursive_function(arr);