const express = require('express');

const router = express.Router();


// @route  GET api/posts/tests
//@desc Tests post route
//acsess Public

router.get('/test',(req, res) => res.json({msg:"Posts====works hello there!"}))

module.exports = router;
