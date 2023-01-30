import nextConnect from "next-connect";
import dbConnect from "../../../../lib/dbConnect";
import { getDayExcursionFromBhutan } from "../../../../controllers/dayexcursion";

const handler = nextConnect();
dbConnect();
handler.get(getDayExcursionFromBhutan);

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
