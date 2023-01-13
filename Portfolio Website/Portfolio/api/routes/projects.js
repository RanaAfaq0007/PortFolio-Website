import  express  from "express";
import { addProject, deleteProject, getProject, getProjects, updateUser } from "../controller/project-controller.js";


const router = express.Router();



//Create 
  router.post("/add",addProject);
// Update
router.put("/:id",updateUser);
//Delete
router.delete("/:id",deleteProject);
//Get

router.get("/all",getProjects);

//get a single project

router.get("/:id",getProject);

export default router