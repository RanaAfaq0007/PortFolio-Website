import express from "express";
import { addMessage,  allMessages, deleteMessage } from "../controller/message-controller.js";


const router = express.Router();


router.post('/add',addMessage);
router.get('/all',allMessages);
router.delete('/:id',deleteMessage);




export default router