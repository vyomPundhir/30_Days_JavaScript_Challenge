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
console.log(title)
console.log(author)

const {title : book1Title , author : book1Author}=book1
console.log(book1Title) 
console.log(book1Author)