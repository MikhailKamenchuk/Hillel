// Проверка пароля на валидацию
let enterPassword = prompt('Введите пароль','password');
const LETTERS_LIST = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const NUMBERS_LIST = ['0','1','2','3','4','5','6','7','8','9'];
const ALL_LISTS = LETTERS_LIST.concat(NUMBERS_LIST);

//Функция проеки на только буквы и цифры
function onlyLettersAndNumbersCheck (str, list){ 
  let result = true; 
  for (let i = 0; i < str.length; i++) { 
    if(result){ 
      for (let j = 0; j < list.length; j++){ 
        if(str[i] === list[j]){ 
          result = true; 
          break; 
        } else { 
          result = false; 
        };
      };
    } else { 
      break; 
    };
  }; 
  return result; 
};

//Функция проверки на число или букву
function stringsCheck (str, list){
  let result = false;
  for (let i = 0; i < str.length; i++) {
    for(let j = 0; j < list.length; j++){
      if(str[i] === list[j]){
        result = true;
        break;
      };
    };
  };
  return result;
};

//Функция проверки на длинну
function lengthCheck (str) {
  let result;
  if (str.length > 6 && str.length < 20) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

//Функция проверки на ПРОСТОЕ ЧИСЛОБ ЧЕТНОЕ И КРАТНОЕ 10ТИ
function checkNumber(number){
  let arr = [];
  let n = parseInt(number);
    
  if (n == 2) {
    arr[0] = true;
  } else if ((n % 2 == 0) && (n != 2)) {
    arr[0] = false;        
  } else {
    let k = Math.round(Math.sqrt(n));
    let flag = false;
    for (let i = 2; i < k + 1; i++) {
      if (n % i == 0) {
      arr[0] = false;
      flag = true;
      break;
    };
    if (flag == false) {
      arr[0] = true;
    };
  };
  };
  
  
  if (n % 2 == 0) {
    arr[1] = true;
  } else {
    arr[1] = false;
  };
  
  
  if (n % 10 == 0) {
    arr[2] = true;
  } else {
    arr[2] = false;
  };
  return arr;
};

//Функция сложения двух чисел

function sumNumbers(numOne, numTwo){
  numOne = numOne.split(',');
  numTwo = numTwo.split(',');
  let newArray = [];
  let maxLengthNumber;
  let lessLengthNumber;
  if(numOne.length >= numTwo.length){
    maxLengthNumber = numOne;
    lessLengthNumber = numTwo;
  } else{
    maxLengthNumber = numTwo;
    lessLengthNumber = numTwo;
  };
  for (let i = maxLengthNumber.length; i >= 0; i--){  
    for (let j = lessLengthNumber.length; j >= 0; j--) {
      if (maxLengthNumber[i] + lessLengthNumber[j] >= 10){
        newArray[i] = +maxLengthNumber[i] + +lessLengthNumber[j];
        continue;
      };
    };
  };
  return  newArray.join();
};

//Функция проверки на валидацию
function validatePassword(password){ 
  let result = 'INVALID';
    if (lengthCheck(enterPassword) && stringsCheck(enterPassword, LETTERS_LIST) && stringsCheck(enterPassword, NUMBERS_LIST) && onlyLettersAndNumbersCheck(enterPassword, ALL_LISTS)) {
      result = 'VALID';
    };
  return result;
}
validatePassword(enterPassword);

let writeSomeNumber;
if (validatePassword(enterPassword) === "VALID"){
   writeSomeNumber = prompt("Введите простое, чётное, либо кратное 10ти число", '****');
  checkNumber(writeSomeNumber);    
} else {
  alert(validatePassword(enterPassword));
};

if(checkNumber(writeSomeNumber)[0] || checkNumber(writeSomeNumber)[1] || checkNumber(writeSomeNumber)[2]) {
  let numFirst = prompt('Введите любое целое число','000000');
  let numSecond = prompt('Введите любое целое число','000000');
  alert(`Сумма чисел ${numFirst} и ${numSecond} равна ${sumNumbers(numFirst, numSecond)}`);
} else {
  alert(validatePassword(enterPassword));
};

