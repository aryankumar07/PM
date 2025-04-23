import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
/* ROUTE IMPORTS */
import projectRoutes from './routes/projectRoute'
import taskRoutes from './routes/taskRoute'
import searchRoutes from './routes/searchRoute'
import userRoutes from './routes/userRoutes'
import teamRoutes from "./routes/teamRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get('/', (req, res) => {
  res.send("this is the home page")
})


app.use('/projects', projectRoutes)
app.use('/tasks', taskRoutes)
app.use('/search', searchRoutes)
app.use("/teams", teamRoutes);
app.use("/users", userRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
