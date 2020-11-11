//=====================================
//COMMENTS routes
//=====================================
const express =    require("express");
const router  =    express.Router();
const Restaurant = require("../models/restaurant");
const Comment = require("../models/comment");
const middleware = require("../middleware/index.js");

//SHOW COMMENTS OF SPECIFIC RESTAURANT
router.get("/restaurants/:id/comments/new", middleware.isLoggedIn, function(req,res){
	Restaurant.findById(req.params.id, function(err, restaurant){
		if(err){
			console.log(err);
		}
		else{
			res.render("comments/new", {restaurant: restaurant})
		}
	});
})
//ADD A NEW COMMENT
router.post("/restaurants/:id/comments", middleware.isLoggedIn, function(req,res){
	Restaurant.findById(req.params.id, function(err, restaurant){
		if(err){
			console.log(err);
			res.redirect("/restaurants");
		}
		else{
			Comment.create(req.body.comment, function(err,comment){
				if(err){
					req.flash("error", "something went wrong");
					console.log(err);
				}
				else{
					//add username and id to comment
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					restaurant.comments.push(comment);
					restaurant.save();
					req.flash("success", "Successfully added comment");
					res.redirect("/restaurants/" + restaurant._id);
				}
			})
		}
	});
})
//COMMENT EDIT ROUTE
router.get("/restaurants/:id/comments/:comment_id/edit", middleware.isLoggedIn, function(req,res){
	Comment.findById(req.params.comment_id, function(err, foundComment){
		if(err){
			res.redirect("back");
		}
		else{
		res.render("comments/edit", {restaurant_id: req.params.id, comment: foundComment})
		}
	})
});

// COMMENT UPDATE
router.put("/restaurants/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
      if(err){
          res.redirect("back");
      } 
	  else{
          res.redirect("/restaurants/" + req.params.id );
      }
   });
});

// COMMENT DESTROY ROUTE
router.delete("/restaurants/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
    //findByIdAndRemove
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           res.redirect("back");
       } else {
		   req.flash("success","Comment deleted");
           res.redirect("/restaurants/" + req.params.id);
       }
    });
});

module.exports = router;
