1.
function multiply(a, b) {
    console.log(a * b);
}

multiply(3, 4);
multiply(6, 5)


2.
function findMin(a, b, c) {
    let min = a
    if (b < min) min = b
    if (c < min) min = b

    console.log("min là:", `${min}`)
};

findMin(9, 6);
findMin(1, 2)