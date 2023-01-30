import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateBookTrip,
  deleteBookTrip,
  getBookTripById,
} from "../../../controllers/booktrip";

const handler = nextConnect();

dbConnect();
handler.get(getBookTripById).put(updateBookTrip).delete(deleteBookTrip);

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
