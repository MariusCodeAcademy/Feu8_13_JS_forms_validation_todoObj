'use strict';
console.log('arrayFromObj.js file was loaded');

const user = {
  name: 'Jess',
  age: 25,
  town: 'Birmingham',
};
console.log('user ===', user);

// gauti visu user objekto values masyva
const userObjValues = Object.values(user);
console.log('userObjValues ===', userObjValues);
// gauti visus user objekto keys masyve
const userObjKeys = Object.keys(user);
console.log('userObjKeys ===', userObjKeys);

// gauti masyvu masyva su objekto keys ir values
const userObjEntries = Object.entries(user);
console.log('userObjEntries ===', userObjEntries);

// objekto ciklas (for in)
for (let key in user) {
  let propertyKey = key;
  let propertyValue = user[key];
  console.log(propertyKey, '---', propertyValue);
}
console.log('user.name ===', user['name']);
