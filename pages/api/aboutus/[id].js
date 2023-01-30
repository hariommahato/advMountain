import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateAboutUs,
  deleteAboutUs,
  getAboutUs,
} from "../../../controllers/aboutus.js";
const handler = nextConnect();

dbConnect();
handler.get(getAboutUs).put(updateAboutUs).delete(deleteAboutUs);
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit:"800mb",
    },
  },
};

export default handler;
