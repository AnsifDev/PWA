self.addEventListener("install", function(e){
  e.waitUntil(caches.open("static")
    .then(function(c){
      c.addAll(['../index.html', 'swLoader.js', '../MainActivity.html']);
      console.log("Error occured"+err);
    })
    .catch(function(err){
      console.log("Error occured"+err);
    })
  )
})

self.addEventListener('fetch', function(e) {
    console.log("Fetch request received");
    e.respondWith(
    caches.match(e.request).then(function(cachedResponse) {
      if (cachedResponse) {
        console.log("Returned cache data");
        return cachedResponse;
      }
      console.log("loading from server");
      return fetch(event.request);
    })
  )
})
