import axios from "axios";

const URL = 'http://localhost:5000'

export const sendMessage = async (data)=>{
    try {
        return await axios.post(`${URL}/api/v1/message/add`,data);
    } catch (error) {
        console.log("error while sending the message",error);
    }

}