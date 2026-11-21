/* Mi Paraiso moved to https://paraiso2.github.io/ (Nov 20, 2026). This old worker removes itself, so this
   old address stops receiving notifications (the new address has its own). */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function () { self.registration.unregister(); });
