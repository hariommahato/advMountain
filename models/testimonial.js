import mongoose from "mongoose";

const testimonialSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    }
},{timestamps:true})

export default mongoose.models?.Testimonial || mongoose.model("Testimonial", testimonialSchema);
