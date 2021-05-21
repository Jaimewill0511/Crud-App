const express = require('express');
const app = express();
const dbSetup = require("./database/setup");
const routes = require("./routes/routes");

app.use(express.json()) 


dbSetup()

app.use(routes)

app.use(express.static("public"));
app.use(express.urlencoded(
  { extended: true }
));//pass information from an html file to a Server using a body parser



app.listen(process.env.PORT  || 3000 , function () {
  console.log("The Server has started on port 3000");
});