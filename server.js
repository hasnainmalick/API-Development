const express = require('express');
require('dotenv').config()

const app = express();

app.use(express.json())

app.get("/",(req,res) =>{
    res.send("Hello from backend")
})

app.listen(process.env.PORT,() =>{
    console.log(`Server is listening on PORT ${process.env.PORT}`)
})
