require("dotenv").config();
const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors");
const mongoose = require("mongoose");
const hospitalModel = require("./db/model/hospital.model");
const userModel = require("./db/model/user.model");

const { MONGO_URL, PORT = 6789 } = process.env;

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
res.send("hello")
})

app.post("/api/newUser/", async (req, res, next) => {
  const user = req.body;

  try {
    const saved = await userModel.create(user);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

app.patch("/api/user/:id", async (req, res, next) => {
  const user = req.body;
  try {
    const updated = await req.user.set(user).save();
    return res.json(updated);
  } catch (err) {
    return next(err);
  }
});

app.delete("/api/user/:id", async (req, res, next) => {
  try {
    const deleted = await req.userModel.remove();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});



const main = async () => {
  mongoose.set('strictQuery', true)
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log("App is listening on http://localhost:6789");
    });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});