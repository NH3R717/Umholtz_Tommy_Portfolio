

var weather = {

    "created" : "2014-10-17T14:42:39Z", 
    "lang" : "en-US",
    
    "location" :{ 
    "city" : "Orlando",
    "country" : "United States",
    "region" : "FL",
    },

    "units" :{
    "distance" : "mi",
    "pressure" : "ins",
    "speed" : "mph",
    "temperature" : "F",
    },
  
    "wind" :{
    "chill" : "76", 
    "direction" : "360", 
    "speed" : "5",
    },

    "atmosphere" :{
    "humidity" : "48",
    "pressure" : "29.65",
    "rising" : "0",
    "visibility" : "10",      
    },
    
    "astronomy" : {
    "sunrise" : "7:26 am", 
    "sunset" : "6:51 pm"        
    },
    
    "current condition" : "Fri, 17 Oct 2014 5:53 am EST temp 76 text Fair",      

    "forecast" :[
    {"date" : "17 Oct 2014 day Fri" , "temps" : "high 80 low 62 text Sunny"},
    {"date" : "18 Oct 2014 day Sat" , "temps" : "high 82 low 63 text Partly Cloudy"},
    {"date" : "09 Oct 2014 day Sun" , "temps" : "high 85 low 65 text Partly Cloudy"}
    ],
 };
 
console.log("Weather Forcast");
console.log(weather.forecast[0].date + " " + weather.forecast[0].temps);
console.log(weather.forecast[1].date + " " + weather.forecast[1].temps);
console.log(weather.forecast[2].date + " " + weather.forecast[2].temps);
