import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateDayExcursion,
  deleteDayExcursion,
  getDayExcursionById,
} from "../../../controllers/dayexcursion";

const handler = nextConnect();

dbConnect();
handler.get(getDayExcursionById).put(updateDayExcursion).delete(deleteDayExcursion);
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
