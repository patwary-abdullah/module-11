const goals =4;
const player = "Neymar JR";
const isGolder = true;

if (player === 'Mbappe') {
    console.log('kire bete');
}

const matches = ['vs algeria', 'vs belgium'];


const cup = "world cup";
const tea = 'Tea cup';
const location = `sajek`;


// String is immutable, so we cann't cahnge the character of a string
location[0] = 'w';
//It does not change
console.log(location);


const name = 'AbdullAh';

console.log (name.toLowerCase());
console.log (name.toUpperCase());



// *** Object and function ***

const superShop = {
    name: "Patwary Trade Centre",
    location: "Jinjira",
    mobile: "+880 1896-333749",
    isOpen: true,
    'owner name': "Mostafa Patwary"
}

console.log(superShop);

//  Get and Set

superShop.isOpen=false;
superShop["Area size:"] = "33 Acre";

console.log(superShop);

console.log(`Get by using dot notation - ${superShop.location}`);

console.log(`Get by using Bracket notation - ${superShop["owner name"]}`);

// Delete an object property
delete superShop.isOpen;

// Get object keys and values
console.log(Object.keys(superShop));

console.log(Object.values(superShop));


