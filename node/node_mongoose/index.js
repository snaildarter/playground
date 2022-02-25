const Mongoose = require("mongoose");
const url = "mongodb://localhost:27017/runoob";

Mongoose.connect(url);

const Cat = Mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Ben" });

kitty.save(function (err, data) {
  if (err) {
    console.log("error", err);
  }

  console.log("data", data, "success");
});

// MongoClient.connect(
//   url,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function (err, db) {s
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("site").insertOne(myobj, function (err, res) {
//       if (err) throw err;
//       console.log("文档插入成功");
//       db.close();
//     });
//   }
// );
