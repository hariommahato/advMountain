import mongoose from "mongoose";

const ourServicesSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
},{timestamps:true})


export default mongoose.models?.OurServices || mongoose.model("OurServices", ourServicesSchema);
