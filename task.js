// Task 1.1 — Spot the Difference

let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

console.log(str.length);
console.log(arr.length);

console.log(str[0]);
console.log(arr[0]);

// It will get an error, because the string is immutable, it cann't change
// str.push("!");
// console.log(str);


// Task 1.2 — Convert Between Them
const strJs = "JavaScript";
const cat = ['c', 'a', 't'];

// const convertArr=[];

// Basic way to convert str to array 
// for(const i of strJs){
//     convertArr.push(i);
// }

// Builtin function 
// const convertArr = Array.from(strJs);
const convertArr = strJs.split("");

console.log(convertArr);

console.log("\nArray part");
const makeStr = cat.join('');
// const makeStr = cat.toString();


console.log(makeStr);


// Task 2.1 — Case Conversion
let name = "JavaScript";
console.log(`To uppercase - ${name.toUpperCase()}`);
console.log(`To uppercase - ${name.toLowerCase()}`);

let strTrim = "   hi there   ";
console.log(strTrim.trim());



// Task 3.1 — Slicing Strings
let sentence = "Learning JavaScript is fun!";
console.log(sentence.slice(0, 8));
console.log(sentence.slice(-4));

// Task 3.2 — Combine Strings

const hello = "Hello";
const world = "World!";

console.log(hello + ' ' + world);
console.log(`${hello} ${world}`);
console.log(hello.concat(" ", world));


// Task 4.1 — Three Reversal Methods
// this method is fastest way, because it's not iterate manually, less operation
function reverseString(str) {
    const arr = str.split("");   // string → array
    const rev = arr.reverse();   // array reverse
    const result = rev.join(""); // array → string
    return result;
}
console.log(reverseString("JavaScript"));

console.log("\nAlternate way");
let revName = [];
for (let i = name.length; i >= 0; i--) {
    revName.push(name[i]);
}
console.log(revName.join(""));


// Task 5.1 — Build a Profile Object
const student = {
    name: "Kamal",
    age: 32,
    grade: "A-",
    isEnrolled: true
};

console.log(student);
console.log("Name of the student -", student.name);
// console.log("Name of the student -", student["name"]);


// Task 5.2 — Watch the Video Concept
// If I am talking about my laptop specs through object, it has some key and value, eg- display-ips panel, body-metal, ram=16gb, isSsdAvailable=true, batteryHealth=100% and  many more could be add in the object.


// Task 6.1 — Dot vs Bracket Notation
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

console.log("\nBrand Name is -", car.brand);
console.log("Brand Name is -", car["model"]);

car["color"] = "black";
car.year = 2026;
console.log(car);


// Task 7.1 — Keys and Values
let book = {
    title: "The Hobbit",
    author: "Tolkien",
    pages: 310
};

console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book));

delete book.pages;
console.log(book, "\n")


// Task 7.2 — Nested Objects
let user = {
    username: "coder123",
    address: {
        city: "Austin",
        zip: "78701"
    }
}

console.log(user.address.city);
user.address.country = "Zualala";
delete user.address.zip;
console.log(user.address);


// Task 8.1 — Loop Through Properties

let scores = {
    math: 90,
    science: 85,
    art: 95
};

let valueSum = 0;
for (const key in scores) {
    console.log(key, ":", scores[key]);
    valueSum += scores[key];
}

console.log("The sum of values are -", valueSum);


// Task 9.1 — Contact Book
let contact = {
    name: "Alex Johnson",
    email: "ALEX@EMAIL.COM",
    phone: "555-1234"
};

console.log('\n\n\n');

contact.email = contact.email.toLowerCase();

for (const key in contact) {
    console.log(key, ":", contact[key]);
}

contact.favoriteWords = [];
contact.favoriteWords.push("Honey", "is", "sweet");

console.log(contact);

console.log(reverseString(contact.name));

if (contact.email.includes("@email.com")) {
    console.log("Valid email address");
}
else{
    console.log("The email address is not valid");
}