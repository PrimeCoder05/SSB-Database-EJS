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
			Specials: req.body.Specials.split(", "),
			FinalSmash: req.body.FinalSmash,
			Series: req.body.Series
		}

		await Characters.create(newCharacters);

		// res.json({
		// 	message: "success",
		// 	payload: newCharacters
		// });

		res.redirect(`/oneChar/${newCharacters.Name}`);
	} catch (error) {
		console.log(`createOneCharacter error: ${error}`);

		res.json({
			message: "failure",
			payload: `createOneCharacter error: ${error}`
		});
	}
}

async function deleteOneCharacter(req, res) {
	try {
		let deleteTarget = req.params.name;

		await Characters.deleteOne({ Name: deleteTarget });

		res.json({
			message: "success",
			payload: deleteTarget
		});
	} catch (error) {
		console.log(`deleteOneCharacter error: ${error}`);

		res.json({
			message: "failure",
			payload: `deleteOneCharacter error: ${error}`
		});
	}
}

module.exports = {
	getAllCharacters,
	getOneCharacter,
	createOneCharacter,
	deleteOneCharacter
}