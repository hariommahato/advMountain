import nextConnect from 'next-connect'
import dbConnect from '../../../lib/dbConnect'
import {createCarousel,getAllCarousel} from '../../../controllers/herocarousel'

const handler = nextConnect();
dbConnect();
handler
    .post(createCarousel)
    .get(getAllCarousel);

    export const config = {
        api: {
          responseLimit:false,
          bodyParser: {
              sizeLimit: '800mb',
              
          }
      }
      };

export default handler;