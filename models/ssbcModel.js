const mongoose = require("mongoose");

const ssbcSchema = new mongoose.Schema(
	{
		CharId: {
			type: Number,
			unique: true,
			required: true
		},
		Name: {
			type: String,
			unique: true,
			required: true
		},
		Type: {
			type: String,
			required: true
		},
		Rank: {
			type: String,
			required: true
		},
		Specials: [{
			type: String,
			required: true
		}],
		FinalSmash: {
			type: String,
			unique: true,
			required: true
		},
		Series: {
			type: String,
			required: true
		}
	}
);

const Characters = mongoose.model("Characters", ssbcSchema);

module.exports = Characters;