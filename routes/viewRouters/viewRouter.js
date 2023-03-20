const express = require("express");
const router = express.Router();

const {
	renderAllCharacters
} = require("../../controllers/view/viewController");

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/allChars", renderAllCharacters);

module.exports = router;