import mongoose from "mongoose"
mongoose.set('strictQuery', true);

const connectDB = async() => {
  try {
    await mongoose.connect("https://data.mongodb-api.com/app/data-ydtfo/endpoint/data/v1")
    console.log("Success: Connected to MongoDB")
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB")
  }
}

export default connectDB