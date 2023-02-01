require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const mongoose = require("mongoose");
const hospitalModel = require("./db/model/hospital.model");
const userModel = require("./db/model/user.model");

const { MONGO_URL, PORT = 6789 } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello")
})

app.post("/api/newUser/", async (req, res, next) => {
  const findUser = await userModel.find({ username: req.body.username })
  const findEmail = await userModel.find({ email: req.body.email })

  if (findUser.length != 0) {
    res.send("Name already taken.")
    return
  }
  if (findEmail.length != 0) {
    res.send("Email already taken.")
    return
  }

  req.body["admin"] = false;
  req.body["hospitals"] = [];
  const addedUser = new userModel(req.body)
  return addedUser.save().then(value => res.redirect('http://localhost:3000/login'))
});

app.patch("/api/user/:id", getUser, async (req, res, next) => {
  if (req.body.name !== undefined)
    res.user.name = req.body.name
  if (req.body.hospitals !== undefined)
    res.user.hospitals = req.body.hospitals
  if (req.body.password !== undefined)
    res.user.password = req.body.password
  if (req.body.admin !== undefined)
    res.user.admin = req.body.admin
  try {
    const updatedUser = await res.user.save()
    res.send(updatedUser)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

app.delete("/api/user/:id",getUser, async (req, res, next) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted user" });
} catch (err) {
    res.status(500).json({ message: err.message });
}
})


app.post("/api/login/", async (req, res, next) => {
  const findUser = await userModel.find({ username: req.body.username })

  if (findUser.length === 0) {
    res.json({ message: "User not existing" })
    return
  }
  console.log(findUser);
  let user = []
  findUser.length != 0 ? user = [...findUser] : null
  req.body.password === user[0].password ? res.json({ message: "true", user }) : res.json({ message: "Password incorect" })
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

async function getUser(req, res, next) {
  let user
  try {
    user = await userModel.findById(req.params.id)
    if (user === null) {
      return res.status(404).json({ message: "cannot find user" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.user = user;
  next();
}