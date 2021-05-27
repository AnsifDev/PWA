if ("serviceWorker" in navigator){
	navigator.serviceWorker.register("js/sw.js")
	.then(function (e){
		alert("Response Done");
	}).catch(function (e){
		alert("Response failed"+e);
	});
}
