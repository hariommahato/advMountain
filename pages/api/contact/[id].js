import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateContact,
  deleteContact,
  getContactById,
} from "../../../controllers/contact";

const handler = nextConnect();

dbConnect();
handler.get(getContactById).put(updateContact).delete(deleteContact);

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
