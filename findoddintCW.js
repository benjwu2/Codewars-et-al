`Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.`;

// completed 2023-07-17

// 1. check if a key that matches the digit already exists in the object
// 2a. If yes, increment the value associated with the key by 1
// 2b. If no, add such a key with a starting value of 1
// 3. Repeat 1-2 for all elements of the array
// 4. Iterate through the object, checking for an odd value, returning the key associated
// with an odd value

function findOdd(A) {
  let digitDict = {};
  A.forEach((item) => {
    if (`${item}` in digitDict) {
      digitDict[item]++;
    } else {
      digitDict[`${item}`] = 1;
    }
  });

  for (let key in digitDict) {
    if (digitDict[key] % 2 != 0) {
      return parseInt(key);
    }
  }
  return 0;
}

console.log(findOdd([1, 1, 1, 1, 3, 7, 3, 8, 76, 76, 7, 76, 8]));
