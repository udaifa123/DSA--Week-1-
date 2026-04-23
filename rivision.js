//_________________________Find largest number______________________________
// let arr=[4,2,7,4,8,3,1]
// let max=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>max)
//   max=arr[i]
// }
// console.log(max)




//_________________________________Find smallest number______________________________
// let arr=[5,3,6,8,9]
// let min=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]<min)
//   min=arr[i]
// }
// console.log(min)




//_________________________Reverse______________________
// let arr=[1,2,3,4,5]
// let reverse=[]
// for(let i=arr.length-1;i>=0;i--){
//   reverse.push(arr[i])
// }
// console.log(reverse)




//_________________________________reverse array(Two pointer)________________________
// let arr=[1,2,3,4];
// let left=0;
// let right=arr.length-1;

// while(left<right){
//   let temp=arr[left]
//   arr[left]=arr[right]
//   arr[right]=temp
  
//   left++
//   right--
// }
// console.log(arr)




//__________________________Duplicte__________________________________
// let arr=[1,2,1,3,4]
// let result=[...new Set(arr)]
// console.log(result)




//__________________________Find Duplicate(Set)__________________________________
// let arr=[1,2,1,3,4,5]
// let set=new Set(arr)
// console.log(set.size !==arr.length)





//______________________________frequency count_________________________________
// let arr=["a","b","c","a","b","d"]
// let freq={}
// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }
// console.log(freq)




//________________________________Linear Search__________________________
// let arr=[10,20,30]
// let target=20;

// let found=false;

// for(let i=0;i<arr.length;i++){
//   if(arr[i]===target){
//     found=true;
//     break;
//   }
// }
// console.log(found)





//__________________________Non Repeating Element________________________________
// let arr=[1,2,1,3,4,4]
// let freq={}

// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }

// for(let x of arr){
//   if(freq[x]===1){
//     console.log(x)
//     break
//   }
// }




//________________________first repeating Element________________________________
// let arr=[1,2,3,1,4]
// let freq={}

// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }

// for(let x of arr){
//   if(freq[x]>1){
//     console.log(x)
//     break
//   }
// }





//________________________________Factorial(Recrusion)___________________________
// function fact(n){
//   if(n===1) return 1;
//   return n*fact(n-1)
// }
// console.log(fact(5))




//______________________________Print 1 to n (recursion)______________________
// function print(n){
//   if(n===0) return
  
//   print(n-1)
//   console.log(n)
// }
// print(5)




//____________________________print n to 1__________________________
// function print(n){
//   if(n===0) return
  
//   console.log(n)
//   print(n-1)
// }
// print(5)





//____________________________Sum of Array________________________
// let arr=[1,2,3,4,5]
// let sum=0;
// for(let i=0;i<arr.length;i++){
//   sum+=arr[i]
// }
// console.log(sum)





//_____________________brute force(duplicate)_______________________________
// let arr=[1,2,1,3,4,5]
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       console.log("duplicate:",arr[i])
//     }
//   }
// }





//___________________________brute force first repeating_________________________
// let arr=[1,2,3,4,2,5,3]
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       console.log(arr[i])
//       break
//     }
//   }
// }




// let a=5
// let b=10

// let temp=a;
// a=b;
// b=temp;

// console.log(a,b)





// let products=["headset","phone","laptop"]
// for(let i=0;i<products.length;i++){
//   console.log(products[i])
// }




// let chats=["hi","hello","bye"]
// let reverse=[]
// for(let i=chats.length-1;i>=0;i--){
//   reverse.push(chats[i])
// }
// console.log(reverse)





// let arr=[1,2,3,4,5]
// let left=0;
// let right=arr.length-1;


// while(left<right){
//   let temp=arr[left]
//   arr[left]=arr[right]
//   arr[right]=temp
  
  
//   left++
//   right--
// }
// console.log(arr)



// for(let i=1;i<=5;i++){
//   console.log(i)
// }



// for(let i=5;i>=1;i--){
//   console.log(i)
// }




// let n=10;
// for(let i=1;i<=n;i++){
//   console.log(i)
// }





// let arr=[1,2,3,4,5,2,4,5,4]
// let count=0;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]==4){
//     count++
//   }
// }
// console.log(count)





// let arr=[1,2,3,2,4,5,2]
// let num=[]
// for(let i=0;i<arr.length;i++){
//   if(!num.includes(arr[i])){
//     num.push(arr[i])
//   }
// }
// console.log(num)





// let arr=[1,2,3,4,5,6]
// let result=arr.includes(5)
// console.log(result)




// let arr=[1,2,3,4,5,6]
// console.log(arr.reduce((a,b)=>a+b))





// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2===0){
//     console.log(arr[i])
//   }
// }





// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2!==0){
//     console.log(arr[i])
//   }
// }





// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2===0){
//     console.log(arr[i]+=2)
//   }
// }






// let str="udaifa"
// let result=str.split("").reverse().join("")
// console.log(result)




// let arr=[1,2,3,4,5]
// let map=arr.map(n=>n*2)
// let filter=arr.filter(n=>n%2==0)
// let reduce=arr.reduce((a,b)=>a+b)
// console.log(map)
// console.log(filter)
// console.log(reduce)




// let arr=[4,2,5,8,9,7]
// let max=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>max)
//   max=arr[i]
// }
// console.log(max)





// let arr=[1,2,3,4,5]
// let reverse=[]
// for(let i=arr.length-1;i>=0;i--){
//   reverse.push(arr[i])
// }
// console.log(reverse)





// let arr=[1,2,3,4,5]
// let left=0;
// let right=arr.length-1;

// while(left<right){
//   let temp=arr[left]
//   arr[left]=arr[right]
//   arr[right]=temp
  
//   left++
//   right--
// }
// console.log(arr)





// let arr=[1,2,3,2,4,5]
// let result=[...new Set(arr)]
// console.log(result)




// let arr=[1,2,1,3,2,4,5]
// let set=new Set(arr)
// console.log(set.size !=arr.length)





// let arr=["a","b","c","a","d","b"]
// let freq={}
// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }
// console.log(freq)




// let arr=[10,20,30]
// let target=20;

// let found=false;

// for(let i=0;i<arr.length;i++){
//   if(arr[i]===target){
//     found=true
//     break
//   }
// }
// console.log(found)




// let arr=[1,2,3,2,1,4]
// let freq={}
// for(let x of arr){
//   freq[x]=(freq[x] ||0)+1
// }

// for(let x of arr){
//   if(freq[x]===1){
//     console.log(x)
//     break
//   }
// }



// let arr=[1,2,3,1,2,4,5,6]
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       console.log("duplicate:",arr[i])
//     }
//   }
// }



// let arr = [1,2,1,3,4,5];

// let seen = new Set();
// let duplicate = new Set();

// for(let x of arr){
//     if(seen.has(x)){
//         duplicate.add(x);
//     } else {
//         seen.add(x);
//     }
// }

// console.log([...duplicate]); 



//🟢__________________________Single loop count______________________________
// let n = 5;
// for(let i =0;i<n;i++){
//   console.log(i)
// }

//runs 5 times ->O(n)




//🟢_________________________Nested Loop_________________________________
// let n = 5;

// for(let i = 0;i<n;i++){
//   for(let j = 0;j<n;j++){
//     console.log(i,j)
//   }
// }

//runs 25 times ->O(n2)




//🟢________________________________Largest_____________________________________
// let arr = [7,4,3,8,2,9];

// let max = arr [0];

// for(let i = 0;i<arr.length;i++){
//   if(arr[i]>max){
//     max = arr[i]
//   }
// }
// console.log(max)





//____________________________________Smallest_______________________________
// let arr =[6,9,4,8,5]

// let min = arr[0];

// for(let i =0;i<arr.length;i++){
//   if(arr[i]<min){
//     min = arr[i]
//   }
// }
// console.log(min)






//_____________________________Sum_________________________________
// let arr = [1,2,3,4,5]

// let sum = 0;

// for(let i =0;i<arr.length;i++){
//   sum+=arr[i]
// }
// console.log(sum)





//___________________________________Reverse_________________________________
// let arr = [8,7,6,5,4,3]

// let reverse = [];

// for(let i =arr.length-1;i>=0;i--){
//   reverse.push(arr[i])
// }
// console.log(reverse)





//____________________________Duplicate(Brute)______________________________
// let arr = ["s","u","t","s","r"]

// for(let i =0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       console.log("Duplicate:",arr[i])
//     }
//   }
// }




//_____________________________________Duplicate(Set)__________________________
// let arr =["a","g","t","a","k"]

// let set = new Set(arr)

// console.log(set.size !==arr.length)




//_______________________Duplicate(Find unique values only)______________________________
// let arr = [1,2,3,4,3,5]

// let set=new Set(arr)

// console.log(set)




//___________________________________Swap___________________________________
// let a=5;
// let b=10;

// let temp=a;
// a=b;
// b=temp;

// console.log(a,b)





//______________________________Recursion(print 1 to n)____________________________
// function print(n){
//   if(n===0)return;
  
//   print(n-1)
//   console.log(n)
// }
// print(5)




//___________________________print n to 1______________________________
// function print(n){
//   if(n===0)return;
  
//   console.log(n)
//   print(n-1)
// }
// print(5)





//_______________________________________Factorial______________________________
// function fact(n){
//   if(n===1)return 1;
  
//   return n*fact(n-1)
// }
// console.log(fact(5))





//_______________________________Product Traversal________________________________
// let products=["pen","pencil","book","bag"]
// for(let i=0;i<products.length;i++){
//   console.log(products[i])
// }






//______________________________Reverse Chat__________________________________
// let chats=["hi","hello","bye"]
// let reverse=[];
// for(let i=chats.length-1;i>=0;i--){
//   reverse.push(chats[i])
// }
// console.log(reverse)






//___________________________max+reverse_________________________
// let arr=[8,7,6,5,4]

// let max=arr[0]
// for(let i=1;i<arr.length;i++){
//   if(arr[i]>max){
//     max=arr[i]
//   }
// }

// let rev=[]
// for(let i=arr.length-1;i>=0;i--){
//   rev.push(arr[i])
// }

// console.log(max)
// console.log(rev)




//___________________________________Reverse_________________________________
// let arr=[1,2,3,4,5]
// let left=0;
// let right=arr.length-1;

// while(left<right){
//   let temp=arr[left]
//   arr[left]=arr[right]
//   arr[right]=temp;
  
//   left++;
//   right--
// }
// console.log(arr)




// for(let i=1;i<=5;i++){
//   console.log(i)
// }



// for(let i=5;i>=1;i--){
//   console.log(i)
// }



// let n=10;
// for(let i=0;i<n;i++){
//   console.log(i)
// }





// let arr=[1,2,3,4,5,6,4,7,4]
// let count=0;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]==4){
//     count++;
//   }
// }
// console.log(count)




// let arr=[1,2,2,3,4,5,2]
// let result=[...new Set(arr)]
// console.log(result)





// let arr=[1,2,1,3,4,1,4,5]
// let num=[]
// for(let i=0;i<arr.length;i++){
//   if(!num.includes(arr[i])){
//     num.push(arr[i])
//   }
// }
// console.log(num)





// let arr=[1,2,3,4,5]
// let reverse=[]
// for(let i=arr.length-1;i>=0;i--){
//   reverse.push(arr[i])
// }
// console.log(reverse)





// let arr=[1,2,3,4,5,6]
// let result=arr.includes(5)
// console.log(result)




// let arr=[1,2,3,4,5]
// console.log(arr.reduce((a,b)=>a+b,0))




// let arr=[1,2,3,4]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//     console.log(arr[i])
//   }
// }



// let arr=[1,2,3,4]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2!==0){
//     console.log(arr[i])
//   }
// }




// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2===0){
//     console.log(arr[i]+=2)
//   }
// }



// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2!==0){
//     console.log(arr[i]+=1)
//   }
// }






// let arr=[1,2,3,4,5,6]
// let even=[]
// let odd=[]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2===0){
//     even.push(arr[i])
//   }else{
//     odd.push(arr[i])
//   }
// }
// console.log(even)
// console.log(odd)





// let arr=[1,2,1,3,2,4,5,6]
// let odd=[]
// let result=[...new Set(arr)]
// console.log(result)


// result.sort((a,b)=>b-a)
// console.log(result)


// for(let i=0;i<result.length;i++){
//   if(result[i]%2!==0){
//     odd.push(result[i])
//   }
// }
// console.log(odd)




// let str="udaifa"
// let result=str.split("").reverse().join("")
// console.log(result)




// let arr=[1,2,3,4,5]
// let map=arr.map(n=>n*2)
// let filter=arr.filter(n=>n%2===0)
// let reduce=arr.reduce((a,b)=>a+b)
// console.log(map)
// console.log(filter)
// console.log(reduce)




// let str="html"
// let reverse=""
// for(let i=str.length-1;i>=0;i--){
//   reverse+=str[i]
// }
// console.log(reverse)



// let arr=[1,2,3,"",false,4,5]
// let result=arr.filter(Boolean)
// console.log(result)



// let word="udaifa"
// console.log(word.toUpperCase())




// let arr=["one","two","three"]
// let upper=arr.map(item=>item.toUpperCase())
// console.log(upper)




// let arr=[6,4,7,3,9,3]
// let max=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>max)
//   max=arr[i]
// }
// console.log(max)



// let arr=[3,5,6,2,7]
// let min=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]<min)
//   min=arr[i]
// }
// console.log(min)






// let arr=[3,5,7,8,2]
// let max=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>max)
//   max=arr[i]
// }
// console.log(max)




// let arr=[6,4,2,7,9]
// let min=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]<min)
//   min=arr[i]
// }
// console.log(min)




// let arr=[1,2,3,4,5]
// let reverse=[]
// for(let i=arr.length-1;i>=0;i--){
//   reverse.push(arr[i])
// }
// console.log(reverse)




// let arr=[1,2,3,4,5]
// let left=0;
// let right=arr.length-1;

// while(left<right){
//   let temp=arr[left]
//   arr[left]=arr[right]
//   arr[right]=temp
  
//   left++
//   right--
// }
// console.log(arr)





// let arr=[1,2,1,3,4,1,4,5]
// let result=[...new Set(arr)]
// console.log(result)




// let arr=[1,2,1,3,4,5]
// let set=new Set(arr)
// console.log(set.size !==arr.length)





// let arr=["a","b","c","a","c","d","b"]
// let freq={}
// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }
// console.log(freq)





// let arr=[10,20,30]
// let target=10;

// let found=false;

// for(let i=0;i<arr.length;i++){
//   if(arr[i]===target){
//     found=true
//     break
//   }
// }
// console.log(found)




// let arr=[1,2,3,4,1,3,4]
// let freq={}

// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }

// for(let x of arr){
//   if(freq[x]===1){
//     console.log(x)
//     break
//   }
// }




// let arr=[1,2,3,4,3,5]
// let freq={}

// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }

// for(let x of arr){
//   if(freq[x]>1){
//     console.log(x)
//     break
//   }
// }





// let arr=[2,3,5,7,8]
// let max=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>max)
//   max=arr[i]
// }
// console.log(max)





// let arr=[6,3,2,9,4]
// let min=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]<min)
//   min=arr[i]
// }
// console.log(min)




// let arr=[1,2,3,4,5]
// let reverse=[]
// for(let i=arr.length-1;i>=0;i--){
//   reverse.push(arr[i])
// }
// console.log(reverse)




// let arr=[1,2,3,4,5]
// let left=0;
// let right=arr.length-1

// while(left<right){
//   let temp=arr[left]
//   arr[left]=arr[right]
//   arr[right]=temp
  
//   left++
//   right--
// }
// console.log(arr)





// let arr=[1,2,1,3,4,2]
// let result=[...new Set(arr)]
// console.log(result)



// let arr=[1,2,1,3,4,5]
// let set=new Set(arr)
// console.log(set.size !==arr.length)




// let arr=["a","b","c","a","b","c","d"]
// let freq={}
// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }
// console.log(freq)





// let arr=[10,20,30]
// let target=30

// let found=false

// for(let i=0;i<arr.length;i++){
//   if(arr[i]===target){
//     found=true
//     break
//   }
// }
// console.log(found)





// let arr=[1,2,1,3,1]
// let freq={}
// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }

// for(let x of arr){
//   if(freq[x]===1){
//     console.log(x)
//     break
//   }
// }





// let arr=[1,2,3,4,1,2]
// let freq={}
// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }


// for(let x of arr){
//   if(freq[x]>1){
//     console.log(x)
//     break
//   }
// }




// function fact(n){
//   if(n===1) return 1;
//   return n* fact(n-1)
// }
// console.log(fact(5))




// function  print(n){
//   if(n===0) return;
  
//   print(n-1)
//   console.log(n)
// }
// print(5)




// function print(n){
//   if(n===0) return;
  
//   console.log(n)
//   print(n-1)
// }
// print(5)





// let arr=[1,2,3,4,5,6]
// let sum=0;
// for(let i=0;i<arr.length;i++){
//   sum+=arr[i]
// }
// console.log(sum)




// let arr=[1,2,3,4,2,5]
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       console.log("duplicate:",arr[i])
//     }
//   }
// }




// let arr=[1,2,3,4,5,3,5]
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       console.log(arr[i])
//       break
//     }
//   }
// }




// let arr=[1,2,3,4,5]
// let left=0;
// let right=arr.length-1;

// while(left<right){
//   let temp=arr[left]
//   arr[left]=arr[right]
//   arr[right]=temp
  
//   left++
//   right--
// }
// console.log(arr)




// let arr=["a","b","c","a","b"]
// let freq={}
// for(let x of arr){
//   freq[x]=(freq[x] || 0)+1
// }

// for(let x of arr){
//   if(freq[x]>1){
//     console.log(x)
//     break
//   }
// }



// let arr=[10,20,30]
// let target=30;

// let found=false;

// for(let i=0;i<arr.length;i++){
//   if(arr[i]===target){
//     found=true;
//     break
//   }
// }
// console.log(found)






// let arr=[11,12,13,14]
// let left=0;
// let right=arr.length-1;

// while(left<right){
//   let temp=arr[left]
//   arr[left]=arr[right]
//   arr[right]=temp
  
  
//   left++
//   right--
// }
// console.log(arr)





// let arr=[1,2,1,3,4,5]
// let result=[...new Set(arr)]
// console.log(result)




// let arr=[1,2,2,4,5]
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       console.log("duplicate:",arr[i])
//     }
//   }
// }






let arr = [1,2,1,3,4,5];

let seen = new Set();
let duplicate = new Set();

for(let x of arr){
    if(seen.has(x)){
        duplicate.add(x);
    } else {
        seen.add(x);
    }
}

console.log([...duplicate]); 


















































































