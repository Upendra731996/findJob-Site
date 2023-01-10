const express = require("express");
const router = express.Router();
const jobPostController=require('../controllers/jobPostController')
const recruiterController= require('../controllers/recruiterController')


router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});
router.post("/recruiter", recruiterController.createUser)
router.put("/update", jobPostController.updateJob)






module.exports = router;