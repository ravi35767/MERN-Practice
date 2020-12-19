const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const DB_URI = 'mongodb+srv://sheri:Ma9fyd3P@cluster0.hxf7k.mongodb.net/ToDoCrudDatabase?retryWrites=true&w=majority';
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false })
    .then((result) => {
        console.log("MongoDB is connected");
    })
    .catch((err) => {
        console.log("Error when connecting to the database");
    });

const port = 5000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})

app.use('/api',taskRoutes);