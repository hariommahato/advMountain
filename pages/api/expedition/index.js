import nextConnect from 'next-connect'
import dbConnect from '../../../lib/dbConnect'
import {createExpedition,getAllExpedition} from '../../../controllers/expedition'


const handler = nextConnect();
dbConnect();
handler
    .post(createExpedition)
    .get(getAllExpedition);

    export const config = {
        api: {
            responseLimit: false,
            bodyParser: {
              sizeLimit: "800mb",
            },
          },
        };
export default handler;