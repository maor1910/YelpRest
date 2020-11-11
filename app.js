const express =               require("express");
const app =                   express();
const bodyParser =            require("body-parser");
const mongoose =              require("mongoose");
const passport =              require("passport");
const localStrategy =         require("passport-local");
const methodOverride =        require("method-override");
const flash =                 require("connect-flash");
const Restaurant =            require("./models/restaurant");
const Comment =               require("./models/comment");
const User =                  require("./models/user")
const seedDB =                require("./seeds");
const passportLocalMongoose = require("passport-local-mongoose");
const restaurantRoutes =      require("./routes/restaurants");      
const commentsRoutes =        require("./routes/comments");      
const authRoutes =            require("./routes/auth");      

/*mongoose.connect('mongodb://localhost:27017/yelp_camp_v10', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
*/
mongoose.connect('mongodb+srv://maor:Michael1995@yelprest.umjsx.mongodb.net/yelprest?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(flash());
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(require("express-session")({
	secret: "Michael1995",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
})
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

//REQUIRING ROUTES
app.use(restaurantRoutes);
app.use(commentsRoutes);
app.use(authRoutes);


seedDB(); //seed the database

app.listen((process.env.PORT || 3000), function(){
	console.log("The YelpRest server has started");
})





