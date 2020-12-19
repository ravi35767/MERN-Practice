const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name should not be empty'],
		},
		email: {
			type: String,
			required: [true, 'Email should not be empty'],
		},
		password: {
			type: String,
			required: [true, 'Password should not be empty'],
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('users', userSchema);

module.exports = User;
