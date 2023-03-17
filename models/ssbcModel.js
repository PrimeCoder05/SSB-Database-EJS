const mongoose = require("mongoose");

const ssbcSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			unique: true,
			required: true
		},
		name: {
			type: String,
			unique: true,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		rank: {
			type: String,
			required: true
		},
		specials: [{
			type: String,
			required: true
		}],
		finalSmash: {
			type: String,
			unique: true,
			required: true
		},
		series: {
			type: String,
			required: true
		}
	}
);

const Characters = mongoose.model("Characters", ssbcSchema);

module.exports = Characters;