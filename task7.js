//7. The user enters 1 number.
// Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123,
// output is 321 in this case.
/*function getNumberFromUser(message) {
  let userValue;
  let flag = false;
  do {
    if (flag) {
      alert("You have to enter number");
    }
    userValue = +prompt(message);
    flag = true;
  } while (isNaN(userValue));
  return userValue;
}
let n = getNumberFromUser(`Enter number n`);

let reverse = 0;

let remainder;

while (n != 0) {
  calculateLoop(n);
}
console.log(reverse);
function calculateLoop(ValN) {
  remainder = n % 10;
  reverse = reverse * 10 + remainder;
  n = n / 10 - remainder / 10;
}
*/
