var request = require("request");
var prompt = require("prompt");
prompt.start();
prompt.get("pnr", function(err, result){
	//var pnr = "4853957549";
	var q = "http://api.railwayapi.com/v2/pnr-status/pnr/"+result.pnr+"/apikey/ad7l26igmi/"
	request(q, function(err, res, data){
		if(err){
			console.log(err);
		}else{
			//console.log(data);
			data = JSON.parse(data);
			console.log("PNR Status : " + data.passengers[0].current_status);
		}
	});
});