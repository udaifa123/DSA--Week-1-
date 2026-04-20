//_______________________Reverse Array_______________________
//_______________________Method 1:New Array___________________________
// let arr = [1,2,3,4];
// let reversed = [];

// for(let i = arr.length -1; i>=0;i--){
//     reversed.push(arr[i]);
// }
// console.log(reversed);



//__________________Swap Logic_______________________
// let a = 5;
// let b = 10;

// let temp = a;
// a = b;
// b = temp;




//________________________Two Pointer(Reverse in-place)__________________________
// let arr = [1,2,3,4];
// let left = 0;
// let right = arr.length - 1;

// while(left < right){
//     let temp = arr [left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
// }

// console.log(arr)



//____________________Duplicate check- Method 1 (Brute Force)_________________________
// let arr = [1,2,3,2];

// for (let i = 0;i<arr.length;i++){
//     for (let j = i + 1;j < arr.length;j++){
//         if(arr[i] === arr[j]){
//             console.log("Duplicate found");
//         }
//     }
// }




//_______________________Dupicate Check -Method 2(Set - Optimized)_______________________
// let arr = [1,2,3,2];

// let set = new Set(arr);

// if(set.size !==arr.length){
//     console.log("Duplicate found");
// }





//_________________________🎯1.Reverse Array(without.reverse())____________________________
//🟢_________________________Using Two Pointer(Best method)____________________
// let arr =[5,3,8,1];

// let left = 0;
// let right = arr.length -1;

// while(left < right){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;


//     left++;
//     right--;
// }

// console.log(arr);



//2._________________________Duplicate Check__________________________
//🟢____________________Method 1:Set(BEST)_______________________________
// let arr = [1,4,6,4,2];

// let set = new Set();
// let duplicate = false;

// for(let i=0;i<arr.length;i++){
//     if(set.has(arr[i])){
//         duplicate=true;
//         break;
//     }
//     set.add(arr[i]);
// }
// console.log(duplicate ? "Duplicate found ": "No duplicate" );




//🟡____________________________Method 2:Brute Force__________________________
let arr = [1,4,6,4,2];

let found = false;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] === arr[j]){
            found = true;
        }
    }
}

console.log(found ? "Duplicate found":"No Duplicate");