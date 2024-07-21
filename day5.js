// activity 1
function isEven(n){
  if(n%2===0){
    console.log(n + " is even")
  }
  else{
    console.log(n + " is odd")
  }
}
isEven(5);

function square(n){
  return (n*n)
}

console.log(square(6));

// Activity 2
function isMax(n1,n2){
  if (n1>n2) {
    console.log(n1 + " is max.")
  }else{
    console.log(n2 + " is max.")
  }
}
isMax(45, 8)

function concatenate(s1,s2){
  const result = s1 + " " + s2;
  return result
}

console.log(concatenate("Vyom","Pundhir"))

// Activity3
const Sum = (n1, n2) =>{
  return (n1+n2)
}
console.log(Sum(12,41))

const checkChar = (str, char) =>{
  for (let i = 0; i < str.length; i++) {
    if(str[i]===char){
      return true;
    }
  }
  return false;
}

console.log(checkChar("ABCDEFGHIJK", "F"))

// Activity 4 : Function parameters and default values

function productNumbers(a,b=1){
  console.log(a*b)
}
productNumbers(3,6)//product 18
productNumbers(5)//product 5 becoz b=1(default)

function greeting(name, age=1){
  console.log("Happy Birthday, " + name+ ". Today you have turned to " + age + " year(s).")
}

greeting("Vyom", 24)
greeting("Yash")

// Activity 5

function f1(f2,n){
  for (let i = 1; i <= n; i++) {
    f2();
  }
}

function f2(){
  console.log("Hello")
}

f1(f2,4)

function m1(n1,n2,a){
  return n2(n1(a));
}

function n1(x){
  return x*x
}

function n2(y){
  return y+y
}

console.log(m1(n1,n2,5)) //50