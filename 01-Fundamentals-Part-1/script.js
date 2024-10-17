// let js = "amazing";
// if (js === "amazing") alert("javascript is FUN!");

// 10 + 45 - 20;
// console.log(10 + 45 - 20);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const fristName = "bona";
// const job = "self job";
// const birthYear = 2001;
// const year = 2080;

// const bona =
//   "I'm " + fristName + " ,a " + (year - birthYear) + " years old " + job + "!";
// console.log(bona);

// const bonaNew = `I'm ${fristName}, a ${year - birthYear} years old ${job}!`;
// console.log(bonaNew);

// const age = 15;
// if (age >= 18) {
//   console.log("saraha can start driving licence");
// } else {
//   const leftYear = 18 - age;
//   console.log("saraha is too young.wait another " + leftYear + " years");
// }

// // const birthYear = 1992;
// let centure;
// if (birthYear <= 2000) {
//   centure = 20;
// } else {
//   centure = 21;
// }
// console.log(centure);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}))is higher than John's(${BMIJohn})!`);
// } else {
//   console.log(`John's BMI(${BMIJohn})) is higher than Mark's(${BMIMark}))!`);
// }

//type of conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number("bona"));

// //type of cohersion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - "3");
// console.log("23" / "2");
// console.log("23" > "18");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// const favourite = Number(prompt("what is your favourite namber"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("cool! 23 is a amazing number");
// }

// const hasDriverLicence = true;
// const hasGoodVision = true;

// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);
// console.log(!hasDriverLicence);

// // if (hasDriverLicence && hasGoodVision) {
// //   console.log("sarah is able to drive!");
// // } else {
// //   console.log("someone else should drive...");
// // }

// const isTired = false;
// console.log(hasDriverLicence && hasGoodVision && isTired);

// if (hasDriverLicence && hasGoodVision && !isTired) {
//   console.log("sarah is able to drive!");
// } else {
//   console.log("someone else should drive...");
// }

// const scoreDillos = (96 + 108 + 89) / 3;
// const scoreKonte = (88 + 91 + 110) / 3;
// console.log(scoreDillos, scoreKonte);

// if (scoreDillos > scoreKonte) {
//   console.log("Dillos win the trophy🤞");
// } else if (scoreDillos < scoreKonte) {
//   console.log("Konte win the trophy🤞");
// }

// const scoreDillos = (96 + 108 + 89) / 3;
// const scoreKonte = (88 + 91 + 110) / 3;
// console.log(scoreDillos, scoreKonte);

// if (scoreDillos > scoreKonte && scoreDillos >= 100) {
//   console.log("Dillos win the trophy🤞");
// } else if (scoreDillos < scoreKonte && scoreKonte >= 100) {
//   console.log("Konte win the trophy🤞");
// } else if (
//   scoreDillos === scoreKonte &&
//   scoreDillos >= 100 &&
//   scoreKonte >= 100
// ) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("No one wins the trophy😪");
// }

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Planing and structure of my work");
//     break;
//   case "thusday":
//     console.log("Go to cooding meetup");
//     break;
//   case "wednesday":
//   case "thrusday":
//     console.log("Write coding examples");
//     break;
//   case "friday":
//     console.log("Recoring vedio");
//     break;
//   case "sutarday":
//   case "sunday":
//     console.log("Enjoy the weekend:D");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// const age = 23;

// const drink = age >= 18 ? "wine 🍷" : "water 🍺";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 🍺"}`);

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `the bill value was ${bill},the tip value ${tip},and the total value ${
//     bill + tip
//   }`
// );

// "use strict";

// let hasDriversLiceance = false;
// const passTest = true;

// if (passTest) hasDriversLiceance = true;
// if (hasDriversLiceance) console.log("I can drive:D");

// function logger() {
//   console.log("My Name is Bonah");
// }
// logger();
// logger();

// function friutProcesser(appels, orenges) {
//   console.log(appels, orenges);
//   const juice = `juice with ${appels} appels and ${orenges} orenges`;
//   return juice;
// }

// const appelJuice = friutProcesser(2, 5);
// console.log(appelJuice);

// //function diclaration
// function calcAge1(birthYear) {
//   return 2066 - birthYear;
// }
// const age1 = calcAge1(2001);

// //function expration
// const calcAge2 = function (birthYear) {
//   return 2066 - birthYear;
// };
// const age2 = calcAge2(2001);

// console.log(age1, age2);

// //Arrow Function

// const calcAge3 = (birthYear) => 2066 - birthYear;
// const age3 = calcAge3(2001);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, fristName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${fristName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(2001, "Bonah"));
// console.log(yearsUntilRetirement(1980, "Tolasa"));

// const cutFriutPiece = function (friut) {
//   return friut * 4;
// };

// const friutProcesser = function (apples, orenges) {
//   const applePiece = cutFriutPiece(apples);
//   const orengePiece = cutFriutPiece(orenges);
//   const juice = `juice with ${applePiece} piece of apple and ${orengePiece} pieces of orenges.`;
//   return juice;
// };
// console.log(friutProcesser(2, 2));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// //TEST1
// let scoreDolphins = calcAverage(46, 67, 88);
// let scoreKillos = calcAverage(23, 42, 44);
// console.log(scoreDolphins, scoreKillos);

// const checkWinner = function (avgDolphines, avgkillos) {
//   if (avgDolphines >= 2 * avgkillos) {
//     console.log(`Dolphine wins 🚕(${avgDolphines} vs. ${avgkillos})`);
//   } else if (avgkillos >= 2 * avgDolphines) {
//     console.log(`Killos wins car 🚕(${avgkillos} vs. ${avgDolphines})`);
//   } else {
//     console.log("NO team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKillos);

// checkWinner(511, 111);

// //TEST 2
// scoreDolphins = calcAverage(23, 13, 42);
// scoreKillos = calcAverage(46, 26, 84);
// console.log(scoreDolphins, scoreKillos);
// checkWinner(scoreDolphins, scoreKillos);

// //ADD ELEMENT
// const friends = ["boni", "tolga", "bora"];
// const newLength = friends.push("ozi");
// console.log(friends);
// console.log(newLength);

// friends.unshift("tarik");
// console.log(friends);

// //remove element
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("tolga"));
// console.log(friends.indexOf("tarik"));

// console.log(friends.includes("tolga"));
// console.log(friends.includes("tarik"));

// if (friends.includes("boni")) {
//   console.log("you have friend boni");
// }
// //CHALLENGE
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// //const calcTip = (bill) => bill >= 50 && bill <= 300?;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips);
// console.log(total);

// const bonah = {
//   fristName: "Bonah",
//   lastName: "Tolasa",
//   age: 2055 - 2001,
//   job: "student",
//   friends: ["tolga", "borah", "ozil"],
// };
// console.log(bonah);

// console.log(bonah.fristName);
// console.log(bonah["lastName"]);

// const nameKey = "Name";
// console.log(bonah["frist" + nameKey]);
// console.log(bonah["last" + nameKey]);

// const interstedIn = prompt(
//   "What do you want to know about Bonah ? Choose between fristName.lastName,age,job,and friends"
// );
// if (bonah[interstedIn]) {
//   console.log(bonah[interstedIn]);
// } else {
//   console.log(
//     "Wrong request. Choose between fristName.lastName,age,job,and friends"
//   );
// }

// //QUIZ
// console.log(
//   `${bonah.fristName} has ${bonah.friends.length} friends, and his best friend is called ${bonah.friends[0]}`
// );

// //OBJECT METHOD
// const bonah1 = {
//   fristName: "Bonah",
//   lastName: "Tolasa",
//   birthYear: 2001,
//   job: "student",
//   friends: ["tolga", "borah", "ozil"],
//   hasDirversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2054 - birthYear;
//   // },

//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2054 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2054 - this.birthYear;
//     return this.age;
//   },
// };

// //console.log(bonah1["calcAge"](2001));

// console.log(bonah1.calcAge());
// console.log(bonah1.age);

// //CHALLENGE
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);
// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is heigher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is heigher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights reptition ${rep}🏗`);
}
const bonah = [
  "Bonah",
  "Tolasa",
  2055 - 2001,
  "student",
  ["tolga", "borah", "ozil"],
];
for (let i = 0; i < 5; i++) {
  console.log(bonah[i], typeof bonah[i]);
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 445, 37, 104, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
