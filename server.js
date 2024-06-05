import express from "express";
import router from "./routes/hotel.router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import connectDB from "./config/dbconfig.js";
import hotelDataAddedToDBRouter from "./routes/dataimport.router.js";
import categoryAddedToDBRouter from "./routes/categoryimport.router.js "
import categoryRouter from "./routes/category.router.js"
import singleHotelRouter  from "./routes/singlehotel.router.js"
import authRouter from "./routes/auth.router.js"
import wishlistRouter from  "./routes/wishlist.route.js"

const hotelRouter = router;


const app = express();
app.use(cors())
app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/", (req, res) => {
    res.send("Hello")
})
app.use("/api/hoteldata", hotelDataAddedToDBRouter )
app.use("/api/categorydata", categoryAddedToDBRouter)
app.use("/api/hotels", hotelRouter)
app.use("/api/category", categoryRouter)
app.use("/api/hotels", singleHotelRouter)
app.use("/api/auth", authRouter)
app.use("/api/wishlist", wishlistRouter)

mongoose.connection.once("open", ()=> {
    console.log("Connected to DB")
    app.listen(process.env.PORT || PORT , ()=>{
        console.log("Server is Up and Running ")
    })
})

