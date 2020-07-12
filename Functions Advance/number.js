function randomIntBetween(min, max) {
  //min:5, max:10
  return Math.floor(min + Math.random() * (max - min + 1));
}

// console.log(randomIntBetween(1,10));

// Strings
// tagged template literals

function productionDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceDescription = "pretty cheap regarding its price";
  if (productPrice > 20) {
    priceDescription = "fairly priced";
  }
  //   return `${strings[0]}${productName}${strings[1]}${priceDescription}${strings[2]}`;
  return {
    productName,
    productPrice,
  };
}

const prodName = "JavaScript Course";
const prodPrice = 29.99;
const productOutput = productionDescription`This product (${prodName}) is ${prodPrice}.`;

console.log(productOutput);
