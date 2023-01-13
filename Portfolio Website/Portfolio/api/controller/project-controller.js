import project from "../models/project.js";

export const addProject = async (req,res) => {
    const newProject = new project(req.body);     
    
    try {

           const savedProject = await newProject.save();
            res.status(200).json(savedProject);
            
          } catch (error) {
            res.status(500).json(error);
          }
  }

  export const updateUser = async (req,res) => {
     
    
    try {

           const updatedProject = await project.findByIdAndUpdate(req.params.id, 
            {$set:req.body},
            {new:true}
            
            );
            res.status(200).json(updatedProject);
            
          } catch (error) {
            res.status(500).json(error);
          }
  }

  export const deleteProject = async (req,res) => {
    try {

           await project.findByIdAndDelete(
            req.params.id,  
            );
            res.status(200).json("Hotel is deleted");
            
          } catch (error) {
            res.status(500).json(error);
          }
  }

  export const getProjects = async (req,res) => {
    try {

          const allProjects = await project.find(); 
            
            res.status(200).json(allProjects);
            
          } catch (error) {
            res.status(500).json(error);
          }
  }

  export const getProject = async (req,res) =>{
    try {
        const projectById = await project.findById(req.params.id)
        res.status(200).json(projectById);
    } catch (error) {
        res.status(500).json(error);
    }
  }