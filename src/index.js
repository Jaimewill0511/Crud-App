const express = require('express');
const app = express();
const dbSetup = require("./database/setup");
const routes = require("./routes/routes");
require('dotenv').config();
const  {PORT} = process.env;

app.use(express.json()) 


dbSetup()

app.use(routes)

app.use(express.static("public"));
app.use(express.urlencoded(
  { extended: true }
));//pass information from an html file to a Server using a body parser


const port = process.env.PORT || PORT
app.listen( port,  () => {
  
  console.log(`app is working on port ${port}`);
});