const mongoose = require("mongoose");
const TagSchema = new mongoose.Schema(
  {
    postid: {
      type: String,
      required: [true, "can't be blank"],
    },
    tagdesc: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tag", TagSchema);
