const elementA = document.getElementById('a');
const elementB = document.getElementById('b');
const elementC = document.getElementById('c');
const elementM = document.getElementById('m');
const elementK = document.getElementById('k');
const result = document.getElementById('result');
const err = document.getElementById('error');
const form = document.getElementById('task-form');

const verifyBtn = document.getElementById('check');
const submitBtn = document.getElementById('send');
let check = false;

verifyBtn.addEventListener('click', verify);
submitBtn.addEventListener('click', sendForm);

function verify() {
  let a = parseInt(elementA.value);
  let b = parseInt(elementB.value);
  let c = parseInt(elementC.value);
  let m = parseInt(elementM.value);
  let k = parseInt(elementK.value);

  if(((m - a) >= 0 && (k - b) >= 0) ||
     ((m - a) >= 0 && (k - c) >= 0) ||
     ((m - b) >= 0 && (k - a) >= 0) ||
     ((m - b) >= 0 && (k - c) >= 0) ||
     ((m - c) >= 0 && (k - a) >= 0) ||
     ((m - c) >= 0 && (k - b) >= 0)
    ){
    check = true;
    result.innerHTML = 'Коробка пройдет в дверь';
    err.innerHTML = '';
  } else {
    result.innerHTML = 'Коробка не пройдет в дверь';
    check = false;
  }
}

// function sendForm() {
//   if(check){
//     form.submit();
//   } else {
//     err.innerHTML = 'Коробка не пройдет в дверь, попробуйте снова.';
//   }
// }