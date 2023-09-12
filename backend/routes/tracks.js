// routes/tracks.js

const express = require("express");
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
    let player = tracks.filter(player => player.artist.toLowerCase() === artist.toLowerCase());
    res.status(200).json({
      data: player
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
      let player = tracks.filter(player => player.title.toLowerCase() === title.toLowerCase());
      res.status(200).json({
        data: player
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });
module.exports = router;
