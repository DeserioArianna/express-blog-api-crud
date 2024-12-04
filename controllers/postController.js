const posts = require("../data/posts");

// Funzione per ottenere tutti i post  
const index = (req, res) => {
    res.json({
        posts,
        count: posts.length
    });
};

// Funzione per ottenere un singolo post
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((post) => post.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.sendStatus(404);
    };
};


// Funzione per creare un nuovo post
const create = (req, res) => {
    res.json("Creaiamo un nuovo post");
};


// Funzione per modificare un post per intero
const update = (req, res) => {
    const postsId = req.params.id;
    res.json("Modifichiamo per intero un post" + " " + postsId);
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
    } else {
        res.sendStatus(404);
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