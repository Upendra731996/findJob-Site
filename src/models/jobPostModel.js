const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
     
    trim: true,
    },
   
   
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    

    experience :{
        type:String,
        

    },
    skills:{
        type:String,
        
    },
    isdeleted:{
      type:Boolean,
      default:false
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("job", jobPostSchema);
