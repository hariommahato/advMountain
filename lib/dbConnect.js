import mongoose from 'mongoose'


const dbConnect = async () => {
    mongoose.set(`strictQuery`,false)
    if (!mongoose.connection.readyState) {
        try {
        
            await mongoose.connect("mongodb+srv://adventure:adventure@cluster0.n7x10dx.mongodb.net/?retryWrites=true&w=majority");
        } catch (error) {
            handleError(error);
        }
    }
}


export default dbConnect;