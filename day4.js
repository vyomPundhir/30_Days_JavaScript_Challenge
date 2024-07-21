// activity1
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

for (let i = 1; i <= 10; i++) {
  console.log("5 X " + i + " = " + 5*i);
}

// activity 2
let j=1
let sum= 0
while (j<=10) {
  sum= sum + j;
  j++
}
console.log(sum);

let k=10
while(k>=1){
  console.log(k)
  k--
}

// activity 3
let index=1
do {
  console.log(index)
  index++
} while (index<=5);

// factorial code..
let num3= 5
let index2=1
let product=1
do {
  product=product*index2
  index2++
} while (index2<=num3);

console.log(product);

// activity 4
for (let i = 1; i <= 5; i++) {
  let pattern = ""
  for (let j = 1; j <= i; j++) {
    pattern= pattern+"*"
  }
  console.log(pattern)
}

// activity 5
for (let i = 1; i <= 10; i++) {
  if(i===5) continue;
  console.log(i)
}

for (let i = 1; i <= 10; i++) {
  if(i===7) break;
  console.log(i)
}
