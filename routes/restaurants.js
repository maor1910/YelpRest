//=====================================
//Restaurants ROUTES
//=====================================
const express = require("express");
const router  = express.Router();      
const Restaurant = require("../models/restaurant");
const Comment = require("../models/comment");
const middleware = require("../middleware/index.js");

//INDEX page
router.get('/restaurants',function(req,res){
	Restaurant.find({},function(err, restaurants){
		if(err){
			console.log(err);
		}
		else{
			res.render("restaurants/index", {restaurants: restaurants})
		}
	});
});
//CREATE page
router.post("/restaurants", middleware.isLoggedIn, function(req,res){
	let name = req.body.name;
	let image = req.body.image;
	let description = req.body.description;
	let author = {
		id: req.user._id,
		username: req.user.username
	};
	let newRestaurant = {name: name, image: image, description: description, author: author};
	Restaurant.create(newRestaurant, function(err,newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/restaurants");
		}
	});
});
//NEW page
router.get("/restaurants/new", middleware.isLoggedIn, function(req,res){
	res.render("restaurants/new");
})
router.get("/restaurants/:id", function(req,res){
	Restaurant.findById(req.params.id).populate("comments").exec(function(err, foundRestaurant){
		if(err){
			console.log(err);
		}
		else{
			res.render("restaurants/show", {restaurant: foundRestaurant})
		}
	});
});

//EDIT RESTAURANT ROUTE
router.get("/restaurants/:id/edit", middleware.checkRestaurantOwnership, function(req,res){
		Restaurant.findById(req.params.id, function(err, foundRestaurant){
			if(err){
				res.redirect("/restaurants")
			}
			else{
				res.render("restaurants/edit", {restaurant: foundRestaurant});	
			}
		});
});

//UPDATE RESTAURANT ROUTE
router.put("/restaurants/:id", middleware.checkRestaurantOwnership, function(req,res){
	Restaurant.findByIdAndUpdate(req.params.id, req.body.restaurant, function(err, updatedRestaurant){
		if(err){
			res.redirect("/restaurants")
		}
		else{
			res.redirect("/restaurants/"+ req.params.id);	
		}
	});
});

//DESTROY RESTAURANT ROUTE
router.delete("/restaurants/:id", middleware.checkRestaurantOwnership, function(req,res){
	Restaurant.findByIdAndRemove(req.params.id, function(err, removedRestaurant){
		if(err){
			res.redirect("/restaurants");
		}
		else{
			Comment.deleteMany( {_id: { $in: removedRestaurant.comments } });
			res.redirect("/restaurants");
		}
	});
});

module.exports = router;
