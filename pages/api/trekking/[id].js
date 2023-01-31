import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateTrek,
  deleteTrek,
  getTrek,
} from "../../../controllers/trekking.js";

const handler = nextConnect();

dbConnect();
handler.get(getTrek).put(updateTrek).delete(deleteTrek);
export const config = {
  api: {
    responseLimit: "800mb",
  },
};
export default handler;
