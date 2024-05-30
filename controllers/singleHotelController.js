import Hotel from "../model/hotel.model.js";

const singleHotelHandler = async (req,res) =>{
    try {
        const {id} = req.params;
        const hotel = await Hotel.findById(id)
        res.json(hotel)
    } catch (error) {
        res.status(404).json({message :"No hotel found"})
    }
   }

export default singleHotelHandler;   