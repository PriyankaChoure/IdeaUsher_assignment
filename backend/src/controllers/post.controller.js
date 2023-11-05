const httpStatus = require("http-status");
const postService = require("../services/post.service");

// method to found all post
const getAllProducts = async (req, res) => {
  try {
    console.log("in post controller -");
    const { filterString, sortString } = req.body;
    const posts = await postService.getAllProductList();
    console.log(posts.length);
    if (posts) {
      res.json(posts);
    } else {
      res.status(httpStatus.BAD_REQUEST).json("no posts found");
    }
  } catch (err) {
    console.log("error to get post list -", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};
