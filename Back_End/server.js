const http = require('https');
const app = require ('./app');
const fs = require ('fs');

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

const port = 3000




const server = http.createServer(
{

key: fs.readFileSync('keys/privatekey.pem'),
cert: fs.readFileSync('keys/certificate.pem')

}, app);



server.listen(port)