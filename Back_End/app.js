const express = require('express')
const app = express()
const urlprefix = '/api'
const mongoose = require('mongoose')
const Fruit = require('./models/fruit')
const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
server: { sslCA: cert }};
const connstring = 'mongodb+srv://st10119186_APDS7311:Masshold32@cluster0.65pvmqp.mongodb.net/?retryWrites=true&w=majority'
const helmet = require('helmet');
const morgan= require('morgan');


const dotenv = require("dotenv");
dotenv.config(`${process.env.TOKEN_KEY}`);




const fruitRoutes = require('./routes/fruit');
const userRoutes = require('./routes/user');
const postRoutes = require("./routes/post");
const cabinitRoutes = require("./routes/cabinit");


// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

mongoose.connect(connstring)
.then(()=>
{
console.log('Connected :-)')
})
.catch(()=>
{
console.log('NOT connected :-(')

},options);

var ExpressBrute = require('express-brute');
 

// This method was adapted from npmjs
// https://www.npmjs.com/package/express-brute

var store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
var bruteforce = new ExpressBrute(store);
 
app.post('/auth',
    bruteforce.prevent, // error 429 if we hit this route too often
    function (req, res, next) {
        res.send('Success!');
    }
);

app.use(express.json())
 

// This method was adapted from Geeksforgeeks
// https://www.geeksforgeeks.org/what-is-morgan-in-node-js/

app.use(morgan('dev'));


// This method was adapted from Geeksforgeeks
// https://www.geeksforgeeks.org/node-js-securing-apps-with-helmet-js/

app.use(helmet());

app.use((reg,res,next)=>
{
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
res.setHeader('Access-Control-Allow-Methods','*');
next();
});

app.get(urlprefix+'/', (req,res) => {
    res.send('Hello World')
    })

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
    app.use(urlprefix+'/fruits',fruitRoutes);
    app.use(urlprefix+'/users', userRoutes);
    app.use(urlprefix+'/posts',postRoutes);
    app.use(urlprefix+'/cabinits',cabinitRoutes);




module.exports = app;
    


