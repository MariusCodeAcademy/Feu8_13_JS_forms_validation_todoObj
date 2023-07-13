'use strict';
console.log('app.js file was loaded');

const els = {
  form: document.forms.perosnForm,
  output: document.getElementById('output'),
  firstname: document.getElementById('firstname'),
  lastname: document.getElementById('lastname'),
  age: document.getElementById('age'),
  isMarried: document.getElementById('isMarried'),
  town: document.getElementById('town'),
};
console.log('els ===', els);

els.form.addEventListener('submit', (event) => {
  // sustabdom nuo perkrovimo?
  event.preventDefault();
  console.log('pateikta forma');

  // formos ivestties reiksmiu objektas
  const formInputsDataObj = {
    firstname: els.firstname.value,
    lastname: els.lastname.value,
    age: els.age.value,
    isMarried: els.isMarried.checked,
    town: els.town.value,
  };

  console.log('formInputsDataObj ===', formInputsDataObj);
  // Validacija
  if (isThereEmptyValues(formInputsDataObj)) {
    console.warn('all fields required');
    return;
  }

  makeElAndMountToDom(formInputsDataObj);
});

function isThereEmptyValues(valuesObj) {
  // patikrinti ar nors viena obejkto reikme lygi tusciam string

  // let firstname = valuesObj.firstname;
  // let lastname = valuesObj.lastname;
  // let age = valuesObj.age;
  // let town = valuesObj.town;

  // objekto destrukturizacija
  let { firstname, lastname, age, town } = valuesObj;

  if (firstname === '' || lastname === '' || age === '' || town === '') {
    return true;
  }
  // if ([firstname, lastname, age, town].includes('')) {
  //   return true;
  // }
}

/*
<div class="oneUser">
  <h3>Email: james@bond.com</h3>
  <p>Name: James</p>
  <p>Age: 45 years old</p>
</div>
*/
function makeElAndMountToDom(valuesObj) {
  // console.log('valuesObj ===', valuesObj);
  const divEl = document.createElement('div');
  divEl.classList.add('oneUser');
  console.log('divEl ===', divEl);
  divEl.innerHTML = `
  <h3>${valuesObj.firstname} ${valuesObj.lastname}</h3>
  <p>${valuesObj.firstname} is ${
    valuesObj.isMarried ? 'Married' : 'Single'
  } </p>
  <p>Town: ${valuesObj.town}</p>
  <p>Age: ${valuesObj.age} years old</p>
  `;
  els.output.append(divEl);
}
