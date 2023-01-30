import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateExpedition,
  deleteExpedition,
  getExpeditionById,
} from "../../../controllers/expedition";

const handler = nextConnect();

dbConnect();
handler.get(getExpeditionById).put(updateExpedition).delete(deleteExpedition);
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
