const express = require('express');
require('dotenv').config()

const userRoutes = require("./src/routes/user")

const app = express();

app.use(express.json())
app.use('/user',userRoutes)



app.listen(process.env.PORT,() =>{
    console.log(`Server is listening on PORT ${process.env.PORT}`)
})
