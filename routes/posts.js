const express = require("express");
const router = express.Router();

const Post = require("../schemas/post.js");

 //1.게시글 조회
  router.get('/posts',async(req,res)=>{
    const posts = await Post.find({});
    res.status(200).json({"data":posts});
  })

//2.게시글 작성
  router.post("/posts", async(req,res)=>{
    const {user, password, title, content} = req.body;

    const posts = await Post.find({user});

    if (posts.length) {
      return res.status(400).json({success:false,
      errorMessage : "이미 있는 데이터입니다."})
    }

    const createdPosts = await Posts.create({user, password, title, content})

    res.json({posts:createdPosts});
  })


  //3.게시글 조회
  router.get('/posts/:postId',(req,res)=>{
    const {postsId} = req.params;

    const [result] = posts.filter((post) => post.postsId===Number(postsId))

    res.status(200).json({"data":result});
})

  //4.게시글 수정
  

  module.exports = router;
