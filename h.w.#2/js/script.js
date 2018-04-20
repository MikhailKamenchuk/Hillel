let apple = {
  price: 12.50,
  discount: true,
  extraCharge: false,
  percentDiscount: 15,
  percentExtraCharge: 0
};
let orange = {
  price: 12.50,
  discount: false,
  extraCharge: true,
  percentDiscount: 0,
  percentExtraCharge: 15
};

let productCalculate = function(product){
  var productPriceList;
  if (product.discount) {
    productPriceList = (product.price * 100 - (product.price * 100 * product.percentDiscount / 100)) / 100;
  } else if (product.extraCharge) {
    productPriceList = (product.price * 100 + (product.price * 100 * product.percentExtraCharge / 100)) /100;    
  } else {
    productPriceList = product.price;
  }
  return productPriceList;
}
console.log(`Яблоки украинские.
цена: `+ Math.round(productCalculate(apple) * 100) / 100);
console.log(`Яблоки украинские.
цена: ${Math.round(productCalculate(apple) * 100) / 100}`);

console.log(`Апельсины сицилийские.
цена: `+ Math.round(productCalculate(orange) * 100) / 100);
console.log(`Апельсины сицилийские.
цена: ${Math.round(productCalculate(orange) * 100) / 100}`);
