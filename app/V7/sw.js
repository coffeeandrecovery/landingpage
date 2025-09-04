// Dieser Service Worker ist absichtlich minimal gehalten.
// Er dient hauptsächlich dazu, die PWA-Installationskriterien zu erfüllen.
self.addEventListener('fetch', (event) => {
  // Leitet Anfragen einfach an das Netzwerk weiter.
  event.respondWith(fetch(event.request));
});
