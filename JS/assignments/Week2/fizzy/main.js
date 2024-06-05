/******************************
 * YOUR CODE GOES RIGHT HERE! *
 *********************************/
function fizzy(fizzy){
if (fizzy % 15 === 0){
  return "FizzBuzz"
}
else if (fizzy % 3 === 0){
  return "Fizz"
}
else if (fizzy % 5 === 0){
  return "Buzz"
} else {
  return fizzy
}
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
