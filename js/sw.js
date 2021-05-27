self.addEventListener("install", function(e){
  e.waitUntil(caches.open("static")
    .then(function(c){
      c.addAll(['./index.html', './css/styles.css', './js/swLoader.js', './MainActivity.html']);
      console.log("Error occured"+err);
    })
    .catch(function(err){
      console.log("Error occured"+err);
  );
});

self.addEventListener('fetch', (event) => {
    console.log("Fetch request received");
    event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log("Returned cache data");
        return cachedResponse;
      }
      console.log("loading from server");
      return fetch(event.request);
    })
  );
});
