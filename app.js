const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routes/posts.js');

app.use(express.json());
app.use('/api',postsRouter);



app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
  });  