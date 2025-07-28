const mongoose = require("mongoose");

let url = process.env.MONGO_DB_URL;
console.log(url);

async function connectDB(params) {
  try {
    const con = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`mongodb connected successfully`);
    

  } catch (error) {
    console.log(`error occurred while connecting to DB ${error}`);
    throw error;
  }
}

module.exports = connectDB;
