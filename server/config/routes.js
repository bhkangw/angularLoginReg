var user = require("../controllers/UserController.js");
var path = require("path");

module.exports = function(app){
	app.post("/login", function(req,res){
		console.log("in backend routes")
		user.login(req,res);
	});

	app.get("/sess", function(req,res){
		console.log("in backend routes: checking session")
		user.checkSess(req,res);
	});

	app.get("/logout", function(req,res){
		user.logout(req,res);
	});

	app.get("*", function(req,res){
		res.sendFile(path.resolve("./client/dist/index.html"));
	});
}