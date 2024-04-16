'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7ad93a55977500af236ae518129b5fac",
"assets/AssetManifest.bin.json": "6c3178d4e56ff4c58553fb0d828db260",
"assets/AssetManifest.json": "0a8a5d7e24878a09ce2a0fbce966dd80",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Black.ttf": "6729fd5454518cdaf492a2b3fe27cf88",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Bold.ttf": "cda675687ed1576b7bda072838c0ed5f",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-ExtraBold.ttf": "398d2a98487424a3e5051de8cb0fb1c0",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-ExtraLight.ttf": "9bf46a52b39d0fc53e9a54dacde2e0bb",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Light.ttf": "ffcfcc231a05032bca6e0819aa60eacb",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Medium.ttf": "21f0c6935e6ad3e4481e94b236624764",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Regular.ttf": "75527903c6a793772b02807c5343f4c8",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-SemiBold.ttf": "6668035e904e215087e94774d5f47c8d",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Thin.ttf": "2b1587c2f8be37f7398be7f4f19a8ff1",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Black.ttf": "f14bd7108661cd47700d5a44a022bd5e",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Bold.ttf": "fbb783a6ff2aeffdf2a29f5d264496bd",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-ExtraBold.ttf": "1177a7b9d97d8950ca1db767f726b05c",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-ExtraLight.ttf": "10fca32dbec65058e90fd538526b4bbb",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Light.ttf": "452b14e88276b52e26ac460b9cb2c7e1",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Medium.ttf": "d24c84084e577fb3bb03517c8a20d26c",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Regular.ttf": "c01f450f90ada0f820d9cc4d5ea03f95",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-SemiBold.ttf": "b0508904816b5574a2e746447b17f010",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Thin.ttf": "1861f94a8101745776210ea2261d5754",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Black.ttf": "4869abae4e7bf986f51df0e55b8a2e60",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Bold.ttf": "2a34ce4751fb907989564832d51c5fbb",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-ExtraBold.ttf": "2ebdf77ca2b3f99b1573992c3bf11fcc",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-ExtraLight.ttf": "64b11693cdc8bd10467f5c062f5596ee",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Light.ttf": "39e16bc02ffc25fcd09865fdd85d80f9",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Medium.ttf": "27267fd3e592898c9d23bd4bb54a731d",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Regular.ttf": "fe4d7da2189c37c45f5d34b46fdf0c6e",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-SemiBold.ttf": "902fd4a8f6b3ecc8d1fa40f819b22190",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Thin.ttf": "789c98e16f99aef60a98f7a151bcc24e",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Black.ttf": "7b7314d4fd5caf6d6c62bdcdf28d4098",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Bold.ttf": "114981c5bc640a521c59be521497a6b2",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-ExtraBold.ttf": "a52323f61e2d50da02ba9fc27929269d",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-ExtraLight.ttf": "b8fa618894eebab79f091ba0636a1b0a",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Light.ttf": "c7f053b72c794ade00e4a825cbdf19db",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Medium.ttf": "1e4238d991444359b56bcf90c9e12d6f",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Regular.ttf": "7c40f880a43986fe144bfbf477b9fd3f",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-SemiBold.ttf": "f428b8238a05b4855640dbaf0aecaa0c",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Thin.ttf": "16f15b0b5ecfb8e809b8f01178ea81f8",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/images/1.png": "9ca9f2425e71528ffc19b43547e365bd",
"assets/assets/images/2.png": "fc64b9d88457608b469227ac9221b593",
"assets/assets/images/3.png": "129f198d715bff1afb8f280fc1be9dcc",
"assets/assets/images/5Star.png": "efc987b8a0fef9c6db81282e91166757",
"assets/assets/images/AboutUsChartImage.png": "1adb3b38d37378b2f836b8a52da63845",
"assets/assets/images/arrow-bold.png": "f42971b660e21e762c82e7620fb52697",
"assets/assets/images/arrow.png": "4bff51b9098498c021129ec620b8d14a",
"assets/assets/images/carHyundai.png": "3a98f4e9c90b44d504cfe3922b64ea75",
"assets/assets/images/contactUs.png": "498712419d9b9a2d744b27e2e160492e",
"assets/assets/images/EditProfile.png": "e3d857be5b40520fcc4b931f0c66ffc6",
"assets/assets/images/EmptyReportImage.png": "f084a947f90919a83f0b35622bc3c629",
"assets/assets/images/Feedback.png": "e3cc32079c9e307caedcc80e52f47545",
"assets/assets/images/FeedBackMobile.png": "e6d9daf9f2772c60e340514d39bed56e",
"assets/assets/images/Flag.png": "dada74ecab647855b0b28ae420d3f8b2",
"assets/assets/images/FooterHomePage.PNG": "853710adb4bf29f663e87fed5d04acf6",
"assets/assets/images/home.svg": "fcf701fb2089a6b0432b9be959b87fa2",
"assets/assets/images/Iconbag.png": "51987ddf9ddb443eb690d40dd55c9619",
"assets/assets/images/Iconcheck-box.png": "eb5dd4404169ff2bd242e5cc63e06b60",
"assets/assets/images/Iconlist-box-line.png": "d6f7249682f3f6f50b8c47bd2ec4cf41",
"assets/assets/images/Iconmingcute.png": "79989edf7b3380de0ed2b205beba312e",
"assets/assets/images/IconSettings.png": "392c034951ade6eda9b6834ff7db518c",
"assets/assets/images/IconSignOut.png": "359ae17f6a47f133233539b6f1e88796",
"assets/assets/images/Iconusers-four.png": "580771571341540ac89af4fc8c56a88e",
"assets/assets/images/IconVector.png": "2d711d8adcace58a5ccfbbc212291723",
"assets/assets/images/Image1.png": "945af634aed92442f42d05bbba6a8591",
"assets/assets/images/Image2.png": "4797680d17a23879fe2f2f3b085d3369",
"assets/assets/images/Image3.png": "70866cb4c8614dddfaee4f40cddf3045",
"assets/assets/images/ironicon.png": "d9907a2134eb315eadce4cfcf158e5d3",
"assets/assets/images/LogoDvier.svg": "26c239e7f4be8a900640e31bb858f3ab",
"assets/assets/images/LogoEslmAR.svg": "7f7bf623809618d5c4f74e526714ccd4",
"assets/assets/images/LogoEslmEn.svg": "43394330c01ecebe2e41674d6bd41eb4",
"assets/assets/images/LogoVendor.svg": "dee09e6a8ecc9eb36cb34193e2d2aae8",
"assets/assets/images/LogoWorker.svg": "d7d40bd95e9f6ed058ceb0a93c15fa96",
"assets/assets/images/offersImage.png": "d9c0f34a77d52e2d4214d8951a7cf8e4",
"assets/assets/images/ourServices1.png": "17a5c4cb67fc60880665270266e0f620",
"assets/assets/images/ourServices2.png": "c7b576b33d37176295fb8bfa588b3279",
"assets/assets/images/ourServices3.png": "d5f4314cbdd5f7fdcb25f97b7c5a2048",
"assets/assets/images/ourServices4.png": "3cb6874fe017b2565e76fd7caded00e4",
"assets/assets/images/ourServices5.png": "5082a3d7a2a31eb8516f9959cdbf4382",
"assets/assets/images/Pending.png": "be2b824631d8db2e5a24f1b838bcb584",
"assets/assets/images/ProfileImage.png": "9c6a8a24c8d5e6c91ce80712ae438215",
"assets/assets/images/ProfileImage1.png": "a0c2fb4373ed07eb3f696c297682336e",
"assets/assets/images/ProfileImage2.png": "a93968d88172ff6ab977d752eff16ab6",
"assets/assets/images/ProfileImagesAdd.png": "f382b21f28e80b3a56d3116665fa00de",
"assets/assets/images/TermsImages.png": "d8f4111278a106ca6853580d22c0d6d1",
"assets/assets/images/WeAreSorry.png": "f388e94e44d0c62ae9ff68c99f993f5b",
"assets/assets/lang/ar.json": "9d70959db6fdfb9d1228c2d04d754d09",
"assets/assets/lang/en.json": "3d137e5a81f11d619652703e47b132cb",
"assets/FontManifest.json": "37b667b5940c770ff8f4e869008e200b",
"assets/fonts/MaterialIcons-Regular.otf": "b6ae66da3bd9c808a3d6c550d00117e5",
"assets/NOTICES": "54909ac686b6f83287b4633c6bdb4719",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c28258a333ec8e53a688ad074fd53c9c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8dc099775ee24aa309977ecfb23d301c",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"file.js": "4f13884147b748050148e5c007cc1272",
"flutter.js": "d41d8cd98f00b204e9800998ecf8427e",
"icons/android-chrome-192x192.png": "3498bbf23a3833197287c91ff159ba21",
"icons/android-chrome-512x512.png": "85079ec74966a078051b49e6df9f54bf",
"icons/apple-touch-icon.png": "f978525cc57ce5cf272056ffd5ce822d",
"index.html": "89151460d95e8328ae183e30a4bcfb42",
"/": "89151460d95e8328ae183e30a4bcfb42",
"logo.png": "3498bbf23a3833197287c91ff159ba21",
"main.dart.js": "b69ed6d2f675f5f0e34f85a39d47edd6",
"manifest.json": "d4705b1c481198950d88a37d7ddc74f8",
"version.json": "a1792bfc6f95a7d4e2eae01d32c5eedc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
