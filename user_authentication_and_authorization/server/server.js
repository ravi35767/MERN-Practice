const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

require('dotenv').config();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log('MongoDB is connected');
});

// app.get('/', (req, res) => {
// 	res.send('Hello It works');
// });

app.use('/api', userRoutes);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
