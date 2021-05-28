if ("serviceWorker" in navigator){
	navigator.serviceWorker.register("serviceWorker.js")
	.then(function (e){
		alert("Response Done");
	}).catch(function (e){
		alert("Response failed"+e);
	});
}
