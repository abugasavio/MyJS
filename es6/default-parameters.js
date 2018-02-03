// es5

function sayHi(name, dollars) {
	dollars = dollars === undefined ? 5 : dollars;
	return 'Your name is ' + name + ' and you have ' + dollars + ' dollars';
}

// es6
function sayHiNew(name, dollars=5) {
	return `Your name is ${name} and you have ${dollars}`;
}



const result = sayHi("Savio", 0);
console.log(sayHiNew('Savio'))

console.log(result);

// Exercise

function convertDollarsToCents(amount, decimals) {
	return amount%100
}

console.log(convertDollarsToCents(10001,0));
