import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors
import walletRoutes from "./routes/walletRoutes.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Define your routes
app.use("/api/wallet", walletRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
