const express = require('express');
const router = express.Router();
const NumberLogic = require('../logic/numberLogic')
router.get("/",async (req,res)=>{
    console.log(req.query);
    const features = new NumberLogic(req.query).filter();
    console.log(features);
    const ans = await features;
    console.log(ans)
    res.status(200).json({
        data:{
            ans,
        }
    });
    setTimeout(() => res.status.send("timeout"), 500);
})
module.exports = router;
