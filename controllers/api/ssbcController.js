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

module.exports = {
	getAllCharacters
}