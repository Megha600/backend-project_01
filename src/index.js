// require('dotenv').config({path: './env'}) // but isme require and baki sab me import which is not good code ki consistency ko kharab karta hai

import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERRR:", error)
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server Started at port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGODB Connection Failed", error)
})