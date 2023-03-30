const express = require("express");
const router = express.Router();

const {
	renderAllCharacters,
	renderOneCharacter,
	renderCreateCharacter
	// renderUpdateCharacter
} = require("../../controllers/view/viewController");

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/allChars", renderAllCharacters);

router.get("/oneChar/:Name", renderOneCharacter);

router.get("/createOneChar", renderCreateCharacter);

// router.get("/updateChar/:name", renderUpdateCharacter);

module.exports = router;