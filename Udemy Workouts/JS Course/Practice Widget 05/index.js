let express = require("express");
let app = express();

let port = 3000;
let path = require("path");

app.set("view options", { layout: false });
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/gallery", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/gallery.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/contact.html"));
});

app.listen(port, function () {
  console.log("server running");
});
