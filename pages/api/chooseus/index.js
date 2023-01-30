import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect";
import {
  createChooseUs,
  getAllChooseUs,
} from "../../../controllers/chooseus.js";

const handler = nextConnect();
dbConnect();
handler.post(createChooseUs).get(getAllChooseUs);

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
