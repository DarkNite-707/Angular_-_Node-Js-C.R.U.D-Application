const express = require('express')
const router = express.Router();
const Post = require('../models/post')
const checkauth = require('../check-auth')


router.get('',(req,res) => {
 
        Post.find().then((posts) => {
        res.json(
        {
         message: 'Posts found',
         posts:posts
         }
         )
         })
        })
 

         // This method was Adapted from Youtube
   //https://www.youtube.com/watch?v=mbsmsi7l3r4
        // Web Dev Simplified
       // https://www.youtube.com/c/WebDevSimplified
router.post('', checkauth, (req,res)=> { 
    const post = new Post(
    {
    id: req.body.id,
    name: req.body.name,
    // type: req.body.type

    }
     )
    post.save().then(()=>{
     res.status(201).json({
    message:'Post has Been Materialized',
    post:post
     })

 })

})

 router.delete('/:id',checkauth, (req,res) => { 
            Post.deleteOne({_id: req.params.id})
            .then((result)=>
           {
            res.status(200).json({message: "Post Deleted"});
            });

            })

module.exports = router