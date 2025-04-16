'use strict';

/*
////////////////////
// DEFAULT PARAMETERS

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers=numPassengers||1;
  // price=price||199;

  //object"booking" store in bookings
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LE32');
createBooking('LE32', 2, 752);
createBooking('LE32', 2);
createBooking('LE32', 5);
createBooking('LE32', undefined, 222);

console.log(bookings);
*/

/*
///////////////////////
// Arguments works value vs refrence
const flight = '  ET234';
const bonah = {
  name: 'Bona Tolasa',
  passport: 234574876787,
};

const ckeckIn = function (flightNum, passenger) {
  flightNum = 'ET567';
  passenger.name = 'Mr.' + passenger.name;
  //   console.log(flightNum, passenger.name);

  if (passenger.passport === 234574876787) {
    alert('Checked In');
  } else {
    alert('Worng Passport');
  }
};

ckeckIn(flight, bonah);
console.log(flight, bonah);

// The same as doing.....
// const flightNum = flight;
// const passenger = bonah;
// console.log(flightNum, passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(bonah);
console.log(flight, bonah);
ckeckIn(flight, bonah);
*/

/*
////////////////////////////
//Function accepting callbacks function

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFristWord = function (str) {
  const [frist, ...others] = str.split(' ');
  return [frist.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};
transformer('JavaScript is the best!', upperFristWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['bona', 'martha', 'fiyameta'].forEach(high5);
*/

/*
////////////////////////////////////
//Function returning function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet('Hey');
greetingHey('bonah');
greetingHey('Guta');

greet('Hello')('bonah');

//change to arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('bonah');
*/

/*

const bole = {
  airline: 'Bole',
  iataCode: 'ET',
  bookings: [],
  // book:function(){};
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};
bole.book(778, 'Bonah Tolasa');
bole.book(665, 'John Daniel');

const jimma = {
  airline: 'Jimma',
  iataCode: 'ETJ',
  bookings: [],
};

const book = bole.book;

//Does NOT work
//book(23,'merry gasha');

//CALL METHOD
book.call(jimma, 23, 'Merry gasha');
console.log(jimma);

book.call(bole, 778, 'Mamo Ligdi');
console.log(bole);

const nekmte = {
  airline: 'Nekmte',
  iataCode: 'NEKET',
  bookings: [],
};

book.call(nekmte, 347, 'Moti Taresa');

//Apply method
const flightData = [347, 'Monera Taresa'];
book.apply(nekmte, flightData);
console.log(nekmte);

book.call(nekmte, ...flightData);

// Bind method
//book.call(bole, 778, 'Mamo Ligdi');

const bookBL = book.bind(bole);
const bookNT = book.bind(nekmte);
const bookJI = book.bind(jimma);

bookBL(23, 'Gudde Duguma');
const bookBL23 = book.bind(bole, 23);
bookBL23('Boni Toli');
bookBL23('Martin Toli');

//With Event Listeners
bole.planes = 300;
bole.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
bole.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', bole.buyPlane.bind(bole));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value +value*0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

*/

/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// Immediately invoked function expretion
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will Also never run again'))();

{
  const isPrivate = 23;
  var offPrivate = 26;
}
// console.log(isPrivate);
console.log(offPrivate);
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
