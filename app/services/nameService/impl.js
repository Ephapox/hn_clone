export default class RandomNames {
	constructor() {
		this.names = ["Eric", "John", "Michelle", "Jane", "Pat"];
	}

	getName() {
		const rand = Math.floor(Math.random() * this.names.length);
		return this.names[rand];
	}
}
