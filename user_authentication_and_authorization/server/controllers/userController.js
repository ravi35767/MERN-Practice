const User = require('../models/userModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Creating JWT
const maxAge = 1000 * 24 * 60 * 60; // 1 day
const jwt_key = 'website';
const createToken = (id) => {
	return jwt.sign({ id }, jwt_key, {
		expiresIn: '300ms',
	});
};

module.exports.signUp = async (req, res) => {
	try {
		// Encrypting userpassword
		let encryptedPassword = '';
		const salt = await bcryptjs.genSalt();
		encryptedPassword = await bcryptjs.hash(req.body.password, salt);

		const user = {
			name: req.body.name,
			email: req.body.email,
			password: encryptedPassword,
		};
		const newUser = new User(user);
		newUser
			.save()
			.then((user) => {
				// console.log(createToken(user._id));
				return res.status(201).json(user);
			})
			.catch((err) => {
				return res.status(500).json(err);
			});
	} catch (error) {
		return res.status(400).json('There was a problem inserting the data');
	}
};

module.exports.login = async (req, res) => {
	try {
		const existingUser = await User.findOne({ email: req.body.email });
		if (existingUser) {
			const isAuthenticated = await bcryptjs.compare(req.body.password, existingUser.password);
			if (isAuthenticated) {
				const token = createToken(existingUser._id);
				res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
				return res.status(200).json(existingUser);
			}
			return res.status(400).json('Incorrect password');
		}
		return res.status(400).json('Incorrect Email');
	} catch (error) {
		return res.status(400).json('There was a problem In Authentication');
    }
};

module.exports.getUsers = (req, res) => {
	try {
		User.find()
			.then((users) => {
				return res.status(200).json(users);
			})
			.catch((err) => {
				return res.status(500).json(err);
			});
	} catch (error) {
		res.status(400).json('There was a problem retrieving the data');
	}
};

module.exports.logout = (req, res) => {
    // res.cookie('jwt', '', { maxAge: 1 });
    res.clearCookie("jwt");
    return res.status(200).json("successful Logout");
}