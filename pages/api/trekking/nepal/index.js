import nextConnect from "next-connect";
import dbConnect from "../../../../lib/dbConnect";
import { getTrekFromNepal } from "../../../../controllers/trekking";

const handler = nextConnect();
dbConnect();
handler.get(getTrekFromNepal);

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
