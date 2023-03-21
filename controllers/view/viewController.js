const Characters = require("../../models/ssbcModel");

async function renderAllCharacters(req, res) {
	try {
		let result = await Characters.find({});

		res.render("allChars", { characters: result });
	} catch (error) {
		console.log(`renderAllCharacters error: ${error}`);
	}
}

async function renderOneCharacter(req, res) {
	try {
		let result = await Characters.find({ name: req.params.name });

		res.render("oneChar", { characters: result[0] });
	} catch (error) {
		console.log(`renderOneCharacter error: ${error}`);
	}
}

module.exports = {
	renderAllCharacters,
	renderOneCharacter
}