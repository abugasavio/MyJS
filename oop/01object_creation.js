function createPerson(name, age, profession) {
	var person = new Object();
	person.name = name;
	person.age = age;
	person.profession = profession;
	person.sayName = function() {
		alert(this.name);
	};
	return person;
}

var savio = createPerson('Savio', 29, 'Software Developer');
console.log(savio);
console.log(savio instanceof Object);

function Person(name, age, profession) {
	this.name = name;
	this.age = age;
	this.profession = profession;
	this.sayName = function() {
		alert(this.name);
	};
}

var michael = new Person('Michael', 39, 'Electrical Engineer');
console.log(michael);
console.log(michael instanceof Person);
