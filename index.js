'use strict';
function fillArray() {
  let mainArrayLength = parseInt(prompt("Enter the length of the main array:"));
  if (isNaN(mainArrayLength) || mainArrayLength <= 0) {
    alert("Please enter a positive number.");
    return;
  }

  let innerArrayLength = parseInt(prompt("Enter the length of the internal arrays:"));
  if (isNaN(innerArrayLength) || innerArrayLength <= 0) {
    alert("Please enter a positive number.");
    return;
  }

  let array = [];
  for (let i = 0; i < mainArrayLength; i++) {
    array[i] = [];
    for (let j = 0; j < innerArrayLength; j++) {
      let value = prompt(`Enter a value for the element [${i}][${j}]:`);
      array[i][j] = value;
    }
  }
  console.log(array);
}

fillArray();