const mongoose = require('mongoose');

const DrinkSchema = new mongoose.Schema({
	name: {
		type: String
	},
	flavor: {
		type: String
	}
});


const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = Drink;