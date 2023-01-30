import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateOurServices,deleteOurServices,getOurServices
} from "../../../controllers/ourservices.js";

const handler = nextConnect();

dbConnect();
handler.get(getOurServices).put(updateOurServices).delete(deleteOurServices);
export const config = {
  api: {
    responseLimit:false,
    bodyParser: {
        sizeLimit: '800mb',
        
    }
}
};
export default handler;
