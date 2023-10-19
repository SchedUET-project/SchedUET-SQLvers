import { wrapper } from "../middleware/wrapper.js";
import Post from "../models/Post.js";

const getAllPosts = wrapper(async (req, res, next) => {
  let [data, _] = await Post.findAll();
  res.json(data);
});

const createNewPost = wrapper(async (req, res, next) => {
  res.send("create new post route");
});

const getPostById = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await Post.findById(id);
  res.json(data);
});

export { getAllPosts, getPostById, createNewPost };
