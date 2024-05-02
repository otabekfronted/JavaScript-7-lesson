"use strict";
// Array 1
// function getInitalOdds(n) {
//     let oddNumbers = [];
//     let k = 1;

//     for (let i = 1; i <= n; i++) {
//         if (i == 1) {
//             oddNumbers.push(i);
//         } else {
//             oddNumbers.push((k += 2));
//         }
//     }
//     return oddNumbers;
// }

// const result = getInitalOdds(5);
// console.log(result);

// Array 2
// function getEvenReverse() {
//     let arr = [4, 5, 7, 8, 6, 9, 50];
//     let ss = [];
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             ss.push(arr[i]);
//         }
//     }
//     for (let i = 0; i <= ss.length; i++) {}
//     console.log(ss.reverse());
// }
// getEvenReverse();

// Array 3
// function pushArray(a) {
//     let result = [];
//     for (let i = 0; i <= a.length - 1; i++) {
//         result.push(a[i]);
//         result.push(a[a.length - 1 - i]);
//     }
//     console.log(String(result));
// }

// let a = pushArray([4, 5, 7, 8, 6, 9]);

// Array 4

// function rangeSum(arr, k, l) {
//     if (k > l || l >= arr.length || k < 0) {
//         return "Noto'gri";
//     }

//     let sum = 0;
//     for (let i = k; i <= l; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let arr = [1, 6, 9, 5, 8, 10, 15];
// console.log(rangeSum(arr, 2, 6));

// Array 5

// function getSingleArr(arr) {
//     return [...new Set(arr)];
// }
// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// console.log(getSingleArr(arr));

// Array 6
// function arrMaxMin(arr) {
//     let engKatta = arr[0];
//     let engKichik = arr[0];
//     console.log(engKatta);
//     console.log(engKichik);
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] > engKatta) {
//             engKatta = arr[i];
//         } else if (arr[i] < engKichik) {
//             engKichik = arr[i];
//         }
//     }

//     console.log(`Max ${engKatta}`);
//     console.log(`Min ${engKichik}`);

//     let engKattaIndex = arr.indexOf(engKatta);
//     let engKichikIndex = arr.indexOf(engKichik);
//     // console.log(engKattaIndex);
//     // console.log(engKichikIndex);
//     arr[engKattaIndex] = engKichik;
//     arr[engKichikIndex] = engKatta;
//     console.log(arr);
// }

// let arr = [7, 4, 9, 2, 3, 1, 5];
// arrMaxMin(arr);

// Array 7
// function pushArray(a) {
//     if (a.length <= 1) return a;
//     let temp = a[0];
//     for (let i = 0; i <= a.length - 1; i++) {
//         a[i] = a[i + 1];
//     }
//     a[a.length - 1] = temp;
//     return a;
// }

// let a = [1, 5, 8, 9, 10];
// console.log(pushArray(a));
