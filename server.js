const express = require("express");
const dotEnv = require("dotenv").config();

const app = express();
app.get('/api/contacts',(req, res)=>{
      res.status(200).json({
            message : "Hello I am Senior Flutter Developer",
      });
});

const port = process.env.PORT || 5000;


app.listen(port, ()=> {
      console.log(`Listning to port : ${port}`)
});