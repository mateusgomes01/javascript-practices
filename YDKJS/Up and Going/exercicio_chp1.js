const TAX_RATE = 0.08;
const MOBILE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_LIMIT = 399.99

var bankAccount = 800;
var amount = 0;

function formatToMoney(amount){
	return "$" + amount.toFixed(2);
}

function applyTax(value){
	return value + (value * TAX_RATE);
}

function applyAccessory(value){
	return value + ACCESSORY_PRICE;
}

function deductValue(value){
	bankAccount = bankAccount - value;
}


while( amount < bankAccount ){
	//...continua comprando.../
	amount = amount + MOBILE_PRICE;

	if( amount < SPENDING_LIMIT ){
		amount = applyAccessory(amount);
	}

  	console.log(amount);

}

amount = applyTax(amount);

amount = formatToMoney();

console.log(amount);