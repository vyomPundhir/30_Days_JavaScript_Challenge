// Activity 1
// task 1
let number=-43
if (number > 0) {
  console.log("Positive");
} else if(number<0){
  console.log("negative");
} else {
  console.log("zero");
}

// task 2
let age=16;
if(age>=18){
  console.log("The person can vote.");
}
else{
  console.log("the person cannot vote.");
}

// Activity 2

let a=32
let b=48
let c=23

if (a>b && a>c) {
  console.log(a + " is biggest");
} else if(b>a && b>c){
  console.log(b + " is Biggest");
} else{
  console.log(c + " is biggest");
}

// Activity 3: task 4, 5

let dayNumber = 6;
switch (dayNumber) {
  case 1:
    console.log("Monday")
    break;
  case 2:
    console.log("Tuesday")
    break;
  case 3:
    console.log("Wednesday")
    break;
  case 4:
    console.log("Thursday")
    break;
  case 5:
    console.log("Friday")
    break;
  case 6:
    console.log("Saturday")
    break;
  case 7:
    console.log("Sunday")
    break;
  default:
    console.log("Invalid Day Number.")
    break;
}

let score = 55
switch (true) //is bracket mai vaise toh varialble likhte hai but in case of comparison operators humko true likhna hota hai...
{
  case score>=91 && score<=100:
    console.log("A")
    break;
  case score>=81 && score<=90:
    console.log("B")
    break;
  case 71<=score && score<=80:
    console.log("C")
    break;
  case 61<=score && score<=70:
    console.log("D")
    break;
  default:
    console.log("F")
    break;
}

// Activity4

let num1= 42
console.log((num1%2==0)? (num1 + " is Even.") : (num1 + " is Odd."))

// Activity 5

let year = 1600

if(year%4===0){
  if(year%100===0){
    if(year%400===0){
      console.log(year + " is leap year.")
    }else{
      console.log(year + " is not Leap Year.");
    }
  }else{
    console.log(year + " is leap year")
  }
}else{
  console.log(year + " is not leap year.")
}