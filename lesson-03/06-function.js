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
findMin(1, 2);


3.
const result = [];
let students = [
    { Name: "Như", Score: 8 },
    { Name: "Cơ", Score: 9 },
    { Name: "Hoàng", Score: 6.75 },
    { Name: "Châu", Score: 7.5 }
];
function getTopStudents(students, threshold) {
    for (let s = 0; s < students.length; s++) {
        if (students[s].Score > 7.25)
            result.push(students[s].Name)
    }
};
getTopStudents(students, 7.75);
console.log(result);

4.
function calculateInterest (principal,rate, years){
let total = principal + principal*rate*years/100;
return total
};
total = calculateInterest(100000000,6.5,8);
console.log(total);