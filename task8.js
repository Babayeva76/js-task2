/*8. The user enters 2 numbers. Find out if these two numbers have the same digits.
 For example, for a pair of 123 and 3456789,
  the answer would be "YES", and for a pair of 500 and 99, "NO".
 */

function getNumberFromUser(message) {
  let userValue;
  let flag = false;
  do {
    if (flag) {
      alert("You have to enter number");
    }
    userValue = prompt(message);
    flag = true;
  } while (isNaN(userValue));
  return userValue;
}
let firstnumber = getNumberFromUser(`Enter number a`);
let secondnumber = getNumberFromUser(`Enter number b`);
console.log(firstnumber);
console.log(secondnumber);
let flag = false;
let length_first = firstnumber.length;
let length_second = secondnumber.length;
calculateLoop(firstnumber, secondnumber);

if (!flag) {
  console.log("No");
}

function calculateLoop(FirstNumber, SecondNumber) {
  for (let i = 0; i < length_first; i++) {
    for (let j = 0; j < length_second; j++) {
      if (firstnumber[i] === secondnumber[j]) {
        console.log("Yes");
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
}
