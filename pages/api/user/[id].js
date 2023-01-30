import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateUser,deleteUser,getUser
} from "../../../controllers/user";


const handler = nextConnect();

dbConnect();
handler.get(getUser).put(updateUser).delete(deleteUser);
export const config = {
  api: {
    responseLimit:false,
    bodyParser: {
        sizeLimit: '800mb',
        
    }
}
};
export default handler;
