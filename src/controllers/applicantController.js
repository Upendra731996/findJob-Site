const applicantModel= require('../models/applicantModel')


//======================
const applicant = async function (req, res) {

    
    try {
      let data=req.body;
   
      let createData= await applicantModel.create(data)
  
  
  return res.status(201).send({status:true,data:createData})
  
  
  
    } catch(err){
  return res.status(500).send({status:false,msg:err.message})
    }
  
  
  }
  

//=========================

module.exports.applicant=applicant