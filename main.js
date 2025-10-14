"use strict"

const btn = document.getElementById('translate-btn');
let lang = true;
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');

function translate() {
  if(lang === true){
    firstname.innerText = 'Evelina'
    lastname.innerText = 'Alieva'
    btn.innerText = 'перевести на русский'
    lang = false;
  } else {
    firstname.innerText = 'Эвелина'
    lastname.innerText = 'Алиева'
    btn.innerText = 'перевести на английский'
    lang = true;
  }
}

btn.addEventListener('click', translate);