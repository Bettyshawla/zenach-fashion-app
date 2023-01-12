require('dotenv').config()
const path = require("path")
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const router = require("./router/post");
const connectDatabase = require('./config/database');
// require("./config/database")


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectDatabase()


app.use("/api", (router))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
