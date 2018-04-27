const express = require('express');

const router = express.Router();

// @route  GET api/profile/tests
//@desc Tests profile  route
//acsess Public


router.get('/test',(req, res) => res.json({msg:"'Profile ROUTER works' hello there!"}))

module.exports = router;
