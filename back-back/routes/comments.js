const express = require("express");
const router = express.Router();
const Comments = require("../models/Comments");
// const User = require("../models/User");

/* GET home page */
router.post("/create", (req, res, next) => {
  console.log(req.body, "asdsadasdasdasdsa");
  Comments.create({ ...req.body })
    .then(comment => {
      return res
        .status(200)
        .json({ mensaje: "Tu comentario se posteo corrextamente" });
    })
    .catch(error => {
      console.log("err", error);
      return res
        .status(404)
        .json({ error: "Ocurrió un error al publicar tu comentario" });
    });
});
router.delete("/delete", (req, res, next) => {
  let { owner_id } = req.body;
  Comments.findOneAndDelete({ _owner: owner_id })
    .then(comments => {
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
