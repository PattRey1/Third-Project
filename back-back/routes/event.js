const express = require("express");
const router = express.Router();
const Event = require("../models/Events");
// const User = require("../models/User");

/* GET home page */
router.post("/create", (req, res, next) => {
  Event.create({ ...req.body })
    .then(event => {
      return res
        .status(200)
        .json({ mensaje: "Tu comentario se posteo corrextamente" });
    })
    .catch(error => {
      return res
        .status(404)
        .json({ error: "Ocurrió un error al publicar tu comentario" });
    });
});
router.delete("/delete", (req, res, next) => {
  let { owner_id } = req.body;
  Event.findOneAndDelete({ _owner: owner_id })
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
