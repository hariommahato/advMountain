import mongoose from "mongoose";

const popularDestiantionSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
  
},{timestamps:true})

export default mongoose.models?.popularDestination || mongoose.model("popularDestination", popularDestiantionSchema);
