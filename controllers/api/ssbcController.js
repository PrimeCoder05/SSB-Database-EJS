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

async function createOneCharacter(req, res) {
	try {
		let newCharacters = {
			CharId: req.body.CharId,
			Name: req.body.Name,
			Type: req.body.Type,
			Rank: req.body.Rank,
			Specials: req.body.Specials,
			FinalSmash: req.body.FinalSmash,
			Series: req.body.Series
		}

		await Characters.create(newCharacters);

		res.json({
			message: "success",
			payload: newCharacters
		});

		// res.redirect(`/oneChar/${newChar.name}`);
	} catch (error) {
		console.log(`createOneCharacter error: ${error}`);

		res.json({
			message: "failure",
			payload: `createOneCharacter error: ${error}`
		});
	}
}

module.exports = {
	getAllCharacters,
	getOneCharacter,
	createOneCharacter
}