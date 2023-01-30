import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect";
import { createCustomizeTrip,getAllCustomizeTrip} from "../../../controllers/customizetrip";

const handler = nextConnect();
dbConnect();
handler.post(createCustomizeTrip).get(getAllCustomizeTrip);
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "100000mb",
    },
  },
};

export default handler;
