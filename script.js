let counter = 1;
let finalArray = [];

while (counter <= 100) {
  let output = (counter % 5 == 0 && counter % 3 == 0) ? "FizzBuzz!" : (counter % 3 == 0) ? "Fizz!" : (counter % 5 == 0) ? "Buzz!" : counter;
  finalArray.push(output);
  counter++
}

for (let f = 0; f < finalArray.length; f++) {
  let listItem = document.createElement("LI");
  listItem.textContent = finalArray[f];
  document.getElementById('placeHolder').appendChild(listItem);
  }
console.log(finalArray);
