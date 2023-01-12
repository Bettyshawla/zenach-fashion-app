const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    title: String,
    description: String, 
    color: String, 
    size: String, 
    name: String, 
    email: String, 
    phone: String, 
  });
  
const Post = mongoose.model("Post", postSchema);




router.get("/", (req, res) => {
    res.send("express is working");
  });
  
  router.post("/create", (req, res) => {
    Post.create({
      title: req.body.title,
      description: req.body.description,
      color: req.body.color,
      size: req.body.size,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });
  
  router.get("/special", (req, res) => {
    Post.find()
      .then((items) => res.json(items))
      .catch((err) => console.log(err));
  });
  
  router.delete("/delete/:id", (req, res) => {
    Post.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });
  
  router.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        description: req.body.description,
        color: req.body.color,
        size: req.body.size,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
      }
    )
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });
  
module.exports = router
// test