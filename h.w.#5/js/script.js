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
console.log(cakes(recipeProduct, availableIngredients));

//Функция проверки: "Все ли могут купить билеты?"
let personsQueue = [25,25,50,100,25,50,25,50,100];

function ticket(queue){
  let result = 'YES';
  let cashInCashbox = [];
  let ticketPrice = 25;
  let change;
  for (let i = 0; i < queue.length; i++){  
    if (queue[i] == ticketPrice) {
      cashInCashbox[i] = queue[i];
    } else if(queue[i] == 50){
       if(cashInCashbox.indexOf(ticketPrice) in cashInCashbox) {
         cashInCashbox[i] = queue[i];
         delete cashInCashbox[cashInCashbox.indexOf(ticketPrice)];
       }else{
         result = 'NO'
       }
    } else if (queue[i] == 100){
      if(cashInCashbox.indexOf(ticketPrice) in cashInCashbox && cashInCashbox.indexOf(50) in cashInCashbox) {
         cashInCashbox[i] = queue[i];
         delete cashInCashbox[cashInCashbox.indexOf(ticketPrice && 50)];
       }else{
         result = 'NO'
       }
    }
  }
  return result;
}
console.log(ticket(personsQueue));