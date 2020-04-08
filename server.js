const express = require("express")
const app = express();
const routers = require("./routers/index")
const dotenv = require("dotenv").config()
const connectDatabase = require("./helpers/connectDatabase") 
const PORT = process.env.PORT;

connectDatabase();

//Middlewares
app.use(express.json())
app.use("/api", routers)



app.listen(PORT, () => {
    console.log("SERVER STARTED: " , PORT)
})