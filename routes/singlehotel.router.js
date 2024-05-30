import express from "express";
const router = express.Router();


import singleHotelHandler from "../controllers/singleHotelController.js";

router.route("/:id")
   .get(singleHotelHandler)
   
   
   
export default router;