const mongoose = require("mongoose");
const shortid = require("shortid");


const urlSchema = new mongoose.Schema({
	original_url: {
		type: String,
		required: true,
	},
	short_url: {
		type: String,
		required: true,
		unique: true,
        default: shortid.generate,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Url", urlSchema);
