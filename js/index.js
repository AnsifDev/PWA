if ("serviceWorker" in navigator){
	navigator.serviceWorker.register("serviceWorker.js")
	.then(function (e){
		console.log("ServiceWorker registered");
	}).catch(function (e){
		console.log("ServiceWorker registeration failed");
		console.log("e");
	});
}
