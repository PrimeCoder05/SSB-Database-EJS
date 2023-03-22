const express = require("express");
const router = express.Router();

const {
	getAllCharacters,
	getOneCharacter,
	createOneCharacter
} = require("../../controllers/api/ssbcController");

router.get("/allCharacters", getAllCharacters);

router.get("/oneCharacter/:name", getOneCharacter);

router.post("/createOneCharacter", createOneCharacter);

module.exports = router;