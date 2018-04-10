// Функция подсчета максимального числа кексов, которые можно испеч
let recipeProduct = {
    apples: 3,
    flour: 300,
    sugar: 150,
    milk: 100,
    oil: 100
};
let availableIngredients = {
    sugar: 500,
    flour: 2000,
    milk: 2000
};

function cakes(recipe, available){
    let amount = [];
    for (let key in recipe){
        for(let name in available){
            if (key === name){
                amount.push(Math.floor(available[name] / recipe[key]));
                break;
            };
        };
    };
    console.log(amount);
    if (Object.keys(recipe).length != amount.length){
        amount.push(0);
    }
    console.log(amount);
    return Math.min(...amount);
}
alert(cakes(recipeProduct, availableIngredients));

//Функция проверки: "Все ли могут купить билеты?"
let personsQueue = [100, 25, 25, 25, 50];

function ticket(array){
  let result;
  let cashInCashbox = 0;
  let i;
  
  for (i = 0; i < array.length; i++){ 
    console.log(cashInCashbox);    
    if (array[i] === 25) {
      cashInCashbox += array[i];
    } else if (array[i] === 50 && array[0] !== 50) {
      cashInCashbox += 25;
    } else {
      cashInCashbox -= 75;
    }
    console.log(cashInCashbox);
    (cashInCashbox >= 0)
      ? result = 'YES'
      : result = 'NO';
  }
  return result;
}
alert(ticket(personsQueue));
// я думаю, что решение ужасное и не правильное