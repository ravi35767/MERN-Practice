const Task = require('../models/taskModel');

module.exports.addTask = (req, res) => {
	try {
		const taskObject = new Task(req.body);
		taskObject
			.save()
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((error) => {
				console.log('error : ', error);
			});
	} catch (error) {
		res.status(400).json({ error_msg: 'Error Inserting the Data' });
	}
};

module.exports.getTasks = (req, res) => {
	try {
		Task.find({})
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((error) => {
				console.log('error : ', error);
			});
	} catch (error) {
		res.status(400).json({ error: 'There was a problem retrieving the data' });
	}
};

module.exports.updateTask = (req, res) => {
	try {
		const taskID = req.params.id;
		if (taskID === null) {
			return res.status(500).json({ error_msg: 'No records associated with this ID' });
		}
		Task.findByIdAndUpdate(taskID, req.body, (err) => {
			if (err) {
				res.status(500).json({ error: 'Error Updating the record' });
			} else {
				res.status(200).json({ msg: 'Record Updated Successfully' });
			}
		});
	} catch (error) {
		res.status(400).json({ error: 'There was a problem Updating the data' });
	}
};

module.exports.deleteTask = (req, res) => {
	try {
		const taskID = req.params.id;
		if (taskID === null) {
			return res.status(500).json({ error_msg: 'No records associated with this ID' });
		}
		const deletedTask = Task.findByIdAndDelete(taskID, (err) => {
			if (err) {
				res.status(500).json({ error: 'Error Deleting the record' });
			} else {
				res.status(200).json({ msg: 'Record Deleted Successfully' });
			}
		});
	} catch (error) {
		res.status(400).json({ error: 'Error Deleting the record' });
	}
};
