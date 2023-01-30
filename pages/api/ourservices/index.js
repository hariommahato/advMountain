import nextConnect from 'next-connect'
import dbConnect from '../../../lib/dbConnect'
import {createOurServices,getAllOurServices} from '../../../controllers/ourservices.js'


const handler = nextConnect();
dbConnect();
handler
    .post(createOurServices)
    .get(getAllOurServices);

    export const config = {
        api: {
          responseLimit:false,
          bodyParser: {
              sizeLimit: '800mb',
              
          }
      }
      };
export default handler;