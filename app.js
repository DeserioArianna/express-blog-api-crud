const express = require("express");
const app = express();
const cors = require("cors")
const port = 3000;
const posts = require("./data/posts");
const postsRouter = require("./routers/posts");
const handleError = require("./middleware/handleError");

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use("/posts", postsRouter);

app.use(express.static("public"));


app.get("/", (req, res) => {
    goku()
    res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
    res.json({
        count: posts.length,
        posts
    });
});

app.use(handleError);

app.listen(port, () => {
    console.log("Server in ascolto");
});