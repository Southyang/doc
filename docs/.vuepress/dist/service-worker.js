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
    "revision": "80f6e6634ff1de08d42ed1a1b823f29a"
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
    "url": "assets/js/10.1f15e310.js",
    "revision": "8b5d2fb82a26362e8f0fb2e9986ddcc9"
  },
  {
    "url": "assets/js/11.3641f379.js",
    "revision": "14aa0ba158ae8d0989edc867a5055ba4"
  },
  {
    "url": "assets/js/12.c86385ee.js",
    "revision": "d2a72dd68419886d2045baec2881ddb5"
  },
  {
    "url": "assets/js/13.cf85c674.js",
    "revision": "3121e1e4e417b84871b08522ee6bc99c"
  },
  {
    "url": "assets/js/14.08afbdd0.js",
    "revision": "b626022033ca2b3a9ea694b1404630e6"
  },
  {
    "url": "assets/js/15.25969871.js",
    "revision": "6f45db90daa6b0ca017bfcbfd40260f3"
  },
  {
    "url": "assets/js/16.11db939c.js",
    "revision": "4bdf4d83611d8422d95a41c3cf948a0e"
  },
  {
    "url": "assets/js/17.096d7a36.js",
    "revision": "e2ea00984631c5a2d962ee4a662a908a"
  },
  {
    "url": "assets/js/18.0e486aa7.js",
    "revision": "e14574d97c6da5fbb2f806057634f81e"
  },
  {
    "url": "assets/js/19.9035036c.js",
    "revision": "d771681303e9a8bda346ffffafdccc2e"
  },
  {
    "url": "assets/js/2.b6f71f5a.js",
    "revision": "f898b4fb634787b4f041c43e84065d3b"
  },
  {
    "url": "assets/js/20.7c27e6ea.js",
    "revision": "39b2eae7f5b90ee84e501b46f9e4c4a1"
  },
  {
    "url": "assets/js/21.f7fc37dc.js",
    "revision": "3b9264317db45769cfbc3f2024b95bef"
  },
  {
    "url": "assets/js/22.78040fe7.js",
    "revision": "2d23d8f505ff7a392e8180ddbc3004c7"
  },
  {
    "url": "assets/js/23.9e09b67a.js",
    "revision": "7b61435e2ffc461b9bb54921f5c7a7c8"
  },
  {
    "url": "assets/js/24.77126834.js",
    "revision": "ceb66956699c63d99c9054194034f464"
  },
  {
    "url": "assets/js/25.4dd4532f.js",
    "revision": "bdb35773a301b73aa08ee96b45cb007a"
  },
  {
    "url": "assets/js/26.ee7b397a.js",
    "revision": "d8105e8c90642aeb61c9a796aeeb5a33"
  },
  {
    "url": "assets/js/27.be8d7942.js",
    "revision": "07112d5148c18fc7ec6107b640d57703"
  },
  {
    "url": "assets/js/28.3b6a0331.js",
    "revision": "ebfd1f546cfb09de6b6303480b5bbf4b"
  },
  {
    "url": "assets/js/29.5ef8d473.js",
    "revision": "a664aad1fc98897e9503442c11e200e6"
  },
  {
    "url": "assets/js/3.84b84428.js",
    "revision": "f60085229db04459673b19cd1951b36f"
  },
  {
    "url": "assets/js/30.c7d17470.js",
    "revision": "54064e7c418d1a39462adb10285f79e6"
  },
  {
    "url": "assets/js/31.c210fbd7.js",
    "revision": "c57ecccbed9f37b459c549b9b4d59d2a"
  },
  {
    "url": "assets/js/32.3ea3c557.js",
    "revision": "e707986d6913dce1ff96b506b07a457e"
  },
  {
    "url": "assets/js/33.dbbb94b9.js",
    "revision": "5ca0e572dd632bb4824093ddaf751873"
  },
  {
    "url": "assets/js/34.c89be59b.js",
    "revision": "1aab630d3b3501f505636c945d736cf5"
  },
  {
    "url": "assets/js/35.f4196bc8.js",
    "revision": "5c7d95458f2fd19f1180ee45f0bb4e5f"
  },
  {
    "url": "assets/js/36.2e295e9a.js",
    "revision": "5fef27edeb3f7324f22fa25f1b4330fe"
  },
  {
    "url": "assets/js/37.0cb49acb.js",
    "revision": "2843865ee06ac95a795e03090422e677"
  },
  {
    "url": "assets/js/38.6b32218b.js",
    "revision": "228cf8e15771d9cfe28ebfd1c5024df3"
  },
  {
    "url": "assets/js/39.176d40c0.js",
    "revision": "61dfc00038858176403b9ea45e138413"
  },
  {
    "url": "assets/js/4.b3b0540d.js",
    "revision": "1ff1240106f52ecddf50c58d947b2469"
  },
  {
    "url": "assets/js/40.be606b88.js",
    "revision": "323d836474203a03a197d874939e1ca9"
  },
  {
    "url": "assets/js/41.ec44b314.js",
    "revision": "aed2d5c202fae1001c5a2cac3b738082"
  },
  {
    "url": "assets/js/42.53c0fca5.js",
    "revision": "8d25f54bc8caecfe77fd4a767c31dd8b"
  },
  {
    "url": "assets/js/43.f36ea94c.js",
    "revision": "cff56ae42cde8e58aa5cfd9f2d97e902"
  },
  {
    "url": "assets/js/44.6fccfa5b.js",
    "revision": "ad3d5d863321e7618f654b60fd388948"
  },
  {
    "url": "assets/js/45.512dc56a.js",
    "revision": "f1956879ed3de3bc0a9c6f9051360bca"
  },
  {
    "url": "assets/js/5.8caac652.js",
    "revision": "4c68a9db1e3d12d10ebf4a5cc1187eef"
  },
  {
    "url": "assets/js/6.9b059bf2.js",
    "revision": "db44386520d3d87d7f4d70af2e2e8e80"
  },
  {
    "url": "assets/js/7.91ec1598.js",
    "revision": "b331a88d39e2b9ab42f7e3deb94518dc"
  },
  {
    "url": "assets/js/8.65c47432.js",
    "revision": "c50661ce444f14a53f97668f6d5605ae"
  },
  {
    "url": "assets/js/9.fdb2f50d.js",
    "revision": "b63493f508561c9c0f27a347c507f4d0"
  },
  {
    "url": "assets/js/app.3ebc0744.js",
    "revision": "48841bd856753d42291326ed33e3f35f"
  },
  {
    "url": "icons/logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "index.html",
    "revision": "6e8dd892fc3c8c7d67ce48dd823a78af"
  },
  {
    "url": "introduction.html",
    "revision": "9af5a9ddff531be828aad268409b2dc3"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "6bc2576331a5f932811c6239cd4bd521"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "acfe3655f3d9e837f270b0b505706619"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "146b6a70be7497e39deb8afc6192806d"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "c69e375415696d99673ffde0ad625a55"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "ee5397d82683d7906f49374d5a02b04a"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "974c8a72c93994cf918e15f4c940c87c"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "7b81d07ec8ff8c4483cffa7930720fef"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "48c107574cffd60e19f9fd5819b9d9e6"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "f42f4a8bf4ae6b713ef35016b46c0247"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "c3aa5267493db3b1a11c2b3277c16c45"
  },
  {
    "url": "pages/610ecf/index.html",
    "revision": "3c2ed650910f9eba35c152afcd852558"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "83645a74ecc99d07d3688c9c851602d1"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "146e9da6224badee671f3cccd86aba35"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "0fdf30e210946d6f2942cbe612fb5dc8"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "7fb8d5a8290d49671c9af3c86d661b25"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "72ed7bf20e33f5d4f0d82cf79f530079"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "fc626b25fd0d25e4c4aed5594066c2fb"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "ad02c6d2b52d8c83c19e6e02cbd212aa"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "bfbcad237c17e1b98afc764ed1d92c46"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "745851b6f1eb95c8109eaab0e12fd714"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "b81525776dc7578c4d1c7a49f6d7f591"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "34fd05023da59343f4152f50c909d573"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "7694675b751cf5633a6b4b85ad14155d"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "17c9f47b1ea06548bc8fcdfed2f3938d"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "1a7f1f60f58289f031f5ff25f7ef7980"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "8e23c9f3cbd2dc131ce06cf52fc53879"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "bf122eb0b43c19bd00490cfbc7f5e111"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "1ff7a75012313c1815928f981074d8f3"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "729a396e03afaf94f67a0f1b68bedb20"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "8722c07b83d6fc0fa77ae4a7c3127560"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "9b9d6da079a7686c00acfc010069f3ee"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "c2b5edb7f22b2eaabf1c9cf9ca5a5207"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "74b0d2d1578f9a4a199ce6059be3b7fa"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "9d2a0b9e78cf416fe98526f1709cc886"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "e64cd972e5671745b4e51c30915a87f0"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "66316e84ab74c80c9ffdf2b530f47d75"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "0c9f7b38b02cd7c848d5c92410f6ccb3"
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
