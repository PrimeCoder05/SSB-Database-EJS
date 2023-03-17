const express = require("express");
const router = express.Router();

const {
	getAllCharacters
} = require("../../controllers/api/ssbcController");

router.get("/allCharacters", getAllCharacters);

module.exports = router;