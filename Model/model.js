const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  "mongodb+srv://student:ilovetesting@cluster0-ss7uk.mongodb.net/GoGreen?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("Connected");
});

var userSchema = new Schema({
  username: String,
  password: String,
  totalPaid: { type: Number, default: 0 },
  totalItemsRecycled: { type: Number, default: 0 },
  recyclingHistory: {
    type: [{ date: Date, amountPaid: Number, amountRecycled: Number }],
    default: []
  }
});
module.exports = mongoose.model("User", userSchema);
