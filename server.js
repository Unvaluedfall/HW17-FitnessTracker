var express = require("express");
var mongoose = require("mongoose");
// var morgan = require('morgan')


var app = express();
var PORT = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
