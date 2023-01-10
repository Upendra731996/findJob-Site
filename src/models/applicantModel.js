const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema(
  {
   name:{
    type:String,
    require:true
   }
   ,
   
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    
resume:{
    type:String,
    required: true,

    
},
coverLetter:{
  type: String,
  
}
   

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("applicant", applicantSchema);
