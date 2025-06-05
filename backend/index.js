import express, { json } from "express";
import cors from "cors";
import connectDB from "./api/config/db.js";
import notesRouter from "./api/routes/notesRoutes.js";
import { config } from "dotenv";
import userRouter from "./api/routes/userRoutes.js";
import { errorHandler,  } from "./api/Middleware/errorMiddleware.js";
import path from "path";

config();
const app = express();
connectDB();
app.use(json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://notezippe.onrender.com'],
    credentials: true,
  })
);


/// Deployment code 31.05.2025


// const __dirname = path.resolve();
// if (process.env.NODE_ENV === "production"){
//   app.use(express.static(path.join(__dirname,"frontend/build")));
//   app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
//   })
// }


const port = process.env.PORT || 4045

////// deployment code 
app.get("/",(req,res)=>{
    res.end("server is running")
})
app.use("/api/users", userRouter);
app.use("/api/notes", notesRouter);
app.use('/uploads', express.static('uploads'));
app.use(errorHandler);
app.listen(port,() => console.log("server is running at 3035 and watching"));



