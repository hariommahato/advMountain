import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect";
import { createBookTrip,getAllBookTrip} from "../../../controllers/booktrip";

const handler = nextConnect();
dbConnect();
handler.post(createBookTrip).get(getAllBookTrip);
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "100000mb",
    },
  },
};

export default handler;
