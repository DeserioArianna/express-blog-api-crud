const express = require("express");
const app = express();
const port = 3000;
const posts = require("./data/posts");
const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
    res.json({
        count: posts.length,
        posts
    });
});

app.listen(port, () => {
    console.log("Server in ascolto");
});