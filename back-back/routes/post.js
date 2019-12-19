const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");
const uploader = require("../helpers/multer");

router.post("/create", uploader.single("image"), (req, res, next) => {
  console.log("aoy el back");
  let post = req.body;
  let imgs = [
    "https://res.cloudinary.com/dfykm9jdr/image/upload/v1576640402/how-to-get-over-your-fear-of-receiving-oral-sex_Prancheta-1-min-2_waigvn.png",
    "https://res.cloudinary.com/dfykm9jdr/image/upload/v1576640401/cold-sore_herpes-2_bzwjgt.png",
    "https://res.cloudinary.com/dfykm9jdr/image/upload/v1576640361/dirty-talk-2_vi4r85.png"
  ];
  if (req.file) {
    const image = req.file.secure_url;
    post["image"] = image;
  } else {
    post["image"] = imgs[Math.floor(Math.random() * imgs.length)];
  }

  console.log(post);

  Posts.create(post)
    .then(post => {
      return res
        .status(200)
        .json({ mensaje: "Artículo publicado correctamente", post });
    })
    .catch(error => {
      console.log("error", error);
      return res
        .status(404)
        .json({ error: "Ocurrió un error al publicar tu articulo" });
    });
});
router.get("/read", (req, res, next) => {
  Posts.find()
    .then(posts => {
      return res
        .status(200)
        .json({ mensaje: "Resultados de tu busqueda", posts });
    })
    .catch(error => {
      return res.status(404).json({ error: "Ocurrió un error en tu busqueda" });
    });
});
router.patch("/edit", (req, res, next) => {
  let { owner_id, post_id } = req.body;
  let post = req.body;
  console.log("holi", req.body);

  Posts.findByIdAndUpdate(
    { _id: post_id, _owner: owner_id },
    { $set: { ...post } },
    { new: true }
  )
    .then(post => {
      return res.status(200).json({ mensaje: "Se actualizo con exito", post });
    })
    .catch(error => {
      return res
        .status(404)
        .json({ error: "Ocurrió un error al actualizar tu post" });
    });
});

router.delete("/delete", (req, res, next) => {
  let { owner_id } = req.body;
  Posts.findOneAndDelete({ _owner: owner_id })
    .then(post => {
      return res
        .status(200)
        .json({ mensaje: "Se borro con éxito tu comentario" });
    })
    .catch(error => {
      return res
        .status(404)
        .json({ error: "Ocurrió un error al borrar tu comentario" });
    });
});

module.exports = router;
