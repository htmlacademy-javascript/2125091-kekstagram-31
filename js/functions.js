function checkStringLength(string, length) {
  return string.length >= length;
}
console.log(checkStringLength('Ucraine is a great', 15));

function checkIsPolindrom(checkingString) {
  let firstPart,
    secondPart,
    string = checkingString.replaceAll(' ', ''),
    delimetr = Math.trunc(string / 2);
  if (string.length % 2) {
    firstPart = string.substr(0, delimetr);
    secondPart = string.substr(delimetr + 1).split('').reverse().join('');
  } else {
    secondPart = string.substr(delimetr).split('').reverse().join('');
  }
  return firstPart === secondPart;
}
console.log(checkIsPolindrom('sadasosadas'));

function getNumberFromString(checkingString) {
  let string = checkingString.replaceAll(' ', ''),
    sum = '',
    notSum = '';
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i])) {
      sum += string[i];
    } else {
      notSum += string[i];
    }
  }
  if (notSum === string) {
    return parseInt(notSum);
  } else {
    return sum;
  }
}
console.log(getNumberFromString('danger is a not 123 but dange'));
