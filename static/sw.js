importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/140cfbf6590334d34dce.js",
    "revision": "c0b23b930390ca9d4d234ef426620519"
  },
  {
    "url": "/_nuxt/1f052cf48f3c9841a906.js",
    "revision": "f09964c6fa276c14baea0c806aed12bf"
  },
  {
    "url": "/_nuxt/1f41b4f4ccc3e115a591.js",
    "revision": "f2d75921c6fd26f969ce8aec28610aaa"
  },
  {
    "url": "/_nuxt/5be24e2e792454d1ba84.js",
    "revision": "6cd5f1411b7a93e6085f8cfe7e34921a"
  },
  {
    "url": "/_nuxt/710884d081172176e915.js",
    "revision": "5b05b68a57ee09c4bd6ca2ec18de1d29"
  },
  {
    "url": "/_nuxt/92647ec0a7beb8b2898d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/_nuxt/a3d2292aff44c7eddd19.js",
    "revision": "dfe3ddac35dc794cea2781b84ae03959"
  },
  {
    "url": "/_nuxt/b716bf8bcad4b3281559.css",
    "revision": "aebbd975561fa75e8ccd686601b3ffa6"
  },
  {
    "url": "/_nuxt/bbb1892bae1d22f347f8.js",
    "revision": "bf19c084b1d74dd8b8bdab53dbfc0c8a"
  },
  {
    "url": "/_nuxt/dd76ff62b2e3cf3e7e90.css",
    "revision": "0b21ee06951f6d7c6fc9c6b2b90a4e9b"
  },
  {
    "url": "/_nuxt/eae0220cdf5e930167b4.js",
    "revision": "ab396a806fc969631a1863a87d126da0"
  },
  {
    "url": "/_nuxt/f602622022435bc464ef.js",
    "revision": "9c57f9c108c27951a714275ab165d6db"
  }
], {
  "cacheId": "nuxt-spa-crud",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
