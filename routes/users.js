var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
    //{"status":"success","message":"https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_2723.jpg"}
    {
      phone: "+4024-896-328",
      name: "Idsøe Szymon",
      company:"Hunday",
      email:"szymon.idsøe@example.com",
      photo:"https://randomuser.me/api/portraits/men/7.jpg"
    },

  {
  	phone: "+9031-858-05-56",
  	name: "Сole Brian",
    company:"Hunday",
    email:"brian.cole@example.com",
    photo:"https://randomuser.me/api/portraits/men/35.jpg"
  },
  {
  	phone: "+6032-824-675",
  	name: "Eik Berg",
    company:"Toyota",
    email:"eik.berg@example.com",
    photo:"https://randomuser.me/api/portraits/men/57.jpg"
  },
  {
  	phone: "+715-242-81-173",
  	name: "Danielle Lopez",
    company:"Google",
    email:"danielle.lopez@example.com",
    photo:"https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
  	phone: "+9408-6535-9805",
  	name: "Ramon Lee",
    company:"Reno",
    email:"ramon.lee@example.com",
    photo:"https://randomuser.me/api/portraits/men/78.jpg"
  },
  {
  	phone: "+9031-858-05-56",
  	name: "Amy Jean-Baptiste",
    company:"Domus",
    email:"amy.jean-baptiste@example.com",
    photo:"https://randomuser.me/api/portraits/women/84.jpg"
  },
  {
  	phone: "+9031-858-05-56",
  	name: "Leevi Rintala",
    company:"Jirone",
    email:"leevi.rintala@example.com",
    photo:"https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
  	phone: "+9031-858-05-56",
  	name: "Melissa Kraft",
    company:"Quiner",
    email:"melissa.kraft@example.com",
    photo:"https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
  	phone: "+4031-120-0991",
  	name: "Willis Nathaniel",
    company:"Amazon",
    email:"nathaniel.willis@example.com",
    photo:"https://randomuser.me/api/portraits/men/45.jpg"
  }

]

);
});

module.exports = router;
