var mongoose = require("mongoose");
var Restaurant = require("./models/restaurant");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Dixie",
		price: "80-150",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2-1LFBgeEbSc3YdZ6N_O6MAagnGrbQa7Zkg&usqp=CAU",
        description: "Dixie is a gril bar opened by chef Haim Cohen at 1993. It serves a variaty of classic American dishes and it has without a doubt the best hot wings in Tel Aviv.",
		author: {
			id : "588c2e092403d111454fff77",
            username: "Tarel Madar"
		},
		
    },
    {
        name: "NISHI",
		price: "100-240",
        image: "https://assets.webinfcdn.net/thumbnails/280x202/n/nishi.co.il.png",
        description: "A contemporary Asian restaurant that combines Asian food with an innovative cocktail bar. A place with a unique atmosphere and young spirit where you come to eat and have a good time with your family and friends. Whether it is for a date on the bar, a meeting with friends or simply when feeling like having excellent sushi, Nishi is definitely the ideal place. We are open 7 days a week. Sunday-Thursday and Saturday customers can come in 12:00-23:30. Friday it is 12:00-23:00. We'd love to see you among our guests.",
		author: {
			id : "588c2e092403d111454fff76",
            username: "Omri Rosner"
		},
		
    },
    {
        name: "Coffe Bar",
		price: "200-250",
        image: "https://www.coffeebar.co.il/wp-content/uploads/2019/01/C13A2914_result-1024x682.jpg",
        description: "The CoffeeBar is the first restaurant of R2M Hospitality Group. It was opened in 1994 by Ruti & Mati Broudo, and loyally serves its guests since. Scattered among four rooms, a bar and an outdoors porch, there are about 150 seats in the restaurant. The divided rooms, which, along with the elegant black-and-white design and the hugh flowers vases – the trademark of the place – make an intimate and cosy setting. Apart of the CoffeeBar, R2M Group holds few of the most popular places in Tel Aviv. The M&R Brasserie by Rabin Square, the five Bakeries, in which one can get the whole variety of breads, cakes, pastries and desserts of both places, Hotel Montefiore, with its hype French-Vietnamese restaurant, Herzl 16, a daytime cafe that turns to a bar at night, including live music sets, Disco Tokyo, a new Japanese restaurant, and the Delicatessen – a one stop shop and an online store.",
		author: {
			id : "588c2e092403d111454fff71",
            username: "Dan Bezalel"
		},
		
    },
	{
        name: "Segev Express",
		price: "60-150",
        image: "https://i.pinimg.com/originals/6b/7d/d3/6b7dd3c36e99323171cafbb56cf5c08e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		author: {
			id : "588c2e092403d111454fff77",
            username: "Guy Itzhaki"
		},
		
    },
    {
        name: "Messa",
		price: "300-500",
        image: "https://messa.co.il/wp-content/uploads/2019/03/g1_0011_25413.jpg",
        description: "Switch to screen reader version מסה אתר הבית - MESSA MESSA Messa is a Chef restaurant that was established in 2004 and is considered to be one of the leading restaurants in Israel. MESSA means “Table” in Spanish – hence the inspiration of the restaurant’s name, and the exclusive extended concept table. MESSA has gained international recognition and has been ranked in the esteemed Design Magazine Wall Paper as one of the 50 most beautiful restaurants in the world. Furthermore, the Tourism Magazine CONDA NEST TRAVELLER included MESSA in the list of the best and “hottest” restaurants in the world. The restaurant has received enthusiastic reviews from the world’s leading restaurant critics. Over the years, politicians, artists and celebrities from all over the world frequented MESSA. The restaurant, which was designed by the international architect Alex Meitlis, offers two complementary areas. In both areas one may enjoy the same menu. The restaurant area, entirely painted white, is elegantly designed .The bar compound, which is entirely black, provides a warm and intimate atmosphere. During the week, concept nights and live performances of artists, bands, DJs and events are held at the bar. The uniqueness of MESSA is that one may enjoy several worlds in one recreation evening: Starting with an intimate and romantic dinner at the restaurant and continuing to the bar area for a free and vibrant leisure experience. The private room overlooks the restaurant area and is suitable for events, toasts, team nights and discussions. The menu is based on ingredients from all over the world and combines a variety of cooking techniques including Mediterranean, French, Italian and Asian culinary influences. The dishes are aesthetic and colorful and contain creative combinations. The rich alcohol menu includes the best brands and a variety of cocktails. The menu contains more than 200 wines, including wines from leading boutique wineries and large wineries from Israel and other countries. הצהרת נגישות כל הזכויות שמורות למסעדת מסה. פיתוח טכנולוגי: משלוחים משלוחה Accessability Instagram Facebook Whatsapp",
		author: {
			id : "588c2e092403d111454fff76",
            username: "Maor Graiber"
		},
		
    },
    {
        name: "Taizu",
		price: "150-300",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/05/2b/f7/14/taizu.jpg",
        description: "Taizu – Asia Terranean Kitchen opened in 2013 by renowned Chef Yuval Ben Neriah. The kitchen brings a mix of Asian street food and the Mediterranean kitchen, featuring local twists on authentic street food dishes from five south east Asian countries, inspired by Chef Ben Neriah’s travels throughout South-East Asia. The restaurant boasts a unique dining journey inspired by the elements of Fire, Water, Metal, Wood and Earth combined with his personal interpretations. Since its opening, Taizu has won many prestigious awards, including most recently “Best Restaurant” (TimeOut, 2018), “Best Fine Dining Restaurant” (2017) and “Best Restaurant in Israel” (Forbes).",
		author: {
			id : "588c2e092403d111454fff71",
            username: "Michael Green"
		},
		
    },
	{
        name: "Popina",
		price: "200-300",
        image: "https://www.popina.co.il/wp-content/uploads/2017/03/img_6785.jpg",
        description: "Popina is a modern chef's restaurant in Tel Aviv, which is already an integral part of the picturesque landscape of the Neve Tzedek neighborhood in Tel Aviv: the restaurant is housed in an ancient building designed in clean lines with retro stained glass windows, stone walls and a green garden. Poppina's uniqueness in the culinary landscape of Tel Aviv passes, as its name implies, through bringing the kitchen to the center of attention. The open kitchen, located in the center of the restaurant, is used by diners to have a dialogue with the chef and his staff. The kitchen, which is the beating heart of every restaurant, becomes a significant part of a happening thanks to the original design concept of the Poppina restaurant.",
		author: {
			id : "588c2e092403d111454fff77",
            username: "Tal Carmel"
		},
		
    },
    {
        name: "Goocha",
		price: "100-180",
        image: "https://prod-wolt-venue-images-cdn.wolt.com/5e70f93995a163550094a5da/73443824-69c8-11ea-9b00-0a58647e065e_WhatsApp%20Image%202020-03-19%20at%2011.58.27%20%282%29.jpeg",
        description: "Best sea food place in Tel Aviv",
		author: {
			id : "588c2e092403d111454fff76",
            username: "Jack Boss"
		},
		
    }
]

function seedDB(){
   //Remove all restaurants
   Restaurant.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
    	console.log("removed restaurants!");
	   Comment.deleteMany({}, function(err){
		   if(err){
			   console.log(err);
		   }
		   else{
			   console.log("removed comments");
		   }
         //add a few restaurants
        	data.forEach(function(seed){
            Restaurant.create(seed, function(err, restaurant){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a restaurant");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author:{
                                    id : "588c2e092403d111454fff76",
                                    username: "Jack"
                            }
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                restaurant.comments.push(comment);
                                restaurant.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
			});
        });
    }); 
};

module.exports = seedDB;