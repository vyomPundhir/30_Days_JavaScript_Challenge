let book1 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: "2000",
  method: function(){
    return(`Book's title is ${this.title} and author is ${this.author}`);
  }
}

console.log(book1);
function Print(b){
  console.log(`title is ${b.title} and author is ${b.author}`)
}

console.log(`title is ${book1.title} and author is ${book1.author}`)

Print(book1)

function update(b,y1){
  b.year=y1
  console.log(b);
}

update(book1, 1999)

let library= {
  name: "Indian Library",
  books: [
    {
      title: "book1",
      author: "a1"
    },
    {
      title: "book2",
      author: "a2"
    },
    {
      title: "book3",
      author: "a3"
    },
    {
      title: "book4",
      author: "a4"
    }
  ]
}

console.log(library);

console.log(library.name);


console.log(library.books.map((book) => {
  return(book.title);
}))

console.log(book1.method())

for (const key in book1) {
  if (book1.hasOwnProperty(key)) {
    console.log(`${key}: ${book1[key]}`)
  }
}

const keys = Object.keys(book1);
const values = Object.values(book1);

console.log(`Keys of book1 are ${keys} and Values are ${values}`)