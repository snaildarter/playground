const Mongoose = require("mongoose");
const url = "mongodb://admin:123456@localhost:27017/runoob";

Mongoose.connect(url);

const Cat = Mongoose.model("Cat", { name: String });
const kitty = new Cat({ name: "Ben" });

kitty.save(function (err, data) {
  if (err) {
    console.log("error", err);
  }

  console.log("data", data, "success");
});
