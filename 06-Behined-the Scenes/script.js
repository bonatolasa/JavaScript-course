'use strict';

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating new variable with same name as outer scopes of variable
      const firstName = 'lami';
      //Reassining outer of the scope's variable
      output = 'NEW OUTPUT!';

      const str = `oh , and youare a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Bonah';
calcAge(1994);

// console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2025 - birthYear);
  // console.log(this);
};
calcAge1(1980);

const calcAgeArrow = birthYear => {
  console.log(2025 - 2002);
  // console.log(this);
};
calcAgeArrow(1980);

const bonah = {
  year: 2011,
  calcAge: function () {
    console.log(this);
    // console.log(2037 - this.year);
  },
};
bonah.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = bonah.calcAge;
matilda.calcAge();

const f = bonah.calcAge;
f();

// var FirstName = ' Matillena';

const bona = {
  firstName: 'boni',
  year1: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year1);

    //Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year1 >= 1981 && self.year1 <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year1 >= 1981 && this.year1 <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.FirstName}`);
  },
};
bona.greet();
bona.calcAge();

// argument Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 7);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

//Primitive types
let LastName = '  Tolasa';
let oldLastName = LastName;
LastName = 'Gutama';
console.log(LastName, oldLastName);

//refrencial type
const jessica = {
  firstName: 'jessica',
  LastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.LastName = 'Davie';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//copying object
const jessica2 = {
  firstName: 'jessica',
  LastName: 'Williams',
  age: 27,
  family: ['Bontu', 'latera'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.LastName = 'Davis';

jessicaCopy.family.push('marry');
jessicaCopy.family.push('john');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
