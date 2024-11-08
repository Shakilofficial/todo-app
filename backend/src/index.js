const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const cookieParser = require("cookie-parser");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1", todoRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🌐 Server is running at Port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
  });
