//______________________MERN Feature+DSA Example____________________________
//feature:User Signup(dupicate check)

// let users = ["udaifa","ubaid","unaisa"];

// let newUser = "umaima";

// let exists = false;

// for(let i = 0; i < users.length; i++){
//     if(users[i] === newUser){
//         exists = true;
//         break;
//     }
// }

// console.log(exists ? "Username already exists" : "Valid user");




//________________________Reverse Recent Chat_________________________________
// let chats = ["hi", "hello", "how are you"];

// let reversed =[];

// for(let i = chats.length -1;i>=0;i--){
//     reversed.push(chats[i])
// }

// console.log(reversed)




//_______________________________Product List Traversal__________________________
// let products = ["phone","laptop","watch"];

// for (let i =0;i<products.length;i++){
//     console.log(products[i])
// }




//_____________________________Duplicate in Array_________________________________
//Set

// let arr = ["a","b","c","a"];

// let set = new Set();
// let duplicate = null;

// for(let i =0;i < arr.length; i++){
//     if(set.has(arr[i])){
//         duplicate = arr[i];
//         break;
//     }
//     set.add(arr[i]);
// }
// console.log("Duplicate:", duplicate);




//____________________________Duplicate_________________________
// let arr = ["a","b","c","a"];

// for(let i = 0;i < arr.length;i++){
//     for(let j = i + 1; j < arr.length;j++){
//         if(arr[i] === arr[j]){
//             console.log("Duplicate:",arr[i]);
//         }
//     }
// }





//_____________________________Reverse array_____________________________
//Method:Two Pointer

// let arr = [10,20,30,40];

// let left = 0;
// let right = arr.length -1;

// while(left < right){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;


//     left++;
//     right--;
// }

// console.log(arr)





//____________________________Reverse Array______________________________
// let arr = [100,90,80,70,60];

// let reversed = [];

// for(let i = arr.length-1;i>=0;i--){
//     reversed.push(arr[i])
// }
// console.log(reversed)