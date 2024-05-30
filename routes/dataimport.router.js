import express from "express";
import Hotel from "../model/hotel.model.js";
import hotels from "../data/hotels.js";

const router = express.Router();

router.route("/")
  .post(async(req,res) => {
    try {
        await Hotel.deleteMany();
        const hotelsInDB = await Hotel.insertMany(hotels.data)
        res.json(hotelsInDB)
    } catch (error) {
        console.log(error)
        res.json({message: "Could Not Add Data to DB"})
    }
    
})

export default router;