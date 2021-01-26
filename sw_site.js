const cacheName = "appV2";

// Call install event
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");
});

// Call activate event
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  //   remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service worker: clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call fetch event
self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //   Make a copy/clone opf response
        const resClone = res.clone();
        // open cache
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone)
        });
        return res;
      })
      .catch(() => caches.match(e.request).then(res => res))
  );
});
