self.addEventListener("install", e=>{
	e.waitUtil(caches.open("static").then(catch=>{
		return cache.addAll(["./index.html", "./MainActivity.html", "./css/styles.css", "./js/swLoader.js", "https://ansifdev.github.io/MyWeb/img512.png"]);
	}))
})

self.addEventListener("fetch", e=>{
	e.respondWith(caches.match(e.request).then(req=>{
             if (req) { return req; }
             else { return fetch(e.request); }
	}))
})
