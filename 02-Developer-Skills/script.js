'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2057 - birthYear;

console.log(calcAge(2002));

//MY TEST FOR PROBLEM SOLVER

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2
const temperaturesNew = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 4, 1], [9, 0, 6]);
console.log(amplitudeNew);
// BUG DEBUG: TODO:
//FIXME: HACK:

/*+++++++++++++++++++++++++++++++++++++++ */
//       TEMPRETURE CONVERT
/*+++++++++++++++++++++++++++++++++++++++ */
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    //  FIX
    // value: Number(prompt('Degrees celcius:')),
    value: 10,
  };
  //   FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//    IDENTIFY
console.log(measureKelvin());

/*++++++++++++++++++++++++++++++++ */
//  MY CHALLENGE
/*++++++++++++++++++++++++++++++++ */
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(`...${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(data1);
