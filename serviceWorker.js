self.addEventListener("install", function(e){
  e.waitUntil(caches.open("static")
    .then(function(c){
      console.log("Everything perfect");
      return c.addAll(["./", "index.html", "js/index.js", "html/MainActivity.html", "https://ansifdev.github.io/MyWeb/img512.png", "https://ansifdev.github.io/MyWeb/img64.png"]);
    })
    .catch(function(err){
      console.log("Error occured"+err);
    })
  )
})

self.addEventListener("fetch", function(e) {
    console.log("Fetch request received: "+e.request.url);
    e.respondWith(
    caches.match(e.request).then(function(res){
	if (res) {
	     console.log("Returned cache data");
	     return res;
        }
	console.log("loading from server");
	return fetch(e.request);
    }));
})
