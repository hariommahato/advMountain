import nextConnect from "next-connect";
import dbConnect from "../../../../lib/dbConnect";
import { getVehicleTourFromTibet } from "../../../../controllers/vehicletour";

const handler = nextConnect();
dbConnect();
handler.get(getVehicleTourFromTibet);

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
