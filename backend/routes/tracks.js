// routes/tracks.js

const express = require("express");
const { vary } = require("express/lib/response");
const router = express.Router();
let tracks = require("../dummyDatabase");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: tracks
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

router.get("/:artist", async (req, res) => {
  let { artist } = req.params;
  artist = String(artist);
  try {
    let track = tracks.filter(track => track.artist.toLowerCase() === artist.toLowerCase());
    res.status(200).json({
      data: track
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

router.get("/title/:title", async (req, res) => {
    let { title } = req.params;
    title = String(title);
    try {
      let track = tracks.filter(track => track.title.toLowerCase() === title.toLowerCase());
      res.status(200).json({
        data: track
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  router.get("/id/:id", async (req, res) => {
    let { id } = req.params;
    console.log(id);
    try {
      let track = tracks.filter(track => track.id === Number(id));
      res.status(200).json({
        data: track
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });
module.exports = router;