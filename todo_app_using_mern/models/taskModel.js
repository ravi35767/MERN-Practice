const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
	{
		taskName: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Task = model('tasks', taskSchema);

module.exports = Task;
