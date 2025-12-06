// 1.
// function multiply(a, b) {
//     console.log(a * b);
// }

// multiply(3, 4);
// multiply(6, 5)


// 2.
// function findMin(a, b, c) {
//     let min = a
//     if (b < min) min = b
//     if (c < min) min = c

//     console.log("min là:", `${min}`)
// };

// findMin(9, 6, 5);
// findMin(1, 2, 0);


// 3.
// let students = [
//     { Name: "Như", Score: 8 },
//     { Name: "Cơ", Score: 9 },
//     { Name: "Hoàng", Score: 6.75 },
//     { Name: "Châu", Score: 7.5 }
// ];

// function getTopStudents(students, threshold) {
//     const result = [];
//     for (let s = 0; s < students.length; s++) {
//         if (students[s].Score > threshold)
//             result.push(students[s].Name)
//     }
//     return result;
// };
// console.log(getTopStudents(students, 7.25))



4.
function calculateInterest (principal,rate, years){
let total = principal + principal*rate*years/100;
return total
};
console.log(calculateInterest(100000000,6.5,8));
