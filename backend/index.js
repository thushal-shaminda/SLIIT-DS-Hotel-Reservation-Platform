import express from "express";
import mongoose from "mongoose"; // Data Base
import cors from "cors"; // for Cross-Origin
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookings.js";
import roomRoutes from "./routes/rooms.js";
import authRoutes from "./routes/auth.js";
import travelRoutes from "./routes/traveler.js"

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "30mb" }));
app.use(cors());

app.use("/rooms", roomRoutes);
app.use("/bookings", bookingRoutes);
app.use("/auth", authRoutes);
app.use("/traveler", travelRoutes);
app.get("/", (req, res) => {
  res.send("Hello Sooriya Resort API");
});
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
