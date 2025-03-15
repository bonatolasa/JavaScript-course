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
