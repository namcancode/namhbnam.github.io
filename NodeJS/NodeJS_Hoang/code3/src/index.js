const EventEmitter = require("events");
class Customer extends EventEmitter {
	constructor(name, gender) {
		super();
		this.name = name;
		this.gender = gender;
	}
}
const mrJohn = new Customer("John", "male");
const msMary = new Customer("Mary", "female");
const callbackFunction = (foods,customer) => {
	//Đăng ký sự kiện eventCallFoods
	for (let index in foods) {
		console.log(`${customer.name} call ${foods[index]}`);
	}
}
mrJohn.on("eventCallFoods", callbackFunction);
msMary.on("eventCallFoods", callbackFunction);
console.log("Do something...");
mrJohn.emit('eventCallFoods', ['Pizza', 'Salad'], mrJohn)
console.log("Do something...");
msMary.emit('eventCallFoods', ['Coke', 'Sushi'], msMary)
