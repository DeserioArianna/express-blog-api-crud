const posts = require("../data/posts");

// Funzione per ottenere tutti i post  
const index = (req, res) => {
    console.log(req.query.tags)
    const query = req.query.tags;
    if (query === undefined) {
        res.json({
            posts,
            count: posts.length
        });
    } else {
        const postFilter = posts.filter((post) => post.tags.includes(query));
        res.json({
            data: postFilter,
            count: postFilter.length
        });
    };
};

// Funzione per ottenere un singolo post
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((post) => post.id === postId);
    res.json(post);
};


// Funzione per creare un nuovo post
const create = (req, res) => {

    // console.log(req.body);
    const lastPost = posts[posts.length - 1].id;
    // console.log(lastPost);

    const newPostId = lastPost + 1;
    const newPost = {
        id: newPostId,
        ...req.body
    };
    posts.push(newPost);
    res.statusCode = 201;
    res.json(newPost);
};


// Funzione per modificare un post per intero
const update = (req, res) => {
    const postsId = parseInt(req.params.id);
    // res.json("Modifichiamo per intero un post" + " " + postsId);
    const postIndex = posts.findIndex((post) => post.id === postsId);
    const updatePost = {
        id: postsId,
        ...req.body
    };
    posts[postIndex] = updatePost;
    res.statusCode = 204;
    res.json(updatePost);
};


// Funzione per modificare un o più parametri di un post
const modify = (req, res) => {
    const postsId = req.params.id;
    res.json("Modifichiamo un o più parametri di un post" + " " + postsId);
};

// Funzione per eliminare un post
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex((post) => post.id === postId);
    console.log(postId, postIndex);

    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        console.log(posts);
        res.sendStatus(204);
    };
};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
};