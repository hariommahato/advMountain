import nextConnect from 'next-connect'
import dbConnect from '../../../lib/dbConnect'
import {createDayExcursion,getAllDayExcursion} from '../../../controllers/dayexcursion'


const handler = nextConnect();
dbConnect();
handler
    .post(createDayExcursion)
    .get(getAllDayExcursion);

    export const config = {
        api: {
            responseLimit: false,
            bodyParser: {
              sizeLimit: "800mb",
            },
          },
        };
export default handler;