/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e5aa86930547f5f9fc41013172ac629a"
  },
  {
    "url": "assets/css/0.styles.39eac004.css",
    "revision": "74e45d62e2cac07bf9caa602ed47fb6c"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d53bb0ad.js",
    "revision": "8b5d2fb82a26362e8f0fb2e9986ddcc9"
  },
  {
    "url": "assets/js/11.758debe4.js",
    "revision": "6b18e3e1812b63920f6fd4f53d91b902"
  },
  {
    "url": "assets/js/12.9876cdd4.js",
    "revision": "6556ba27309c72a102959abaac6c400f"
  },
  {
    "url": "assets/js/13.fb46851e.js",
    "revision": "4cae359610843a7cbb64d7454a0fb288"
  },
  {
    "url": "assets/js/14.e912ca6e.js",
    "revision": "147a735af4b8f7127774d2413429bcc6"
  },
  {
    "url": "assets/js/15.51d5a75c.js",
    "revision": "f29f4f7bc6e1b390df0c9b5225151155"
  },
  {
    "url": "assets/js/16.f1e03a33.js",
    "revision": "49260a8f342f59c13c83ecf5e8789a1a"
  },
  {
    "url": "assets/js/17.99d49b16.js",
    "revision": "864115e31e2757f736bb991730eb8693"
  },
  {
    "url": "assets/js/18.76ede311.js",
    "revision": "e97de2f18b7ad1913c7c14641a553399"
  },
  {
    "url": "assets/js/19.d76d9707.js",
    "revision": "d1b5d2d6f08561b38dd66ea0896fd145"
  },
  {
    "url": "assets/js/2.fb0d2385.js",
    "revision": "f898b4fb634787b4f041c43e84065d3b"
  },
  {
    "url": "assets/js/20.cc02909a.js",
    "revision": "70a916f45cebcd174dadce1afd8576e7"
  },
  {
    "url": "assets/js/21.6d55825e.js",
    "revision": "da4f7d30b5628b25da6ce26c1f792093"
  },
  {
    "url": "assets/js/22.aa07e5e7.js",
    "revision": "6dc50d23138e1ad774c78fc09434c37a"
  },
  {
    "url": "assets/js/23.26ba7cd4.js",
    "revision": "82088ba41742bb118c8783ae1622fb78"
  },
  {
    "url": "assets/js/24.3545cfa3.js",
    "revision": "54e89e5964e859de21af46fc810f6162"
  },
  {
    "url": "assets/js/25.a5c351e8.js",
    "revision": "573563c100a76da688059ed4f7f9622f"
  },
  {
    "url": "assets/js/26.97164aa0.js",
    "revision": "3747a70445ec56ede9e1875ed931c1af"
  },
  {
    "url": "assets/js/27.50132541.js",
    "revision": "3ede780ce6c17efc202bd801b9db08d7"
  },
  {
    "url": "assets/js/28.8fa58876.js",
    "revision": "ef0614c5491580fe48b99cff13005299"
  },
  {
    "url": "assets/js/29.8f81b193.js",
    "revision": "c6ca10b7fc0567886635d4983cc4c470"
  },
  {
    "url": "assets/js/3.0d8f2103.js",
    "revision": "73421ef2f1799bc02b16947c48b7781e"
  },
  {
    "url": "assets/js/30.41a7f9b8.js",
    "revision": "387115124e3c20f982021e5f387d1cfe"
  },
  {
    "url": "assets/js/31.e929068d.js",
    "revision": "63e0820b0e0df9b804241d7c3404852b"
  },
  {
    "url": "assets/js/32.52084a66.js",
    "revision": "cdf261a7c97894ebfe9b1d8e80154bf0"
  },
  {
    "url": "assets/js/33.39271713.js",
    "revision": "18a2bfed41c90c1c4d3defed8c63eb87"
  },
  {
    "url": "assets/js/34.922bc0ad.js",
    "revision": "5c4a994a6ae4f6c65074513690c4f331"
  },
  {
    "url": "assets/js/35.6a4a60d8.js",
    "revision": "4a1852bb5d9fa70ea6fcc9cd03b3159c"
  },
  {
    "url": "assets/js/36.ef58fbfc.js",
    "revision": "3191abe7978ef4dfdca8a1aabf6af180"
  },
  {
    "url": "assets/js/37.89bdcfbc.js",
    "revision": "73cb3e8439fc6af7c16095fef7b58222"
  },
  {
    "url": "assets/js/38.ce8e076d.js",
    "revision": "794d6459c9cc32589268baec0a254037"
  },
  {
    "url": "assets/js/39.c629ea03.js",
    "revision": "8678e78aabb55c9fb05abc8cc4263f94"
  },
  {
    "url": "assets/js/4.7973d24b.js",
    "revision": "1ff1240106f52ecddf50c58d947b2469"
  },
  {
    "url": "assets/js/40.17790f36.js",
    "revision": "0bb17fa5aaea722b790f943c07733c6b"
  },
  {
    "url": "assets/js/41.d02ea219.js",
    "revision": "763c6e7b0ac2ec9cbbe203321711d9ba"
  },
  {
    "url": "assets/js/42.89aafafd.js",
    "revision": "008353bf7b29f298da129e4bc352c717"
  },
  {
    "url": "assets/js/43.d132d2a9.js",
    "revision": "04d7429eab2371ee15072ab474f67630"
  },
  {
    "url": "assets/js/44.58ed1acd.js",
    "revision": "755ca8033128da0cb9044b1b083ba362"
  },
  {
    "url": "assets/js/5.628b6a27.js",
    "revision": "4c68a9db1e3d12d10ebf4a5cc1187eef"
  },
  {
    "url": "assets/js/6.d5fb4be1.js",
    "revision": "91d0256b55bf0889ca9c2cadc39ce57c"
  },
  {
    "url": "assets/js/7.c7915b9c.js",
    "revision": "2f3ccc6285536b08bac99832b327a2cd"
  },
  {
    "url": "assets/js/8.67e75261.js",
    "revision": "1548eaf053b51dd559d66e983c20346c"
  },
  {
    "url": "assets/js/9.853a2658.js",
    "revision": "9b84a6423552d7a64ca3b275aeec4707"
  },
  {
    "url": "assets/js/app.c37611c0.js",
    "revision": "1669166a55d1198d74363392bb9a202e"
  },
  {
    "url": "icons/logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "index.html",
    "revision": "e96964b091d806c1e0103704506a2b67"
  },
  {
    "url": "introduction.html",
    "revision": "e807ccdb33742d50edadd97144b3d5d2"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "3669f4099f1bb9ac2d7fd9ae2244f28a"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "b638e2ffc09a0678e809fc3a37d0e3f1"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "35c6cc04993fcf44811de3e0307e3cc5"
  },
  {
    "url": "pages/181192/index.html",
    "revision": "53f0f249d8f2cd7586c3a590f54f6c3f"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "204377e22133227984d96c35dfcd51ca"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "08ecb844a5ae9d48cf7ae2cfcc3c9757"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "14cdc84e2fb80a7f65c28523e724cbe9"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "c8098d6edf5c0bf7cf4cc4b4f929cf9d"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "8f90d5071aa9643b899be2ba4910b6bd"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "e18d3418116846312e01b67cc7d33475"
  },
  {
    "url": "pages/610ecf/index.html",
    "revision": "cd5140af01779f2bb46279ab4e20708e"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "004d0d69ee72a90aef0fb3de064b01fc"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "24e1658cd7eba6cefbfa5b3cdcff1453"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "673cb9f2bb21da8be9cb5bdf63a703b3"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "6ddbcb7f90a5d5690aeb7ca23524a27e"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "41aaa9433da337f0c2a7bf863a34d2a9"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "fd9474a2d2bc747fae4e3c17e5001ad7"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "0cf143d8ab2777b2272b44b1359e98b8"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "10bef64a106fc6aead3f6fa2b5593bd5"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "de7f88739ea466be3152113aa2782acc"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "f1f2f9028e179d09c69e47c43da559ff"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "aae024551122dc3b569c4097381f8948"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "3bf6c50a74740e8d402414b25bbd6778"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "aa6a26be06873d3dad60da3f38196a15"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "bdeede69a3bf68766d4316069494a0db"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "651c23f8a9ef7cd50a08f64655f84b5a"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "2a970829f02a3640a463ed6956314607"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "970739c926ef8719c8b59ea0d4d64683"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "c4d211678ce30d9af09d2f901a2a2bb4"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "3181b55e536bce4a9abfcd732b93d2a9"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "2862c8771886b27c3e899d98a8deb517"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "b0583221cefb958bb036248a0382bbc6"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "40789dfdc0845914b9b717ff0adcb886"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "2fcd86d6b5c1f08a548b61ad3bbe81c0"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "c0c641c8e7bf7d8577b81a660e9359f0"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "88b81801bb3b66196d70c4b6a8cc6f90"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
