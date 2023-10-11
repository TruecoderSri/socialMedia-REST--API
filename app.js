const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use("/api/User", require("./routes/user-routes.js"));

app.use("/api/blog", require("./routes/blog-routes.js"));

mongoose
  .connect(
    "mongodb+srv://socialMedia:kCScv1xlu4aOXkeF@cluster0.em82n3v.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(7000))
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.get("/redirect", (req, res) => {
  res.redirect("https://readme-alicj8vp1-truecodersri.vercel.app");
});

// kCScv1xlu4aOXkeF
