const express = require("express");
const router = express.Router();
const jobPostController=require('../controllers/jobPostController')
const recruiterController= require('../controllers/recruiterController')


router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});
router.post("/recruiter", recruiterController.createUser)
router.post("/createJOB", jobPostController.createJobPst)
router.put("/updateJob", jobPostController.updateJob)






module.exports = router;