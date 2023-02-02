require("dotenv").config();
const mongoose = require("mongoose");
const names = require("./names.json");
const countries=require("./countries")
const cities=require("./cities")
const HospitalModel = require("./model/hospital.model");
const stokModel=require("./model/stock.model");
const users=require("./users");
const stockModel = require("./model/stock.model");
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

console.log(countries)
const populateHospitals = async () => {
  await HospitalModel.deleteMany({});

  const hospitals = names.map((name,index) => ({
    name,
    country:countries[index],
    city:cities[index],
    users:users
  }));
  await stockModel.create({name:"mask",amount:1000});
  await HospitalModel.create(...hospitals);
  console.log("Hospitals created");
};

const main = async () => {
    mongoose.set('strictQuery', false)
  await mongoose.connect(mongoUrl);

  await populateHospitals();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});