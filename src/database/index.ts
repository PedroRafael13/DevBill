import mongoose from "mongoose"

export async function setupMongo(): Promise<void> {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    console.log("conneting to DB...")
    await mongoose.connect(process.env.MONGO_URL as string)
    console.log("I DB connectd")
  } catch {
    throw new Error("DB not connect")
  }
}