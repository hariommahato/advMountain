import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateRecentTour,deleteRecentTour,getRecentTour
} from "../../../controllers/recenttour.js";

const handler = nextConnect();

dbConnect();
handler.get(getRecentTour).put(updateRecentTour).delete(deleteRecentTour);
export const config = {
  api: {
    responseLimit:false,
    bodyParser: {
        sizeLimit: '800mb',
        
    }
}
};
export default handler;
