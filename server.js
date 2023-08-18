const express = require("express");
const dotEnv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;


app.listen(port, ()=> {
      console.log(`Listning to port : ${port}`)
});