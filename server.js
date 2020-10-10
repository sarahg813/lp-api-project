const express = require("express");
const cors = require("cors");
require("dotenv").config();

// creates express server
const app = express();

//middleware
app.use(cors());

//starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
