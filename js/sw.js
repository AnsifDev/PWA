self.addEventListener("install", e=>{
    alert("ServiceWorker first load suceeded");
    e.waitUntil(caches.open("static").then(cache=>{
        return cache.addAll(["/MainActivity.html", "/index.html"]);
    }))
})
self.addEventListener("fetch", e=>{
    e.respondWith(caches.match(e.request).then(req=>{
        if (req) { return req; }
        else { return fetch(e.request); }
    }))
})
