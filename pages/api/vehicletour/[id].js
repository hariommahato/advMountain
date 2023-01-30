import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect.js";
import {
  updateVehicleTour,
  deleteVehicleTour,
  getAllVehicleTourById,
} from "../../../controllers/vehicletour";

const handler = nextConnect();

dbConnect();
handler.get(getAllVehicleTourById).put(updateVehicleTour).delete(deleteVehicleTour);
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "800mb",
    },
  },
};
export default handler;
