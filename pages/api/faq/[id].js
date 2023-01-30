import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import { updateFaq, deleteFaq, getFaq } from "../../../controllers/faq";

const handler = nextConnect();

dbConnect();
handler.get(getFaq).put(updateFaq).delete(deleteFaq);

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
