// // 1.
// let sum = 0
// for (let i = 1; i<=100; i++){
//     sum = sum + i

// }
// console.log(sum);


// // 2.
// const bangcuuchuong = []
// {
// for (let i = 2; i <= 9; i++ )
// for (let j = 1; j <= 10; j++ ){
//  let result = `${i}*${j} = ${i*j}`
//     bangcuuchuong.push(result)
// }
// }
// console.log("bảng cửu chương:", bangcuuchuong);


// // 3.
// let arr = []
// for (let i = 1; i <= 99; i += 2) {
//     arr.push(i)
// }
// console.log(arr);

// // 4. 
// const email = []
// for (let i = 1; i <=10; i++){
//     email.push(`user${i}@example.com`)
// };
// console.log(email);


5.
let sum = 0
const detail = [
{ month: 1, total: 100},
{ month: 2, total: 150},
{ month: 3, total: 140},
{ month: 4, total: 160},
{ month: 5, total: 150},
{ month: 6, total: 100},
{ month: 7, total: 100}
];
for (let i = 0; i < detail.length; i++){
//revenue.push(detail[i]).total
sum = sum + detail[i].total}
console.log("tong doanh thu:", sum);

 