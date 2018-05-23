const paths = [
    '/index.html',
    '/css/bootstrap.min.css',
    '/css/font-awesome.min.css',
    '/css/style.css',
    '/js/jquery-2.1.4.min.js',
    '/js/bootstrap.min.js',
    '/js/scripts.js',
]

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('offline-v1')
            .then(function (cache) {
                return cache.addAll(paths);
            })
    );
    event.waitUntil(self.skipWaiting());
});

function fetchAndCache(url, cache) {
    return fetch(url).then(function (response) {
        if (response.status < 400) {
            cache.put(url, response.clone());
        }
        return response.text();
    })
}

self.addEventListener("fetch", function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request).then(function (response) {
                if (response) {
                    return response;
                } else if (event.request.headers.get("accept").includes("text/html")) {
                    return caches.match("/offline.html");
                }
            });
        })
    );
});