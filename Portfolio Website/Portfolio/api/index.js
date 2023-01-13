import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import porjectRoute from "./routes/projects.js";
import messageRoute from "./routes/message.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();


const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log ("Database is connected !");

} catch (error) {
    throw error;
}
};

mongoose.connection.on("disconnected",() => {
    console.log("database is disconnected");
});

app.get("/",(req,res)=>{
    res.send("hello req");
})
//middleware

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/project",porjectRoute);
app.use("/api/v1/message",messageRoute);


app.listen(5000, ()=>{
    connect()
    console.log("connected to backend!");
});