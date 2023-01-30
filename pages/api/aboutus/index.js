import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect";
import { createAboutUs, getAllAboutUs } from "../../../controllers/aboutus.js";

const handler = nextConnect();
dbConnect();
handler.post(createAboutUs).get(getAllAboutUs);

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit:"800mb",
    },
  },
};

export default handler;
