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
    "revision": "8b3eb7b38bc57715759f96bca380a3c8"
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
    "url": "assets/js/11.04f0cde7.js",
    "revision": "c9c148e81f43f72b0fa5f374781991d1"
  },
  {
    "url": "assets/js/12.9876cdd4.js",
    "revision": "6556ba27309c72a102959abaac6c400f"
  },
  {
    "url": "assets/js/13.cd147fde.js",
    "revision": "9720c41bc58c3f7da0a1e0d862061de1"
  },
  {
    "url": "assets/js/14.c77ccb2f.js",
    "revision": "58603b8f5366c8bd799a9a61de70603a"
  },
  {
    "url": "assets/js/15.7cb0d983.js",
    "revision": "53eda8f806c1723a28de8af153a174d7"
  },
  {
    "url": "assets/js/16.a44ff5ae.js",
    "revision": "49a21d43e21464b897da2cd1a05aadda"
  },
  {
    "url": "assets/js/17.2f69744c.js",
    "revision": "0f1c75b5fcbeae0a187b9b5f566e88eb"
  },
  {
    "url": "assets/js/18.4eea5550.js",
    "revision": "ce1eb72cef1aa6f034a49915e59851a2"
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
    "url": "assets/js/20.9ae833ff.js",
    "revision": "5dd4d4cfe530f61528dc12017b8a66bd"
  },
  {
    "url": "assets/js/21.53fbaeb2.js",
    "revision": "dfa289ac1daaca5da3343e10abf889fb"
  },
  {
    "url": "assets/js/22.3bd0c793.js",
    "revision": "dcb346a6e11b73a58d458ada1726f59f"
  },
  {
    "url": "assets/js/23.26ba7cd4.js",
    "revision": "82088ba41742bb118c8783ae1622fb78"
  },
  {
    "url": "assets/js/24.384a48db.js",
    "revision": "dd9e0e2818521c36b34351c88d6a6f5e"
  },
  {
    "url": "assets/js/25.f50c7610.js",
    "revision": "c4bf937a11a15770845f803a11b23332"
  },
  {
    "url": "assets/js/26.5a2d2d0c.js",
    "revision": "b44b915c8f228a028dd912580830333b"
  },
  {
    "url": "assets/js/27.392e9c89.js",
    "revision": "cf0466ff842f97f7453c5a9c21d3b011"
  },
  {
    "url": "assets/js/28.6e3025d5.js",
    "revision": "150ad9bafd3d9d9f32ac87b7a8198e53"
  },
  {
    "url": "assets/js/29.d59ceb29.js",
    "revision": "77e65936bc4b4e0c402341dd61ace2c4"
  },
  {
    "url": "assets/js/3.0d8f2103.js",
    "revision": "73421ef2f1799bc02b16947c48b7781e"
  },
  {
    "url": "assets/js/30.c165bfef.js",
    "revision": "2a3118012269342605cb4631e565f32a"
  },
  {
    "url": "assets/js/31.e929068d.js",
    "revision": "63e0820b0e0df9b804241d7c3404852b"
  },
  {
    "url": "assets/js/32.52c79524.js",
    "revision": "5935f29bf68dca44599ab427651dc63a"
  },
  {
    "url": "assets/js/33.95a8ab4b.js",
    "revision": "7d715f61da534ee9a508a1a39da704f1"
  },
  {
    "url": "assets/js/34.0bc184eb.js",
    "revision": "aeeefd33362277658d6e312e2796e582"
  },
  {
    "url": "assets/js/35.ba6f71e3.js",
    "revision": "ccb14c74c671c74164c7ada2dbdf35cb"
  },
  {
    "url": "assets/js/36.4c920484.js",
    "revision": "6e0f4d65a3ad5ef12da2c9fa6c2fb700"
  },
  {
    "url": "assets/js/37.83e15994.js",
    "revision": "815a3d6b42e382175a970a8ec4cef719"
  },
  {
    "url": "assets/js/38.ea25c565.js",
    "revision": "0fc593736da92aaba43407535e986e16"
  },
  {
    "url": "assets/js/39.f9f120fa.js",
    "revision": "467b40e06723235d3932eceb5a432d2e"
  },
  {
    "url": "assets/js/4.7973d24b.js",
    "revision": "1ff1240106f52ecddf50c58d947b2469"
  },
  {
    "url": "assets/js/40.7382d34d.js",
    "revision": "70df78ae3e850f10cab677c66d9912d9"
  },
  {
    "url": "assets/js/41.ad4dee94.js",
    "revision": "c56b388b246120870f2463f982a5c177"
  },
  {
    "url": "assets/js/42.5121bb0b.js",
    "revision": "70cc2008290bad4ccd11028cdec30fe3"
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
    "url": "assets/js/7.7acd1bbf.js",
    "revision": "11d85a8bd814160cbb3eeb285674e5a5"
  },
  {
    "url": "assets/js/8.46037be4.js",
    "revision": "c50661ce444f14a53f97668f6d5605ae"
  },
  {
    "url": "assets/js/9.5cc2bcf8.js",
    "revision": "0329a80492f84d0e8de53d25885318fe"
  },
  {
    "url": "assets/js/app.092247fd.js",
    "revision": "af2741760d9bfc27032d729165888aab"
  },
  {
    "url": "icons/logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "index.html",
    "revision": "a437c85b45073fbe61428eaeef41da69"
  },
  {
    "url": "introduction.html",
    "revision": "d244f65e13a70c56ceadca476a3e0f5a"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "335aebcc3d9fb0a0735845257d9595f2"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "e2b98ea542f43c5ae789cf3a516c3d8d"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "96efb11c69b3e4b8707ad2638d043b98"
  },
  {
    "url": "pages/181192/index.html",
    "revision": "9297f3a1b71805c25d777b7ecb58d3e3"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "d380b1a880d2978fcdbce34f903e05f3"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "538630af4f9e86dd0a3aa22b347c18d2"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "7bad6df2e186a81216ad84d2074764c1"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "b39ad0ae6caecac42a9ab39b67f6ea23"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "3b046a2f37ed4c334fe5489fe6a82849"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "a0c8d93b310f1e9a8999fda9f6050230"
  },
  {
    "url": "pages/610ecf/index.html",
    "revision": "980fe4fef57c33e6beef34d9109a52ca"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "f82aa996818ce66f240fe1c5df1ea3d4"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "194412ff86dba54aea98625572c67c0a"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "b72054ed20fdfc1672b1bfd042162c6f"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "8f0da503809ecbbd7ebe7e8350f1b1d9"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "8ef3555d28b7d555d26d3fc1a81173b5"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "d823a6e305a8ca8b4a8e80cb0d480310"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "8fea8792b81f5fef133800c0c3805f1e"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "bbbd34ed0f75703b2da6e09154679b60"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "6a011ef033899b9ac167684fb82d8035"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "e5836147a6cea533957182cd5e0bc6c6"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "5811995312239350359d6b7cd415db81"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "6194ed52fa0793ab57bd03cbdb5be109"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "dc1cb72979effef6f44bce460509b5cf"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "4787504a8898513096454097b7c528c8"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "2bff1b1fcc3a18027dc3c27be83805eb"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "4fab441bf59e02ee1b99503a63b92670"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "08c27b08ff7e93eafd0d7e8f708d0144"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "676859464a7e737f6282035a381a9ceb"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "96e8863b11602adcc2f7a0e0610bbc9c"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "cc3194bdbe56463828da7be3a5b51dfd"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "bc48fbda4ae0d02148763c3575fc1bea"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "3e035eab70590d5b3083608250c09504"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "6c46c1bedeaa205df65528a5f72afdf1"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "31454d2439e27468f6fab9694e520da4"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "c0d87da22ef272787e8bc248b077e245"
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
