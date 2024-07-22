let arr1= [1,2,3,4,5]
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[4])

arr1.push("VyomPundhir")//adds the element at the end of the array.
console.log(arr1);
console.log(arr1.pop());//returns the removed element of the array.
console.log(arr1);//returns the changed array after applying the pop method.
console.log(arr1.shift()) //returns the removed element this is the first element
console.log(arr1)//returns the changed array after applying the shift method

console.log(arr1.unshift(1)); // it returns the new array's length.
console.log(arr1)
const newArray=arr1.map((val)=>(2*val))
console.log(newArray);
const evenArr = arr1.filter(isEven)

function isEven(n){
  if(n%2===0){
    return true
  }else{
    return false
  }
}

console.log(evenArr);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15

// For loop
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// ForEach
arr1.forEach(element => {
  console.log(element)
});

// 2D array

let arr2= [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(arr2);

console.log(arr2[2][2])