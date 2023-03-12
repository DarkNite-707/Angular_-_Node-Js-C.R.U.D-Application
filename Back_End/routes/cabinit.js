const express = require('express')
const router = express.Router();
const Cabinit = require('../models/cabinit')
const checkauth = require('../check-auth')


router.get('',(req,res) => {
 
    Cabinit.find().then((cabinits) => {
        res.json(
        {
         message: 'Cabinits found',
         cabinits:cabinits
        }
         )
         })
        })
 
 // This method was Adapted from Youtube
   //https://www.youtube.com/watch?v=mbsmsi7l3r4
        // Web Dev Simplified
       // https://www.youtube.com/c/WebDevSimplified

router.post('', checkauth, (req,res)=> { 
    const cabinit = new Cabinit(
    {
    id: req.body.id,
    name: req.body.name
    }
     )
     cabinit.save().then(()=>{
     res.status(201).json({
    message:'Cabinit has Been Materialized',
    cabinit:cabinit
     })

 })

})

 router.delete('/:id', checkauth, (req,res) => { 
         Cabinit.deleteOne({_id: req.params.id})
            .then((result)=>
           {
            res.status(200).json({message: "Cabinit Deleted"});
            });

            })

module.exports = router