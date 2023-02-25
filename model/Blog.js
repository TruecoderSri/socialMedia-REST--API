import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  //   to connect the blogs with the user
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  //   users can have multiple blogs
});
export default mongoose.model("Blog", blogSchema);
