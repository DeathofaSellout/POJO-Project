/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
***********************************************************************/
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]


function breakDownObj(obj) {
  // let finArr = [];
  // let addArr = [];
  //  for (let key in obj){
  //   finArr.push(key);
  //   addArr.push(obj[key]);
  // }
  // return finArr.concat(addArr);
  let finArr = Object.keys(obj);
  let addArr = Object.values(obj);
  return finArr.concat(addArr);

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;
