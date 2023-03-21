const express = require("express");
const router = express.Router();

const {
	getAllCharacters,
	getOneCharacter
} = require("../../controllers/api/ssbcController");

router.get("/allCharacters", getAllCharacters);

router.get("/oneCharacter/:name", getOneCharacter);

module.exports = router;