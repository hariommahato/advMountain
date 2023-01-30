import mongoose from "mongoose";

const aboutUsSchema=new mongoose.Schema({
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

export default mongoose.models?.AboutUs || mongoose.model("AboutUs", aboutUsSchema);