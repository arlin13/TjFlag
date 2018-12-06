const moongose = require("moongose");
const {Schema} = moongose;

const userSchema = new Schema({
	googleId: String
});

moongose.model("users", userSchema);