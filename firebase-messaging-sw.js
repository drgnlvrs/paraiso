/* Mi Paraiso push notifications (neighbor chat). The Firebase settings come in the
   registration address (?c=...), sent by the dashboard, so nothing is hard-coded here. */
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
try {
  var cfg = JSON.parse(new URL(self.location.href).searchParams.get('c') || 'null');
  if (cfg) { firebase.initializeApp(cfg); firebase.messaging(); } // shows notifications while the app is closed
} catch (e) {}
