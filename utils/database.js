import mongoose from "mongoose"

const connectDB = () => {
  try {
    mongoose.connect("https://data.mongodb-api.com/app/data-ydtfo/endpoint/data/v1")
    console.log("Success: Connected to MongoDB")
  } catch (err) {

  }
}

export default connectDB