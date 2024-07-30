const mongoose=require("mongoose");
//Password="GXciNUCe7P48mZFX"
//username="rp9936123"
const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://rp9936123:GXciNUCe7P48mZFX@mern-ai.sbbewt3.mongodb.net/mern-ai?retryWrites=true&w=majority&appName=mern-ai");
        console.log("Mongoose is Connected")
    } catch(err){
        console.log(`${err.message}`);
        process.exit(1);
    }
}
module.exports=connectDB;