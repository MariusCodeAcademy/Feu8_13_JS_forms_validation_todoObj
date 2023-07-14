'use strict';
console.log('app.js file was loaded');
// visi elementai su kuriais mes kazka darysim

const els = {
  form: document.forms.perosnForm,
  output: document.getElementById('output'),
  addUserBtn: document.getElementById('addUserBtn'),
  errorContainer: document.getElementById('errorContainer'),
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
  clearErrors();

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
    showError('Visi laukai privalomi!!!');
    return;
  }

  // patikrinti ivesiestie ilgius kad butu daugiau nei 3

  // patikrinti ar armziu tarp 10 ir 150mettu

  // nera klaidu
  makeElAndMountToDom(formInputsDataObj);
  // paslepti forma
  els.form.reset();
  hideFormShowBtn();
});

els.addUserBtn.addEventListener('click', showFormHideBtn);

function clearErrors() {
  els.errorContainer.innerHTML = '';
}

function showError(msg) {
  // irasyti zinute i klaidu konteineri
  els.errorContainer.innerHTML = `<h2 class="error">${msg}</h2>`;
}
/// sukurti isTextShort()
// patikrinti ar vardas arba pavarde arba mistas yra trumpensi nei 3 raides

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
  // if (Object.values(valuesObj).includes('')) {
  //   return true;
  // }
  // return Object.values(valuesObj).includes('')
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

function hideFormShowBtn() {
  els.form.classList.add('d-none');
  els.addUserBtn.classList.remove('d-none');
}
function showFormHideBtn() {
  els.form.classList.remove('d-none');
  els.addUserBtn.classList.add('d-none');
}
