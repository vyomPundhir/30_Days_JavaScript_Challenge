// Activity 1 
// task 1 to task5
let num1 = 40;
let num2 = 30;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

// Activity 2
// Task 6,7
num1+=10;
console.log(num1)
num2-=10;
console.log(num2);

// Activity 3
// task 8 to 10
console.log(num1>num2);
console.log(num1<num2);
num1=20;
console.log(num1>=num2)
console.log(num1<=num2)
let num3= 40
let num4= '40'
console.log(num3==num4);// returns true
console.log(num3===num4);//returns false beacuse datatype is different.

// Activity 4
// task 11 to 13
const result1 = (num1>=num2) && (num3 > num4);
console.log("result1 is " + result1)
const result2 = (num1>=num2)||(num3>num4);
console.log("result2 is " + result2)
console.log("!result1 will give " + !result1 + " because result1 is false" ) //returns true because result1 is true

// Activity 5
// task 14
let x=37
let y=-23
const resultX= console.log((x>0)? "positive" : "negative")
const resultY=console.log((y>0)? "positive" : "negative")