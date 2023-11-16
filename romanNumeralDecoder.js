numeralValue = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function solution(roman) {
  result = 0;
  for (let i = 0; i < roman.length; i++) {
    if (numeralValue[roman[i]] < numeralValue[roman[i + 1]]) {
      result += numeralValue[roman[i + 1]] - numeralValue[roman[i]];

      i++;
    } else {
      result += numeralValue[roman[i]];
    }
  }
  return result;
}
