import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect";
import {
  updateCarousel,deleteCarousel,getCarousel
} from "../../../controllers/herocarousel";

const handler = nextConnect();

dbConnect();
handler.get(getCarousel).put(updateCarousel).delete(deleteCarousel);
export const config = {
  api: {
    responseLimit:false,
    bodyParser: {
        sizeLimit: '800mb',
        
    }
}
};

export default handler;
