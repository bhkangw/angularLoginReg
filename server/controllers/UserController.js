var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
	login: function(req,res){
		console.log("in controlla");
		// var user = new User(req.body);
    	User.find({name: req.body.name}, function(err, users){
		console.log("in controller", req.body);
		if(users.length < 1){
			User.create({name: req.body.name}, function(err, user){
				console.log("User:", user)
				req.session.user = user;
				return res.json({user:user})
			})
		}
		else{
			req.session.user = users[0];
			console.log("existing user:", req.session.user)
			return res.json({user:req.session.user})
		}
    })
  },

  checkSess: function(req,res){
		if(req.session.user == undefined){
			console.log("check session:", req.session.user)
			return res.json({user:null})
		}
		return res.json({user:req.session.user});
  },

  logout: function(req,res){
	req.session.destroy();
	res.redirect("/");
  },
}
