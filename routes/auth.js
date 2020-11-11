const express =    require("express");
const router  =    express.Router();
const User =       require("../models/user")
const passport =   require("passport");

//THE ROOT ROUTE
router.get('/',function(req,res){
	res.render("landing_page");
})
//=====================================
//AUTH ROUTRES
//=====================================

//SIGNUP form
router.get("/register", function(req,res){
	res.render("register");
})
//handles sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Welcome to YelpRest " + user.username);
           res.redirect("/restaurants"); 
        });
    });
});
//LOGIN ROUTES
router.get("/login", function(req, res){
   res.render("login"); 
});
router.post("/login", passport.authenticate("local",{
	successRedirect: "/restaurants",
	failureRedirect: "/login"
}) ,function(req,res){	
	});

//LOGOUT ROUTES
router.get("/logout", function(req,res){
	req.logout();
	req.flash("success", "Logged you out");
	res.redirect("/restaurants");
})

module.exports = router;
