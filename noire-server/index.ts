import express, { Request, Response} from "express";
import { config } from "dotenv";
config();

const app = express();
const PORT = process.env.PORT || 5050;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Noire Cosmetics API.");
});

// App listen
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
