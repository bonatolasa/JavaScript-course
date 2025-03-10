'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDeliver({ starterIndex = 1, mainIndex = 0, time = '10:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orederPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delisious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, b, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(b);
    console.log(otherIngredients);
  },
};

///////////////////////
//Sets
const orderSets = new Set([
  'pasta',
  'pizza',
  'risetto',
  'mushroom',
  'pasta',
  'pizza',
]);
console.log(orderSets);
console.log(new Set('bonaah'));
console.log(orderSets.size);
console.log(orderSets.has('pizza'));
console.log(orderSets.has('bread'));
console.log(orderSets.add('Glaric Bread'));
orderSets.add('Glaric Bread');
orderSets.delete('risetto');
// orderSets.clear();
console.log(orderSets);

for (const order of orderSets) console.log(order);

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['pasta', 'pizza', 'risetto', 'mushroom', 'pasta', 'pizza']).size
);

console.log(new Set('BonahTolasa').size);

/*
///////////////////////////////////////////
//Object properties :object Keys,values, and Entries
//  Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
// console.log(openStr);
for (const day of properties) {
  // console.log(day);
  openStr += `${day} `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
  */

/*
////////////////////////////////////
//WITH optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'bonah', email: 'tolboni614@gmail.com' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');
*/

/*
//////////////////////
//Looping array  [The for-of loop]
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

// console.log([...menu.entries()]);
*/

/*
//The nullish coalescing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
//SHORT CIRCUITING (&& and ||)
console.log('---- OR ----');
//Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'bonah');
console.log('' || 'bonah');
console.log(true || 0);
console.log(false || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || null || 'hello' || 23 || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('______AND________');
console.log(0 && 'bonah');
console.log(7 && 'bonah');

console.log('Hello' && 23 && null && 'jonah');
console.log(undefined || null);
*/

/*
//REST PATERN AND PARAMETER
//1.Destructing

//Spread , because on Right side of =
const arr = [1, 2, ...[3, 4]];

//REST , because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, d, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, d, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(2, 3, 6, 5);
add(2, 3, 4, 5, 7);

const x = [23, 4, 5];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mashrooms');
*/

/*
////////////////////////////
//The Spread Operator(...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 3, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'tometoes'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables:array,strings,maps,sets,NOT objects
const str = 'bonah';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} tolasa`);

//Real-world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orederPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orederPasta(...ingredients);

//Objects
const newRestaurant = {
  foundedIn: 2017,
  ...restaurant,
  founder: 'H/silase',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'haile restaurant';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
/////////////////////////
//DESTRUCTERING Object
restaurant.orderDeliver({
  time: '22:07',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDeliver({ address: 'via del sole, 21', starterIndex: 1 });


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating variables
let a = 111;
let b = 949;
const obj = { a: 23, b: 55, c: 18 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);
//console.log(open, close);
*/

/*
///////////////////////////////
//DESTRUCTERING ARRAY 
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destruction
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
