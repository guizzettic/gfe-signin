const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
