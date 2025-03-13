'use strict';
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers=numPassengers||1;
  // price=price||199;

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
