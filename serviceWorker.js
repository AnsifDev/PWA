self.addEventListener("install", function(e){
  e.waitUntil(caches.open("static")
    .then(async function(c){
      return c.addAll(['index.html', 'js/index.js', 'html/MainActivity.html']);
      console.log("Everything perfect");
    })
    .catch(function(err){
      console.log("Error occured"+err);
    })
  )
})

self.addEventListener('fetch', function(e) {
    console.log("Fetch request received");
    e.respondWith(
    caches.match(e.request).then(async function(cachedResponse) {
      if (cachedResponse) {
        console.log("Returned cache data");
        return cachedResponse;
      }
      console.log("loading from server");
      return fetch(e.request);
    })
  )
})
