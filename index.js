const path = require('path');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const errorHandler = require('./middlewares/errorHandler');
const postRouters = require('./routes/post');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/api/post', postRouters);
app.use(errorHandler);

app.listen(8000, () =>{
  console.log("Listening port 8000");
})
