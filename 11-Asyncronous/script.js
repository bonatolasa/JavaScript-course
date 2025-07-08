'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(+data.population / 1_000_000).toFixed(
          1
        )} million people
      </p>
      <p class="country__row">
        <span>🗣️</span>${Object.values(data.languages)[0]}
      </p>
      <p class="country__row">
        <span>💰</span>${Object.values(data.currencies)[0].name}
      </p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

/*
const getConutryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Get rEnder country (1)
    renderCountry(data);

    //Get neighbour country (2)
    const [neighbour] = data.borders;

    //AJAX call coutry(2)
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
getConutryAndNeighbour('ethiopia');
// getConutryAndNeighbour('usa');
// getConutryAndNeighbour('germany');
*/

const getJason = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  //country 1
  getJason(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found'
  )
    // .then(response => {
    //   if (!response.ok) throw new Error(` COUNTRY not found ${response.status}`);
    //   return response.json();
    // })

    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'fsazjjks';

      if (!neighbour) throw new Error('No neighbour found!');

      //country 2
      return getJason(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    // .then(response => {
    //   if (!response.ok)
    //     throw new Error(`country not found,${response.status}`);
    //   return response.json();
    // })
    .then(data => {
      if (!data) return;
      renderCountry(data[0] ?? data, 'neighbour');
    })
    .catch(err => {
      console.error(`${err}🎇😎😎🎇`);
      renderError(`Something went wrong 🎇😎😎🎇 ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('ethiopia');
});

getCountryData('australia');
