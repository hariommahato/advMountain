import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateHiking,
  deleteHiking,
  getHikingById,
} from "../../../controllers/hiking";

const handler = nextConnect();

dbConnect();
handler.get(getHikingById).put(updateHiking).delete(deleteHiking);
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
