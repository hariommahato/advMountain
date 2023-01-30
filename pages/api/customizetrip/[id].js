import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateCustomizeTrip,
  deleteCustomizeTrip,
  getCustomizeTripById,
} from "../../../controllers/customizetrip";

const handler = nextConnect();

dbConnect();
handler.get(getCustomizeTripById).put(updateCustomizeTrip).delete(deleteCustomizeTrip);

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
