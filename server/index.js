require('dotenv').config()
const { json } = require('express');
const express = require('express')
const cors = require('cors');
const connectToMongo = require('./DataBase/db');

const app = express();

app.use(json());
app.use(cors());
connectToMongo();
const PORT = process.env.PORT || 5000;
app.use("/api/auth", require('./Routes/auth.js'));

app.use("/api/profile", require('./Routes/profile.js'));


app.listen(PORT, () => {
    console.log(`Backend is listening on https://localhost:${PORT}`);
})