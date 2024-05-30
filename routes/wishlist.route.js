import express from "express";
import verifyUser from "../middleware/verifyuser.js";
import { createWishlistHandler, getWishlistHandler, deleteWishlistHandler } from "../controllers/wishlistController.js";

const router = express.Router()

router.route("/")
   .post(verifyUser ,createWishlistHandler  )

router.route("/:id")
    .delete(verifyUser ,getWishlistHandler) 
    
router.route("/")
    .get(verifyUser ,deleteWishlistHandler)    



export default router;