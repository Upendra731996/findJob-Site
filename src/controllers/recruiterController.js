
const recruiterModels = require("../models/recruiterModel");
const recruiterModels = require("../models/recruiterModels");
// const authorModel = require("../models/authorModel");

//==================== CREATE user FUNCTION ==========================

const createUser = async function (req, res) {

    
  try {
    let data=req.body;
 
    let createData= await recruiterModels.create(data)


return res.status(201).send({status:true,data:createData})



  } catch(err){
return res.status(500).send({status:false,msg:err.message})
  }


}


//============================ get=======



//=======================



const login = async function (req, res) {
    try {
      let email = req.body.email;
      let password = req.body.password;
  
      if (!email || !isValidEmail(email.trim())) {
        return res
          .status(400)
          .send({ status: false, msg: "email is required in a valid format" });
      }
      if (!password || !isValidPassword(password))
        return res.status(400).send({
          status: false,
          msg: "Password is required with these conditions: at least one upperCase, lowerCase letter, one number and one special character",
        });
  
      let checkData = await recruiterModels.findOne({ email: email });
      if (!checkData)
        return res.status(400).send({
          status: false,
          msg: "You're not registered, registered first.",
        });
  
      if (password != checkData.password)
        return res.status(400).send({status: false,msg: "Incorrect password",});
  
      let createToken = jwt.sign(
        {
          authorId: checkData._id.toString(),
          
          organisation: " Xhipment",
        },
        "authors-secret-key"
      );
      return res
        .status(201)
        .send({ status: true,msg:"Token Created Succesfully", data:{ token: createToken }});
    } catch (error) {
      return res.status(500).send({ status: false, msg: error.message });
    }
  };
  
  module.exports.login = login;
  module.exports.createUser = createUser;
  