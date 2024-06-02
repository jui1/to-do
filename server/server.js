const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8000;
const TODOMODEL = require("./models/todo")
app.use(cors());
app.use(express.json());

const dbURI = "mongodb+srv://juimandal31:aRpv2xYgecJksFXo@cluster0.mni9fuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(dbURI, {
 
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});


app.post('/add', (req, res) => {
  const task = req.body.task;

  TODOMODEL.create({
    task:task
  }).then(result =>  res.json(result))
  .catch((err)=>{
    res.json(err)
  })

  app.get("/get" ,(req,res)=>{
    TODOMODEL.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
  })
  
  
  
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
