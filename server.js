const express = require("express")
const app = express()
const path = require("path")
const bp = require("body-parser")
const port = 8000
const session = require("express-session");

app.use(express.static(path.join(__dirname, "/client/dist")));
app.use(bp.json());
app.use(session({ secret: "boop", saveUninitialized: true }));
//comment out until mongoose & routes files are built else error
require("./server/config/mongoose.js"); // imports the mongoose.js file we will create
require("./server/config/routes.js")(app); // imports the routes.js file we will create

app.listen(port, function () {
	console.log("listening on port 8000");
})