const Characters = require("../../models/ssbcModel");

async function renderAllCharacters(req, res) {
	try {
		let result = await Characters.find({});

		res.render("allChars", { characters: result });
	} catch (error) {
		console.log(`renderAllCharacters error: ${error}`);
	}
}

module.exports = {
	renderAllCharacters
}