const express = require("express");
const cors = require("cors");
require("dotenv").config();
const con = require("./db/connect");

con.createConnection();
const app = express();

app.use(cors());
app.use(express.json());


app.listen(3000, (a) => {
    console.log("conectado");
});