var request = require("request");
var prompt = require("prompt");
prompt.start();
prompt.get(["train_no", "source", "dest", "date", "class_journey", "quota"], function(err, result){
	//var train_no = "18624";
	//var date = "18-10-2017";
	//var source = "BKSC"; 
	//var dest = "PNBE"; 
	//var class_journey = "3A";
	//var quota = "GN";
	var q = "http://api.railwayapi.com/v2/check-seat/train/"+result.train_no+"/source/"+result.source+"/dest/"+result.dest+"/date/"+result.date+"/class/"+result.class_journey+"/quota/"+result.quota+"/apikey/ad7l26igmi";
	request(q, function(err, res, data){
		if(err){
			console.log(err);
		}else{
			//console.log(data);
			data = JSON.parse(data);
   		    for(var i in data.availability){
     			console.log("Availability : " + data.availability[i]["date"] + " " + data.availability[i]["status"]);
    		}
		}
	});
});