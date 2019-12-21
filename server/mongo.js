const mongoose = require("mongoose");

const uri =
  "mongodb+srv://wow1548:rpxhfpdl1@chatcluster-nskgv.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Chat", ChatSchema);
