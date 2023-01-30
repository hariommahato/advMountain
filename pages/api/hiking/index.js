import nextConnect from 'next-connect'
import dbConnect from '../../../lib/dbConnect'
import {createHiking,getAllHiking} from '../../../controllers/hiking'


const handler = nextConnect();
dbConnect();
handler
    .post(createHiking)
    .get(getAllHiking);

    export const config = {
        api: {
            responseLimit: false,
            bodyParser: {
              sizeLimit: "800mb",
            },
          },
        };
export default handler;