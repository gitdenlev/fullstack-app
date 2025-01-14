import mongoose from "mongoose";

export default defineNitroPlugin(async () => {
  try {
    await mongoose.connect(useRuntimeConfig().MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error; // Пробрасываем ошибку дальше, чтобы Nitro мог её обработать
  }
});
