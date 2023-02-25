import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
const app = express();

app.use(express.json());
app.use("/api/User", router);

app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://socialMedia:kCScv1xlu4aOXkeF@cluster0.em82n3v.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(7000))
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

// kCScv1xlu4aOXkeF
