const express = require('express')
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')
const dotenv = require("dotenv");
const app = require("../app");
dotenv.config(`${process.env.TOKEN_KEY}`);
const jwt = require('jsonwebtoken');

require("dotenv").config();


   // This method was Adapted from Section
      // https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
        // Idris Olubisi
        //https://www.section.io/engineering-education/authors/idris-olubisi/
        router.post('/Register_User_Function', (req,res) => {
          bcrypt.hash(req.body.password,10)
          .then(User_hashed_passcode => {
              const user = new User({
                  username: req.body.username,
                  password: User_hashed_passcode
              });
        
              user.save()
              .then(Newly_Created_User => {
                  res.status(201).json({
                      message: 'New User has been Materialized',
                      Newly_Created_User: Newly_Created_User

                  })
              })
              .catch(err => {
                  res.status(500).json({
                      error: err
                  })
              })
          })
        })




       // This method was Adapted from Section
      // https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
        // Idris Olubisi
        //https://www.section.io/engineering-education/authors/idris-olubisi/
  router.post("/login_Function", async (req, res) => {

    try {
      const { username,password} = req.body;

      if (!(username && password)) {
        res.status(400).send("Please Fill All Input Fields");
      }

      const user = await User.findOne({ username });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
      const token = jwt.sign({username:user.username,userid:user._id},
          'secret_this_should_be_longer_than_it_is',
          {expiresIn: '7h'});

        res.json({message:'User is Logged in now',token:token,userid:user._id,username:user.username})

        user.token = token;
        // user
      res.status(200).json({user});
      }
      res.status(400).send("Invalid Input Fields");
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router