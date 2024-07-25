let personName = "Vyom"
let personAge = 24
console.log(`Person's name is ${personName} and the person's age is ${personAge}`)

const multiLineMessage = `Hello! My name is ${personName}.
I am ${personAge} years old.
Nice to meet you.`

console.log(multiLineMessage)

const arr1= [1,2,3,4,5]
const [first,second] = arr1
console.log(first)
console.log(second)

const book1 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: "2000"
}

const {title,author} = book1
console.log(title);
console.log(author);

const {title : book1Title , author : book1Author}=book1;
console.log(book1Title); 
console.log(book1Author);

const arr2 = [...arr1, 6, 7, 8, 9 ];
console.log(arr2);

function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const result = sumAll(1, 2, 3, 4, 5); 
console.log(result);

function product(n1, n2=1){
  return (n1*n2);
}

console.log(product(2,6));
console.log(product(4));

// Using enhanced object literals to create object with methods and properties

const propertyName = 'dynamicProperty';
const value = 42;

const obj = {
    // Shorthand for property value assignment
    name: 'Enhanced Object',
    value,

    // Method definitions
    greet() {
        return `Hello, my name is ${this.name}!`;
    },

    // Computed property names
    [propertyName]: 'This is a dynamic property',

    // Concise method for properties
    sum(a, b) {
        return a + b;
    }
};

console.log(obj);
console.log(obj.value);
console.log(obj.greet()); 
console.log(obj.sum(5, 7));
console.log(obj[propertyName]);

const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const objA = {
    [key1]: 'Vyom',
    [key2]: 'Pundhir',
    [key3]: 24
};

console.log(objA);
