// require('dotenv').config({path: './env'}) // but isme require and baki sab me import which is not good code ki consistency ko kharab karta hai

import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})


connectDB()

// import mongoose from 'mongoose'
// import { DB_NAME } from './constants'

// import express from 'express'
// const app = express()

// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERRR:", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("ERROR:", error)
//         throw err
//     }
// })()