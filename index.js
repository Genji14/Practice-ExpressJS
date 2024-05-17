const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const router = require("./routes/route");

const app = express();

// Dotenv Config
dotenv.config();

// Body Parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// View Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route Config
router(app);

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to the database");
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();