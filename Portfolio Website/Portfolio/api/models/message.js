import mongoose  from "mongoose";

const {Schema} = mongoose;

const MessageSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
});

export default mongoose.model("Message",MessageSchema);