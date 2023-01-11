const jobPostModel= require('../models/jobPostModel')


//======================
const createJobPst = async function (req, res) {

    
    try {
      let data=req.body;
   
      let createData= await jobPostModel.create(data)
  
  
  return res.status(201).send({status:true,data:createData})
  
  
  
    } catch(err){
  return res.status(500).send({status:false,msg:err.message})
    }
  
  
  }
  

//=========================

const getJob = async function(req,res) {
    try{
        let data = req.query
        let filter={}
        if(data.skills){
            filter.skills=data.skills
        }
        if(data.experience){
            filter.experience=data.experience
        }
    
       
        let job = await jobPostModel.find(filter)
        
        if(job.length == 0) return res.status(404).send({status:false,message:'No such job exist'})
        
         res.status(200).send({status:true,message:'Success',data:job})
        

    }catch(err) { return res.status(500).send({status: false, message: err.message})}
}


let updateJob= async function(req,res){
   try{

    let data= req.body

    let check= await jobPostModel.findOne({email:data.email})
    
if(!check){
    return res.send({status:false,msg:"data not found"})
}

let updateData= await jobPostModel.findOneAndUpdate({email:data.email,check:data})

return  res.status(200).send({status: true, data:updateData})


   }
   catch(err) { return res.status(500).send({status: false, message: err.message})}




}






module.exports.getJob=getJob
module.exports.updateJob=updateJob
module.exports.createJobPst=createJobPst;