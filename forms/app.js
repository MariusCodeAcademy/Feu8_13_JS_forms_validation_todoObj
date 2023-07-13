'use strict';
console.log('app.js file was loaded');

const els = {
  form: document.forms.perosnForm,
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
});
