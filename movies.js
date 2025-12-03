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
      <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
      <img style="width: 180px" class="align-self-center" src=${content[key].img}>
      <h5 class="card-subtitle">${content[key].title}</h5>
      <p class="card-text">${content[key].director}. Цена ${content[key].price} р.</p>
      <input type="hidden" name= "year" value=${content[key].year}>
      <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" value="0"></p>
      </li>
    `
  }
}

getResponse();