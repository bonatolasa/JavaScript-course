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

function logger() {
  console.log("My Name is Bonah");
}
logger();
logger();

function friutProcesser(appels, orenges) {
  console.log(appels, orenges);
  const juice = `juice with ${appels} appels and ${orenges} orenges`;
  return juice;
}

const appelJuice = friutProcesser(2, 5);
console.log(appelJuice);

//function diclaration
function calcAge1(birthYear) {
  return 2066 - birthYear;
}
const age1 = calcAge1(2001);

//function expration
const calcAge2 = function (birthYear) {
  return 2066 - birthYear;
};
const age2 = calcAge2(2001);

console.log(age1, age2);
