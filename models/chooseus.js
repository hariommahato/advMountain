import mongoose from "mongoose";

const chooseUsSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
  
},{timestamps:true})

export default mongoose.models?.ChooseUs || mongoose.model("ChooseUs", chooseUsSchema);