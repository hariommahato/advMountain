import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect";
import { createContact,getAllContact} from "../../../controllers/contact";

const handler = nextConnect();
dbConnect();
handler.post(createContact).get(getAllContact);
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "100000mb",
    },
  },
};

export default handler;
