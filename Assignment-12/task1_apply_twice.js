// Name: Zainul Ali | Roll Number: BCS2025413 | Assignment: 12, Task: 1
function applyTwice(callback, value) {
  return callback(callback(value));
}

function addTen(number) {
  return number + 10;
}

console.log(applyTwice(addTen, 5));
