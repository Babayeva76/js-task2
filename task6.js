//6. The user enters 2 numbers.
//Find their greatest common divisor using Euclid's algorithm.
// (yes, you've got to google this algorithm at first :D ).
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
const a = getNumberFromUser(`Enter number a`);
const b = getNumberFromUser(`Enter number b`);
let r1, r2, r;
r1 = a;
r2 = b;

if (a !== 0 && b !== 0) {
  calculateLoop(r1, r2);
}
function calculateLoop(R1, R2) {
  while (r2 > 0) {
    r = r1 % r2; //q=a/b+r
    r1 = r2; //r=a-q*b
    r2 = r;
  }
  console.log(r1);
}
*/
