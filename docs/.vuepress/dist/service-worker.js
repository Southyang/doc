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
    "revision": "d34df9d39716294446846110a03ce28a"
  },
  {
    "url": "apple-touch-icon-152x152.png",
    "revision": "36148088273eca87806f279d7ab4a93e"
  },
  {
    "url": "assets/css/0.styles.12504bc4.css",
    "revision": "2b3d07c14859773d8e5b9eaca462d739"
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
    "url": "assets/js/10.091bf6c5.js",
    "revision": "79258eb77a1f10d863df091f4e378947"
  },
  {
    "url": "assets/js/11.d1a0e434.js",
    "revision": "5a4c7e09c95609b657316f0467eeb681"
  },
  {
    "url": "assets/js/12.532c62b8.js",
    "revision": "a5c622525bf27fd2fd916f978091d9a7"
  },
  {
    "url": "assets/js/13.236b3a43.js",
    "revision": "a819b4284e201ba6ca809cd4e32abe72"
  },
  {
    "url": "assets/js/14.495a24e3.js",
    "revision": "ef28d60cd2d1974e3455a072608a759d"
  },
  {
    "url": "assets/js/15.fa62ec73.js",
    "revision": "ef42ee6a857f04ec3f13feafda630ea6"
  },
  {
    "url": "assets/js/16.a9cadccc.js",
    "revision": "846280af36a8022c3aaf3003b305e012"
  },
  {
    "url": "assets/js/17.63855343.js",
    "revision": "6553379dcc1dc74b57b1f200701aa5fd"
  },
  {
    "url": "assets/js/18.40e91bac.js",
    "revision": "1f268aaa17d63324373ba43c666bdacc"
  },
  {
    "url": "assets/js/19.6d749e35.js",
    "revision": "d691c8d6e77b9fb9129960bfb05de387"
  },
  {
    "url": "assets/js/2.8135f503.js",
    "revision": "0c625c7ba1f59b609e601348b6a98ac9"
  },
  {
    "url": "assets/js/20.dec481be.js",
    "revision": "d9af8a118f3459f9848296bb3d260cc1"
  },
  {
    "url": "assets/js/21.d6103d64.js",
    "revision": "fc9bdcfae618b1b3fc0f41f0efa57eea"
  },
  {
    "url": "assets/js/22.e3eb4a7d.js",
    "revision": "e5f63de2a95a2fe7e40c24eefbd969f1"
  },
  {
    "url": "assets/js/23.3ab61d22.js",
    "revision": "bc9f941da8d1a31187bb81f14e9683f4"
  },
  {
    "url": "assets/js/24.5a503ba0.js",
    "revision": "3cf8a0b3edce160f5e1cdf24db1c4c10"
  },
  {
    "url": "assets/js/25.c1db428d.js",
    "revision": "0fa776c52c650dd12b82007790450bef"
  },
  {
    "url": "assets/js/26.9db69132.js",
    "revision": "fef3aaa12861607b316692c358fe10c9"
  },
  {
    "url": "assets/js/27.624dd1e0.js",
    "revision": "6079da5287ffb93d65c25bb053e10fa0"
  },
  {
    "url": "assets/js/28.552a770b.js",
    "revision": "9d30dbcc2c0752fc8c8d82cf46ffbc84"
  },
  {
    "url": "assets/js/29.e98c08c7.js",
    "revision": "5dda3e7b4f5a9604fb4538bd76ef615c"
  },
  {
    "url": "assets/js/3.c554437f.js",
    "revision": "9a260e09eb3559d0b1220fe1dc1796b6"
  },
  {
    "url": "assets/js/30.adac8690.js",
    "revision": "a07d7331d8d224b2054760450845c15f"
  },
  {
    "url": "assets/js/31.5b064b4b.js",
    "revision": "70df15cd41f83eeb6f75f44d5c9ddfcc"
  },
  {
    "url": "assets/js/32.7e91f350.js",
    "revision": "98c30cd71f9aac526fc6b923d85fda31"
  },
  {
    "url": "assets/js/33.11404f00.js",
    "revision": "f1bd5f9dd23e2a714d611e047b636dbb"
  },
  {
    "url": "assets/js/34.5ea55496.js",
    "revision": "694ddcb3ea8e99ca42c7445faf6e1c71"
  },
  {
    "url": "assets/js/35.61282603.js",
    "revision": "f178716f53d350f899aaf194ef762888"
  },
  {
    "url": "assets/js/36.7bf39065.js",
    "revision": "ddf0ee7d9c31702f9782cf66db409639"
  },
  {
    "url": "assets/js/37.eade595e.js",
    "revision": "b75f656e837243b892d390047e5439e2"
  },
  {
    "url": "assets/js/38.0d4ebd81.js",
    "revision": "7ea938829a0c413d279eed6b67b4e47e"
  },
  {
    "url": "assets/js/39.4fff4ab1.js",
    "revision": "330d6527753face62b194a68f16aacfb"
  },
  {
    "url": "assets/js/4.4b96bc07.js",
    "revision": "da735d1ad803397f9a426c39e481a53f"
  },
  {
    "url": "assets/js/40.24d4240e.js",
    "revision": "439c732e398ccda65c84e2884a05e540"
  },
  {
    "url": "assets/js/41.04ce8121.js",
    "revision": "f8e8d6bae8138e7a70484410dbcb64a3"
  },
  {
    "url": "assets/js/42.c4edfaee.js",
    "revision": "7cd3cc5fa664e94f8f04842e6e2af981"
  },
  {
    "url": "assets/js/43.1fcf9aaa.js",
    "revision": "09f09866ab68476ebe4e11d36facccf7"
  },
  {
    "url": "assets/js/44.37bb35d6.js",
    "revision": "7333189a42ce1db0e72d0f453528f650"
  },
  {
    "url": "assets/js/45.f34d4633.js",
    "revision": "86f0173352fbf1b04c6a00dec92919b6"
  },
  {
    "url": "assets/js/46.0671a2a0.js",
    "revision": "09b883b7fb852a5f83b54d1241c96b07"
  },
  {
    "url": "assets/js/47.4c978036.js",
    "revision": "d10dfc810b915049e820d1c03142b9e9"
  },
  {
    "url": "assets/js/48.97cebcb1.js",
    "revision": "44af836688a7a01acc15f7b93fb097a2"
  },
  {
    "url": "assets/js/49.9518358f.js",
    "revision": "96f45c8a193e02952e95b1a9c8e12975"
  },
  {
    "url": "assets/js/5.40ce5b3c.js",
    "revision": "fa1dae38107180dfde488fc346eb922c"
  },
  {
    "url": "assets/js/50.890af2ef.js",
    "revision": "b7ebb0c4a39c042cc83c568114853000"
  },
  {
    "url": "assets/js/51.3cf2e85e.js",
    "revision": "6ad5261fb2a739c15ee37932fc9e9b19"
  },
  {
    "url": "assets/js/52.d598e494.js",
    "revision": "ea5d41f5a5f8f9cd4dc59ba4a1a33131"
  },
  {
    "url": "assets/js/53.b1ee5096.js",
    "revision": "74699cded2335694e980b29d91f2e0fe"
  },
  {
    "url": "assets/js/54.24f76336.js",
    "revision": "576eb2ae330340cd0f510d0dc48c9580"
  },
  {
    "url": "assets/js/55.3ad20c40.js",
    "revision": "9d8f418271d5f0c4eadaa36fcff2ec0c"
  },
  {
    "url": "assets/js/56.89ef4f3c.js",
    "revision": "4886d91b2088b412da9e6434e9af583f"
  },
  {
    "url": "assets/js/57.233b6853.js",
    "revision": "2a98c916b713613597559a1325336095"
  },
  {
    "url": "assets/js/58.0daf746a.js",
    "revision": "095b9fb06297569814e3730c7920adbf"
  },
  {
    "url": "assets/js/59.f249e875.js",
    "revision": "2529d5e7614d8725236287392e60a09a"
  },
  {
    "url": "assets/js/6.4051b925.js",
    "revision": "e46cdd588f468ecd3fddba13cb889c18"
  },
  {
    "url": "assets/js/60.49b9d7d0.js",
    "revision": "df09fd5124ff63686a0c5afd78d7fa08"
  },
  {
    "url": "assets/js/61.549c0cba.js",
    "revision": "1e20394440ccffd16d8933b94250ed6a"
  },
  {
    "url": "assets/js/62.c1748a34.js",
    "revision": "95f1d5657df50fcb0cb48987aa015117"
  },
  {
    "url": "assets/js/63.98821d1e.js",
    "revision": "347f60a726e174dfcce591681d0ac8e4"
  },
  {
    "url": "assets/js/7.85eec3cd.js",
    "revision": "344b4ea1826d62863b4502d100e5838a"
  },
  {
    "url": "assets/js/8.a82e53f8.js",
    "revision": "cc21871d9a7e547b4f7f49662003f913"
  },
  {
    "url": "assets/js/9.6967cc75.js",
    "revision": "72a80b44c06e521b1c7a6def565ccb77"
  },
  {
    "url": "assets/js/app.833f24f6.js",
    "revision": "006a532e63220125541a6fa9634098b4"
  },
  {
    "url": "index.html",
    "revision": "382bc21fa58b48d6aeeed483a28b4254"
  },
  {
    "url": "introduction.html",
    "revision": "1452ca65d4eb83ef1af4bbf3bcbd5a0a"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "logo288.png",
    "revision": "57a491858ae1659a23b7355812346736"
  },
  {
    "url": "logo52.png",
    "revision": "6b58eceb0baeb25c6195ca9af7c1535e"
  },
  {
    "url": "msapplication-icon-144x144.png",
    "revision": "ff0d98789893b4d7c438931b7fb2ec14"
  },
  {
    "url": "newcontent.html",
    "revision": "1f9783fad6ce88121af35e7a627484fb"
  },
  {
    "url": "pages/0b600f/index.html",
    "revision": "7b4f4fa9f24ffa1cfd8ee51c4cc93c2f"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "9a233e1b6a917d1f4843de214cdbabcb"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "eccdec41e7a0c1deb0d4d3d4684829b1"
  },
  {
    "url": "pages/16eaa8/index.html",
    "revision": "28f7cd3cc03205583f60a41ce67bb316"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "a6ad95432afdd5406ae741355e97f96e"
  },
  {
    "url": "pages/1921c2/index.html",
    "revision": "589d0ced62739938802ed4f6683f5732"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "2132d901ed2ab3be10e61b269a0926b0"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "c148d4416a462766ea00b47e4c43ce93"
  },
  {
    "url": "pages/2bcd2b/index.html",
    "revision": "552f2f614f969b099f307ffc4d81bddd"
  },
  {
    "url": "pages/2e8fcb/index.html",
    "revision": "f487641c13e8e656823d245afb8addd9"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "4e87fedf79673db3cd9444cd7b6eef5f"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "467365a5e1ae4ff6baf46af3905cc227"
  },
  {
    "url": "pages/423cb4/index.html",
    "revision": "5a8384909b4e8d3fd580f6aa4d31fe92"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "f3b2594bd2cebadcb81d81af9c5aa99e"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "ab9e3532ac96bd242cce8a0e15e1d550"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "269d5ffbde28a23648f2807c3dee8436"
  },
  {
    "url": "pages/6254c0/index.html",
    "revision": "6e9bd56a17175f811d74f67bb27d878e"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "fdaea84aa8c8d3076e5c866724e6c804"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "f1c39b033bb6d1975b7a3239010025cd"
  },
  {
    "url": "pages/6c91e8/index.html",
    "revision": "ccdd37410aa75383c086b8a67c0c40e1"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "2bb46da8e5e63e1f2a26bea5e27683ea"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "daf5842038742e837ec22c1cb78eb7a9"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "d7d660006fa70f0f557ef2001094d8e1"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "bc03cbc7c8b8f6ea020a2ef2f8e29926"
  },
  {
    "url": "pages/7c8eba/index.html",
    "revision": "ae273a98c63338e1bea42504f38e07bf"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "9d943ffe76ac1d30d278cc2e74928874"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "f48e1fded5c13f1fd6d6423a2b5d633b"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "75e161a73ee2ce80981a99ce3b5fab32"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "e5218ad6012db90cba7b08fd595ad7ff"
  },
  {
    "url": "pages/8f891f/index.html",
    "revision": "c125ac7c9154888c685e7593c8bcdea9"
  },
  {
    "url": "pages/900ada/index.html",
    "revision": "5c86f0ce36fecac1fc34ce426f897107"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "88faf6fe53d7ffaca814e65e1b84ea93"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "439dfd3fde58ceaa4b73174e03645450"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "b685d88a578cd81cd0506c1515d36836"
  },
  {
    "url": "pages/af185d/index.html",
    "revision": "a855fd29ecb8c80642b72312cd8a9ff0"
  },
  {
    "url": "pages/af873c/index.html",
    "revision": "25ce76ba8829815e81f3b88939166a91"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "4e78e8f75416614560ff7ee19063e450"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "6781759e2a1b39b42046a97a91082739"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "8d4ac4e8efbe2f30f1a359c37775c899"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "876b307ccfafe40bb4344e92e206f6f7"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "d43b91096c2c3c975a02189b81efb790"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "3a6e75e6fc79135c514874cf063c7b21"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "cbfaecc23fe0205caafbc716a0ed85df"
  },
  {
    "url": "pages/cc5a05/index.html",
    "revision": "bbc36151bd92beb394b75456238afed2"
  },
  {
    "url": "pages/d00caf/index.html",
    "revision": "e01bc8d4b0df8e7ea7f4383a78dc3c2b"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "fbcc271068f23cfeb3e47d1308e03848"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "106e6e3a44141ffc12d5549cdfcb2664"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "8dbb8fac9b012cad2e636b013b5fa8a0"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "5da67aa7369cacf0382873e233161775"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "8321107c73d745084d2622e7b9f68482"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "f2b36ee842cc90991dea78630c779892"
  },
  {
    "url": "pages/f87d4f/index.html",
    "revision": "8b0751f87cff9b8d6358e85d0a5742d2"
  },
  {
    "url": "planning.html",
    "revision": "a642d592b9ddecaaf353cfa89fa54e02"
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
