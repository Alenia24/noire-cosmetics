import express from "express";
import { config } from "dotenv";
config();

const app = express();
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("Welcome to the Noire Cosmetics API.");
});

// App listen
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
