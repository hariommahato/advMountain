import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateTestimonial,deleteTestimonial,getTestimonial
} from "../../../controllers/testimonial";


const handler = nextConnect();

dbConnect();
handler.get(getTestimonial).put(updateTestimonial).delete(deleteTestimonial);
export const config = {
  api: {
    responseLimit:false,
    bodyParser: {
        sizeLimit: '800mb',
        
    }
}
};
export default handler;
