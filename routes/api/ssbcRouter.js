const express = require("express");
const router = express.Router();

const {
	getAllCharacters,
	getOneCharacter,
	createOneCharacter,
	deleteOneCharacter
} = require("../../controllers/api/ssbcController");

router.get("/allCharacters", getAllCharacters);

router.get("/oneCharacter/:name", getOneCharacter);

router.post("/createOneCharacter", createOneCharacter);

router.delete("/deleteOneCharacter/:name", deleteOneCharacter);

module.exports = router;