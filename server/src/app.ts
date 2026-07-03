import express from "express";
import cors from "cors";
import tripRoutes from "./routes/trip.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({
    success: true,
    message: "Travel Planner API Running",
  });
});

app.use("/api/trips", tripRoutes);

export default app;