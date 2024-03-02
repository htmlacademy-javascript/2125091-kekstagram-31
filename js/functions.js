function checkStringLength(string, length) {
    return  string.length >= length;
}

function checkIsPolindrom(checkingString) {
  let firstPart,
      secondPart,
      string = checkingString.replaceAll(' ',''),
      delimetr = Math.trunc(string / 2);
  if(string.length % 2) {
    firstPart = string.substr(0, delimetr);
    secondPart = string.substr(delimetr + 1).split('').reverse().join('');

  }
  else {S
    secondPart = string.substr(delimetr).split('').reverse().join('');
  }
  return firstPart === secondPart;
}

function getNumberFromString(checkingString) {
  let string = checkingString.replaceAll(' ',''),
      sum ='',
      notSum='';
  for(let i = 0; i<string.length; i++) {
    if(parseInt(string[i])) {
      sum += string[i];
    }
    else {
      notSum += string[i];
    }
  }
  if(notSum === string) {
    return  parseInt(notSum);
  }
  else {
    return  sum;
  }
}
