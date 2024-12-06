const posts = require("../data/posts");

const checkPostExists = (req, res, next) => {
    console.log("se ci sei dimmi ciao");
    const postId = parseInt(req.params.id);
    const post = posts.find((post) => post.id === postId);
    if (post) {
        next();
    } else {
        res.status(404).json({
            error: true,
            message: "Nessun post trovato. Ritenta sarai più fortunato"
        });
    };
};

module.exports = checkPostExists;