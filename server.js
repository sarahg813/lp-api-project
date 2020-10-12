const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const petfinderRouter = require("./routes/api/petfinder");

// creates express server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.json());

// routes
app.use("/api/petfinder", petfinderRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
