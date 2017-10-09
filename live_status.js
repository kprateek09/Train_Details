var request = require("request");
var prompt = require("prompt");
prompt.start();
prompt.get(["train_no", "date"], function(err, result){
	//var train_no = "12553";
	//ar date = "09-10-2017";
	var q = "http://api.railwayapi.com/v2/live/train/"+result.train_no+"/date/"+result.date+"/apikey/ad7l26igmi/"
	request(q, function(err, res, data){
		if(err){
			console.log(err);
		}else{
			//console.log(data);
			data = JSON.parse(data);
			console.log("Train Poistion : " + data.position);
   	 }    
	});
});