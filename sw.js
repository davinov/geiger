// cache everything so it works offline at the party
const FILES = ['./', 'index.html', 'manifest.json', 'icon.svg', 'pripyat.mp3', 'alarm.mp3',
  'music/Imagine%20Dragons%20-%20Radioactive%20(Lyric%20Video).m4a', 'music/Radioactivity%20(2009%20Remaster).m4a'];
self.addEventListener('install', e => e.waitUntil(caches.open('geiger-v5').then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
