import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updatePeakClimbing,
  deletePeakClimbing,
  getPeakClimbingById,
} from "../../../controllers/peakclimbing";

const handler = nextConnect();

dbConnect();
handler.get(getPeakClimbingById).put(updatePeakClimbing).delete(deletePeakClimbing);
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "1000000mb",
    },
  },
};
export default handler;
