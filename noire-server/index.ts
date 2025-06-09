import express, { Request, Response} from "express";
import { config } from "dotenv";
config();

// Import database connection
import connectDB from "./database/database";

// Import routes
import productsRouter from "./routes/products/products-route"

const app = express();
const PORT = process.env.PORT || 5050;

//Invoke connectDB function to establish connection
connectDB()

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Noire Cosmetics API.");
});

// Enable routes use
app.use("/products", productsRouter)

// App listen
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
