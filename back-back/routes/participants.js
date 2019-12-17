const express = require("express");
const router = express.Router();
const Participants = require("../models/Partcipants");
// const User = require("../models/User");

/* GET home page */
router.post("/create", (req, res, next) => {
  Participants.create({ ...req.body })
    .then(comment => {
      return res
        .status(200)
        .json({ mensaje: "Tu registro se realizo con éxito" });
    })
    .catch(error => {
      console.log("err", error);
      return res
        .status(404)
        .json({ error: "Ocurrió un error al registrarte para el evento" });
    });
});
router.delete("/delete", (req, res, next) => {
  let { owner_id } = req.body;
  Participants.findOneAndDelete({ _owner: owner_id })
    .then(comments => {
      return res
        .status(200)
        .json({ mensaje: "Se anulo con éxito tu registro" });
    })
    .catch(error => {
      return res
        .status(404)
        .json({ error: "Ocurrió un error al borrar tu comentario" });
    });
});

module.exports = router;
