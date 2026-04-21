//____________________________Find largest number____________________________
// let arr =[ 6,8,4,3];

// let max = arr[0];

// for(let i =1;i<arr.length;i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)




//____________________________Find smallest number__________________________
// let arr = [8,5,3,6];

// let min = arr[0];

// for(let i = 1;i<arr.length;i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(min)





//___________________________Linear Search______________________________
// let arr = [10,20,30,40,50];

// let target = 40;

// for(let i = 0;i<arr.length;i++){
//     if(arr[i] === target){
//         console.log("index",i)
//     }
// }




//_______________________________Reverse Array____________________
// let arr = [1,2,3,4,5,6];

// let reversed = [];

// for(let i = arr.length-1;i>=0;i--){
//     reversed.push(arr[i])
// }
// console.log(reversed)




//______________________________Duplicate Check_____________________________
// let arr = [1,2,3,2,4];

// for(let i =0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] === arr[j]){
//             console.log("Duplicate:",arr[i])
//         }
//     }
// }




//__________________________Factorial__________________________
//fact(4)

// function fact(n){
//     if ( n === 1) return 1;

//     return n * fact(n-1);
// }
// console.log(fact(4))




//____________________________Count Even numbers_________________________
// let arr = [1,2,3,4,5,6]

// let count = 0;

// for(let i = 0;i<arr.length;i++){
//     if(arr[i] % 2 === 0){
//         count++;
//     }
// }
// console.log(count);




//_______________________Sum of Array______________________________
// let arr = [1,2,3,4,5];

// let sum = 0;

// for(let i = 0;i<arr.length;i++){
//     sum +=arr[i];
// }

// console.log(sum);




//_____________________________Find Last element______________________________
// let arr = [4,3,8,3,9];
// console.log(arr[arr.length-1]);




//______________________________Duplicate____________________________
// let arr = [3, 7, 2, 7, 5];

// for(let i = 0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] === arr[j]){
//             console.log("Duplicate:",arr[i]);
//         }
//     }
// }





//_______________________Largest______________________
// let arr = [3,7,2,7,5];

// let max = arr[0];

// for(let i = 0;i<arr.length;i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)




//____________________________Reverse_____________________________
let arr = [3,7,2,7,5];

let reversed = [];

for(let i =arr.length-1;i>=0;i--){
    reversed.push(arr[i]);
}
console.log(reversed)