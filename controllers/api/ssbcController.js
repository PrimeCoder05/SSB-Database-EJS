const Characters = require("../../models/ssbcModel");

async function getAllCharacters(req, res) {
	try {
		let result = await Characters.find({});

		res.json({
			message: "success",
			payload: result
		});
	} catch (error) {
		console.log(`getAllCharacters error: ${error}`);

		res.json({
			message: "failure",
			payload: error
		});
	}
}

async function getOneCharacter(req, res) {
	try {
		let result = await Characters.find({ name: req.params.name });

		res.json({
			message: "success",
			payload: result
		});
	} catch (error) {
		console.log(`getOneCharacter error: ${error}`);

		res.json({
			message: "failure",
			payload: error
		});
	}
}

module.exports = {
	getAllCharacters,
	getOneCharacter
}