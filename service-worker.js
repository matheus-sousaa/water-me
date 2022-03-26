const cacheName = 'water_me-pwa-v1.0';
const htmlFiles = ['/index.html', '/config.html', '/dia-semana.html', '/hoje.html', '/ontem.html'];

const cssFiles = [
  '/styles/global.css',
  '/styles/config.css',
];

const jsFiles = [
  '/javascript/global.js',
  '/javascript/config.js',
];

const assetsFiles = [
  'assets/botao-voltar.svg',
  'assets/logo-192px.png',
  'assets/logo-512px.png',
  'assets/icon.png',
  'assets/logo-header.png',
  'assets/seta-direita.svg',
];

const pathsToCache = [
  '/',
  '/manifest.webmanifest',
  ...htmlFiles,
  ...cssFiles,
  ...jsFiles,
  ...assetsFiles,
];

self.addEventListener('install', (e) => {
  caches.open(cacheName).then((cache) => cache.addAll(pathsToCache));
});

// Recupera todos os nomes de cache e apaga aqueles
// que forem diferentes do cache atual
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

// Recupera todos os nomes de cache e apaga aqueles
// que forem diferentes do cache atual
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

// Tenta servir o arquivo do cache atual. Se não for possível,
// baixa o recurso da web e o armazena localmente, antes de entregar
// uma cópia para o usuário.
/*self.addEventListener('fetch', function (event) {
  let response = caches.open(cacheName).then((cache) => {
    return cache.match(event.request).then((resource) => {
      if (resource) return resource;
      return fetch(event.request).then((resource) => {
        cache.put(event.request, resource.clone());
        return resource;
      });
    });
  });
  event.respondWith(response);
});
*/