self.addEventListener("install", function (e){
	e.waitUtil(caches.open("static").then(function (cache){
		return cache.addAll([
                "./index.html",
		"./MainActivity.html",
		"./css/styles.css",
		"./js/swLoader.js",
		"https://ansifdev.github.io/MyWeb/img512.png"]);
	}));
});

self.addEventListener("fetch", function (e){
	e.respondWith(caches.match(e.request).then(function (req){
		if (req) { return req; }
        else { return fetch(e.request); }
	}));
});
