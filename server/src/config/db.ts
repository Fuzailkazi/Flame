import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(process.env.MONGO_URI);
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('Error connecting to DB: ', error);
    process.exit(1);
  }
};
