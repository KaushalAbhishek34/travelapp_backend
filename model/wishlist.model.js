import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    hotelID: { type: String , required : true}
})

const Wishlist = mongoose.model("Wishlist", wishlistSchema)

export default Wishlist;