import nextConnect from 'next-connect'
import dbConnect from '../../../lib/dbConnect'
import {createRecentTour,getAllRecentTour} from '../../../controllers/recenttour.js'


const handler = nextConnect();
dbConnect();
handler
    .post(createRecentTour)
    .get(getAllRecentTour);

    export const config = {
        api: {
          responseLimit:false,
          bodyParser: {
              sizeLimit: '800mb',
              
          }
      }
      };
export default handler;