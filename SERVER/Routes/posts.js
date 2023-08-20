const router = require("express").Router();
const Post = require("../Models/Post");



//CREATE POST!!!!!!!!!
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (e) {
    res.status(500).json(e);
    console.log(e)
  }
});

//DELETE POST!!!!!!!
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted.....");
      } catch (e) {
        res.status(500).json(e);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (e) {
        res.status(500).json(e);
      }
    } else {
      res.status(401);
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

//GETting a single POST.
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

//GET ALL POST
router.get("/", async (req, res) => {
  try {
    let posts;
    {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
