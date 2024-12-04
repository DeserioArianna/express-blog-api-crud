const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Rotta per ottenere la lista dei post (Index)
// router.get("/", (req, res) => {
//     res.json(posts);
// });
router.get("/", postController.index);

// Rotta per ottenere un singolo post per ID (Show) 
// router.get("/:id", (req, res) => {
//     const postsId = req.params.id;
//     const post = posts.find((post) => post.id === postsId);
//     // res.json("Leggiamo un determinato post" + " " +postsId);
//     res.json(post);
// });
router.get("/:id", postController.show);

// Rotta per creare un nuovo post (Create)
// router.post("/", (req, res) => {
//     res.json("Creaiamo un nuovo post");
// });
router.post("/", postController.create)


// Rotta per modificare un post per intero (Update)
// router.put("/:id", (req, res) => {
//     const postsId = req.params.id;
//     res.json("Modifichiamo per intero un post" + " " + postsId);
// });
router.put("/:id", postController.update);


// Rotta per modificare un o più parametri di un post (Modify)
// router.patch("/:id", (req, res) => {
//     const postsId = req.params.id;
//     res.json("Modifichiamo un o più parametri di un post" + " " + postsId);
// });
router.patch("/:id", postController.modify);

// Rotta per eliminare un post (Destroy)
// router.delete("/:id", (req, res) => {
//     const postsId = req.params.id;
//     res.json("Eliminiamo un post" + " " + postsId);
// });
router.delete("/:id", postController.destroy);

module.exports = router;