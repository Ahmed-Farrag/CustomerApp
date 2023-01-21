const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to db 
mongoose.connect('mongodb://localhost/addy', {useNewUrlParser: true})
.then(()=>console.log('connected to DB Server...'))
.catch(err=>console.log('connected to DB Server Faild'))

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use("/css", express.static(__dirname + "/nodemodules/bootstrap/dist/css"));
app.use("/public", express.static(__dirname + "/public"));


app.use('/api/customer', customers)

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => console.log(`Listening to port ${PORT}`, err));
