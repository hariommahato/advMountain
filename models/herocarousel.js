import mongoose from "mongoose";

const carouselSchema=new mongoose.Schema({
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

export default mongoose.models?.Carousel || mongoose.model("Carousel", carouselSchema);
