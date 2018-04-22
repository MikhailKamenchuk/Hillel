//Функция, которая принимает функцию и аргументы и возвращает результат

function sum() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() {
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

function sub() {
  return [].reduce.call(arguments, function(a, b) {
    return a - b;
  });
}

function div() {
  return [].reduce.call(arguments, function(a, b) {
    return a / b;
  });
}

function applyAll(func) {
  return func.apply(this, [].slice.call(arguments, 1));
}
alert(applyAll(sum, 8, 4, 2));
alert(applyAll(mul, 8, 4, 2));
alert(applyAll(sub, 8, 4, 2));
alert(applyAll(div, 8, 4, 2));


//Функция Фибоначчи

let ask = +prompt('Введите число Фибоначчи', '5')
function fibonacci(n) {
  let a;
  let b;
  if (n === 0) {
    b = 0;
    a = 0;
  }else {
    b = 1;
    a = 1;
  };
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  };
  return b;
};

console.log(fibonacci(ask));