"use strict";

const moviesList = document.getElementById('movies-list');

async function getResponse() {
  let response = await fetch('./movies.json');
  let content = await response.text();
  content = JSON.parse(content);
  content = content.splice(0, 6);
  console.log(content);

  for (const key in content) {
    console.log(content[key].id, content[key].title);
    console.log(content[key]);
  }
  for (const key in content) {
    moviesList.innerHTML += `
      <div class="movie-card">
      <img class="movie-card-img" src=${content[key].img}>
      <h2 class="movie-title">${content[key].title}</h2>
      <p class="movie-year">${content[key].year}
      <p class="movie-director">${content[key].director}</p>
      <p class="ticket-price">Цена ${content[key].price} р.</p>
      <input type="hidden" name= "movie-id" value=${content[key].id}>
      <p class="card-text">Количество билетов</p>
      <input class="ticket-amount" type="number" name="amount" value="0">
      </div>
    `
  }
}

getResponse();