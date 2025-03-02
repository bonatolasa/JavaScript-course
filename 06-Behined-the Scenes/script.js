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
    console.log(2037 - this.year);
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
