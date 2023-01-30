import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
 updatePopularDestination,
 getPopularDestination,
 deletePopularDestination
} from "../../../controllers/populardestination.js";

const handler = nextConnect();

dbConnect();
handler.get(getPopularDestination).put(updatePopularDestination).delete(deletePopularDestination);
export const config = {
  api: {
    responseLimit:false,
    bodyParser: {
        sizeLimit: '800mb',
        
    }
}
};
export default handler;
