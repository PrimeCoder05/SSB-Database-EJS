const express = require("express");
const router = express.Router();

const {
	renderAllCharacters,
	renderOneCharacter
} = require("../../controllers/view/viewController");

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/allChars", renderAllCharacters);

router.get("/oneChar/:name", renderOneCharacter);

module.exports = router;