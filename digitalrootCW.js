`Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.`;

// I learnt that the split method does not work on numbers, so in order to convert input n
// into a string, I had to use a template string

function digitalRoot(n) {
  let answer = `${n}`.split("").reduce((prevVal, item) => {
    return prevVal + parseInt(item);
  }, 0);

  return answer < 10 ? answer : digitalRoot(answer);
}

// An alternate solution, not using split() or reduce()
// Instead this solution does more "traditional" form of accumulation,
// iterating through the inputted number converted into a string,
// and converting digits back to numbers before adding to the result
function digitalRootAlt(m) {
  let numberString = String(m);

  let result = 0;
  for (let i = 0; i < numberString.length; i++) {
    result += parseInt(numberString[i]);
  }
  return result < 10 ? result : digitalRootAlt(result);
}

console.log(digitalRoot(15));
