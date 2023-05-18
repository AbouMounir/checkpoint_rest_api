import mongoose from "mongoose";

const mongo_url = "mongodb+srv://AbouMounir:eUMzfOz8H2ZID0oY@restaoi0.j3bzuao.mongodb.net/rest_api?retryWrites=true&w=majority"

const connectDb = async () => {
  
   try {
      const conn = await mongoose.connect(mongo_url)
      console.log(`database connection established : ${conn.connection.host}`);
   } catch(error) {
      console.log("error connecting" + error.message);
      process.exit(1);
   }
}


export default connectDb ;     