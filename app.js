const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require ('./Routers/index');

const localUrl = 'mongodb://127.0.0.1:27017/Restaurant_app';
const cloudUrl = 'mongodb+srv://Nisha:pass_1234@cluster0.yfuby.mongodb.net/My_app?retryWrites=true&w=majority';

const port = 2024;
const host = 'localhost'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

mongoose.connect(cloudUrl,
     {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(port, host, () => {
        console.log(`server running at ${host}:${port}`)
    });
})
.catch()