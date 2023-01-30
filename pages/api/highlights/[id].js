import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect";
import {
  updateHighlight,deleteHighlight,getHighlight
} from "../../../controllers/highlights";

const handler = nextConnect();

dbConnect();
handler.get(getHighlight).put(updateHighlight).delete(deleteHighlight);
export const config = {
  api: {
    responseLimit:false,
    bodyParser: {
        sizeLimit: '800mb',
        
    }
}
};

export default handler;
