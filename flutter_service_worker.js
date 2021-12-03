'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".git/refs/remotes/weborigin/main": "b3ee15af2a464323c717efc4ee33a013",
".git/refs/heads/main": "b3ee15af2a464323c717efc4ee33a013",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "aa0aebf4f1fbd82151d05659982235da",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/refs/remotes/weborigin/main": "da91ec924cbd61b0d02955c2e86d31a3",
".git/logs/refs/heads/main": "7fa7d0f1a2f73a0b3cf28838da102528",
".git/logs/HEAD": "7fa7d0f1a2f73a0b3cf28838da102528",
".git/objects/bb/c69adb9f8951ba13e621b2339614c019af7778": "97d94bcfec7180a6b9dca21860165671",
".git/objects/6c/db9f29b2b981fa0d577c140fdbb362e0f77d0a": "f98c79bb3e93f47ac61159f8e901b691",
".git/objects/17/69b6c2e8e454904ed0e673f06a4fb57512580a": "2f802cefb4d574ac589d0010dff4aff2",
".git/objects/17/bb3e3bc0cf07f9d20a08299b14e3bfa578d776": "85f90e6bad61ade2afce1edb7fab4571",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/5967947b3f81bfd9e1829ed885477fa08e48b5": "fe29bd3837c1c33ea74bfed3bc0edfd4",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/d7/23dde7392966f672e8f749ed9275453c1ec8cb": "e95ece7c3f65722599b65bdba95588dd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/f8/9b4cb64077f210875832a4792225cc306d8374": "59b14d6e4c3262fb63baf82b99cb82b8",
".git/objects/31/5aef7f2c70058fa2cef5176960afe11830e058": "1ba2d127527a9fff91d1558e255cfac7",
".git/objects/a7/311d1d50734085d78b6db47f7a8e986de8209c": "97d24b25b7d5b56bc2777f738353a318",
".git/objects/a7/bf52cf1b292b5805cfd56f736d0f0dcfd22631": "71e442161b68d1bdaa2a3ab31a0eb69c",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/41/d3e342a62f9e736bd149c780ed29353162bac6": "ddcaafe796db41bd85c214fcafe7f843",
".git/objects/d2/40c5cd964d2641770090b33cfabc80a7a46b3e": "2bec049874bd0f4568d657eb95989d3c",
".git/objects/07/46b403d5c726105094aff584a21a4452e5c466": "ae76946705c67185f351da54e92f15fb",
".git/objects/76/dcc90426a9f6303854b59e1d9cb2e9b73798a9": "3c5da4c6b53c0169a1419b60edc84908",
".git/objects/0b/b783ea423ff49546a6c3881cbe5184200e3a7e": "5de52f5ef0563749fca0d0aca34be424",
".git/objects/9c/6adb4cd82b6a3825507f971c1820a176649b28": "2e9b8cf4188b091fa58ed1404a0a52ee",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/bf/11aa988b16df05486721deb20fdf59acea22eb": "e1d2fc4c7019eadd7857582a8116f436",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4cfa26d1a96766ce1a0aee9da726a7902d9910": "58e9291091556925edbe3afdac1aad54",
".git/objects/08/77dd94c23bea10b2d4e01298954319951a8b7e": "f92b61555eeedb13c3c33cfe75910d86",
".git/objects/35/88368acb6f5debda831aa743c91ddbaedf36f2": "d612ae41f802c7dbc552320ed9c4451d",
".git/objects/35/343c4b37d614629c3df651bfcd32e888da99f3": "c71bd461683378e59af75ad1848ee2ce",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/f2/9fbb6e37a4ee6f9a02ed5aed29282331462963": "95d55280337181c33e38a2c4e4981850",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/60/5c8bcbee3ec87060862532a1e8cf21cd9e3de2": "8061e20be486fab4e48a6382df87dbbd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/14690564b7db88337bfd99dd42a993f6167468": "f8a45a186f7fb68ec6dd8a00e56ebdf4",
".git/objects/f9/80e05a4bcdae284f29b09b1c7fc3c3060b8a5e": "befa4811d2874fd800b1a969a2f29a73",
".git/objects/14/a3c015a96519f2f52529622d12c7514e612a87": "ed3ae9169315d5267bfce58238d8cfcb",
".git/objects/09/5b24b667faf7a5a6151035427ae6a2103d8f3a": "f36a6033f128cae655503bcc7e7ffa65",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/b5/b06f79e15d2c491d7ff89267fe235bf3d84c68": "6e36468c55b1802ad4c385077ab2ec74",
".git/objects/7c/6ab673840831776ebd641ae19e4392635ad49f": "e7bd5cf3ac470c3368b15fcaef5debb9",
".git/objects/30/f78c88fdec8add1a21dff9e2256ff15e1e7617": "3bcee8eb44694eaf476154827d0a6e06",
".git/objects/ed/433ef00e7d5cb5f1bdc4f7ebc4b946d59b0c18": "f8e509793b2faa2704976fda0d4f3375",
".git/objects/9f/1a99cc847b1a16c9230a510561d78481e2e94f": "117884050ff247fed56a034336c1de66",
".git/objects/c5/8d60dbf57068d9f769e54cfcc3ec4fdc2072cc": "32d63e7af6a3bc3918ca982ecf2386a3",
".git/objects/7e/47c9b858616bedeb49d2f58c45cccc6b3afca2": "1c9ed201a0de8527c0894242223d8600",
".git/objects/4c/9361ce7473d6dde3af3b309001d5ac1a3a4c45": "b701120357bd328f2f1b2b3b3a784ee8",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/59/1de77da01230fb5c6c355557b45908cade85e8": "19f3c5f155e86ca66304a7673a68e1cc",
".git/objects/46/5ccac6029eabdef3b1cd859b1ceb18d89b1eb3": "a06269610b3d1190d890d5ea4df3f562",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/45/c4452e366ac3bd2786420cbe3c29f704b31074": "ea5f08b9b16b335e7ffc4a8b2eb47d0b",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/config": "4a8c2ed57c0035775e16b612076d3f4f",
".git/index": "f6bfc5473f07e0675342b18beb049509",
"version.json": "df52dd017d87bba9c63d540ec3de4f20",
"manifest.json": "14542a6ecb53c4ab5263f6273cce3587",
"index.html": "ab9944c5815b8e3228f64bfb4a29139c",
"/": "ab9944c5815b8e3228f64bfb4a29139c",
"main.dart.js": "853ae9713df66d71d71072d36ec0c18e",
"assets/AssetManifest.json": "a69915c614e9e7e250011493a4374aa9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "ee98080d8426488d7e09e27d65806850",
"assets/assets/images/logoFull.svg": "f208045c519daa4159ddd4dad3523710",
"assets/assets/images/logofull.png": "27b820f481c767ed0b85999396a26d98",
"assets/assets/images/google.png": "3b5566d54db2f605b7a41540072493e0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
