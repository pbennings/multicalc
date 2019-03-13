/*
# ========================================================
# = Initialization
# ========================================================
*/

// global array
let numbers = [];

// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {
  // When the user clicks the append button, append the given number to the list.
  document.querySelector("#append").addEventListener("click", appendToList);

  // When the user clicks the remove button, remove the number at the index given from the list.

  document.querySelector("#remove").addEventListener("click", removeFromList);

  // When the user clicks the clear button, remove all items from the list.
  document.querySelector("#clear").addEventListener("click", clearList);

  // When the user clicks the add button, add the value to each item.
  document.querySelector("#add").addEventListener("click", addToAll);

  // When the user clicks the add button, add the value to each item.
  document
    .querySelector("#subtract")
    .addEventListener("click", subtractFromAll);

  // When the user clicks the multiply button, multiply the value by each item.
  document.querySelector("#multiple").addEventListener("click", multiplyByAll);

  // When the user clicks the divide button, divide the value from each item.
  document.querySelector("#divide").addEventListener("click", divideFromAll);
}

/*
# ========================================================
# = List Management
# ========================================================
*/

// Append to the list.
function appendToList(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Get the value we're going to append from the input field.
  let number = document.querySelector("#list-number").value;

  // Append the number to our array.
  // where you want to put it into; action; where it's coming from.

  // parseInt will convert the string to a number;

  let convertNum = parseInt(number, 10);
  // push adds the value to the end of the array;
  numbers.push(convertNum);

  // Hint: here (and elsewhere), watch the TYPE of the value above.
  // Research `typeof` operator if you're not sure.

  // Update our html.
  addToUL(convertNum);

}
// Remove from the list.
function removeFromList(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Get the index we'll remove from the input field.
  let index = document.querySelector("").value;

  // Remove the number at that index from the list.

  /*
        ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */

  // Update our html.
}

function clearList(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Clear the array of all values.

  // Update our html.
}

/*
# ========================================================
# = Math Section
# ========================================================
*/

function addToAll(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Grab value to add.
  let numberToAdd = document.querySelector("").value;

  // Add value to everything on the list.

  // Update our html.
}

function subtractFromAll(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Grab value to subtract.
  let numberToSubtract = document.querySelector("").value;

  // Subtract value from everything on the list.

  // Update our html.
}

function multiplyByAll(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Grab value to multiply.
  let numberToMultiply = document.querySelector("").value;

  // Multiply value by everything on the list.

  // Update our html.
}

function divideFromAll(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Grab value to add.
  let numberToDivide = document.querySelector("").value;

  // Divide value from everything on the list.

  // // Update our html.plo
}

/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
  clearUL();
  for (let i = 0; i < numbers.length; i++) {
    addToUL(numbers[i]);
  }
}

function clearUL() {
  const ul = document.querySelector("#number-list");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
}

// Append to the UL.
function addToUL(numberToAppend) {
  // locate id of number-list in your html
  const UL = document.querySelector("#number-list");
  // creates a new element of li inside the HMTL
  const newLI = document.createElement("li");
  // inside the new element putting text numberToAppend;
  newLI.innerText = numberToAppend;
  // add to the unordered list a new li under it
  // UL is the parent, li is the child
  UL.appendChild(newLI);
}
