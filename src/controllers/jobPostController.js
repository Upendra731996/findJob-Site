const jobPostModel= require('../controllers/jobPostController')

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
    


let updateData= await jobPostModel.findOne({email:data.email,data,new:true})

return  res.status(200).send({status: true, data:updateData})


   }
   catch(err) { return res.status(500).send({status: false, message: err.message})}




}






module.exports.getJob=getJob
module.exports.updateJob=updateJob