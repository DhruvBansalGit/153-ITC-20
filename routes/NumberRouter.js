const express = require('express');
const router = express.Router();
const NumberLogic = require('../logic/numberLogic')
router.get("/",(req,res)=>{
    console.log(req.query);
    const features = new NumberLogic(req.query).filter();
    res.status(200).send(features);
})
module.exports = router;
