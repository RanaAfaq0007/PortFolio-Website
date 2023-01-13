import message from "../models/message.js";


export const addMessage = async (req,res)=>{
    const newMessage = new message(req.body);
    try {
        const saveMessage = await newMessage.save();
        res.status(200).json(saveMessage);
    } catch (error) {
        res.status(500).json(error);   
    }
}

export const allMessages = async (req,res) => {
    try {

          const allmsg= await message.find(); 
            
            res.status(200).json(allmsg);
            
          } catch (error) {
            res.status(500).json(error);
          }
  }



export const deleteMessage = async(req,res)=>{
    try {
        const dltMessage  = await message.findByIdAndDelete(req.params.id);
        res.status(200).json ("message is deleted");
    } catch (error) {
        res.status(500).json({message:error,error});   
    }
}