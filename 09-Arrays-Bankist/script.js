'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Bona Tolasa',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2008-11-18T21:31:17.178Z',
    '2010-12-23T07:42:02.383Z',
    '2011-01-28T09:15:04.904Z',
    '2012-04-01T10:17:24.185Z',
    '2012-05-08T14:11:59.604Z',
    '2013-05-27T17:01:17.194Z',
    '2014-07-11T23:36:17.929Z',
    '2016-07-12T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  owner: 'Galo Dhaba',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2014-11-01T13:15:33.035Z',
    '2015-11-30T09:48:16.867Z',
    '2015-12-25T06:04:23.907Z',
    '2015-01-25T14:18:46.235Z',
    '2016-02-05T16:33:06.386Z',
    '2017-04-10T14:43:26.374Z',
    '2017-06-25T18:49:59.371Z',
    '2017-07-26T12:01:20.894Z',
  ],
  currency: 'ETB',
  locale: 'en-ET',
};

const account3 = {
  owner: 'Marti Miretu',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2011-11-01T13:15:33.035Z',
    '2014-11-30T09:48:16.867Z',
    '2014-12-25T06:04:23.907Z',
    '2014-01-25T14:18:46.235Z',
    '2016-02-05T16:33:06.386Z',
    '2016-04-10T14:43:26.374Z',
    '2016-06-25T18:49:59.371Z',
    '2017-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Abynew',
  movements: [430, 1000, 700, 50, 90, 500, 1500, 100],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2016-11-01T13:15:33.035Z',
    '2016-11-30T09:48:16.867Z',
    '2016-12-25T06:04:23.907Z',
    '2017-01-25T14:18:46.235Z',
    '2017-02-05T16:33:06.386Z',
    '2017-04-10T14:43:26.374Z',
    '2017-06-25T18:49:59.371Z',
    '2017-07-26T12:01:20.894Z',
  ],
  currency: 'ETB',
  locale: 'en-ET',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////////
//Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  // containerMovements.textContent = 0;

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = formatCur(income, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc);
  //Display Balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;

//FAKE always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // create current date and time
    const now = new Date();
    const options = {
      hour: '2-digit',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weakday:'long',
    };
    //  const locale =navigator.language
    //   console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      //add movement
      currentAccount.movements.push(amount);
      //add loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      //update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //Delete Account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//FOR EACH
console.log('-----------forEach------------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`movement ${i + 1}: You Deposited ${mov}`);
  } else {
    console.log(`movement ${i + 1}: You Withdrew ${Math.abs(mov)}`);
  }
});

/////////////////////////////////////////////////

// MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SETS
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
