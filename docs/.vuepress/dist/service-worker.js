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
    "revision": "966a1a4f2508dca477f8464a8b568d0f"
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
    "url": "assets/js/10.ccf7bbaf.js",
    "revision": "4166522b92c4aeb5a763f2a38792c1ff"
  },
  {
    "url": "assets/js/11.758debe4.js",
    "revision": "6b18e3e1812b63920f6fd4f53d91b902"
  },
  {
    "url": "assets/js/12.62f31e62.js",
    "revision": "4e32c38159ab03e07c4062f54b3d5854"
  },
  {
    "url": "assets/js/13.cd147fde.js",
    "revision": "9720c41bc58c3f7da0a1e0d862061de1"
  },
  {
    "url": "assets/js/14.b85704af.js",
    "revision": "3bb4ecf6c7a900ced34cbf580eef81ac"
  },
  {
    "url": "assets/js/15.51d5a75c.js",
    "revision": "f29f4f7bc6e1b390df0c9b5225151155"
  },
  {
    "url": "assets/js/16.93f9308c.js",
    "revision": "eaecd93cd904bb563f4cd90dd2aa066a"
  },
  {
    "url": "assets/js/17.2f69744c.js",
    "revision": "0f1c75b5fcbeae0a187b9b5f566e88eb"
  },
  {
    "url": "assets/js/18.c4f3ed92.js",
    "revision": "a810b0106bacf23b45849d4bdb937ada"
  },
  {
    "url": "assets/js/19.ab2aaa43.js",
    "revision": "97d076c03c090b5fe27c0d39580a068c"
  },
  {
    "url": "assets/js/2.fb0d2385.js",
    "revision": "f898b4fb634787b4f041c43e84065d3b"
  },
  {
    "url": "assets/js/20.dcf1616d.js",
    "revision": "32554d7b1e2949602e9d1ca5eeb1be3e"
  },
  {
    "url": "assets/js/21.3ef9aa93.js",
    "revision": "abf50edbc59b1653936fbb5f822c4b8e"
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
    "url": "assets/js/24.5d89d98a.js",
    "revision": "3edce96487665a9a9b8383109b3c18f1"
  },
  {
    "url": "assets/js/25.6d32b0a5.js",
    "revision": "0659c6d436112aaa9bea430f083e8961"
  },
  {
    "url": "assets/js/26.57458a9e.js",
    "revision": "31c9b1816ccb741528d18e0472adaf82"
  },
  {
    "url": "assets/js/27.50132541.js",
    "revision": "3ede780ce6c17efc202bd801b9db08d7"
  },
  {
    "url": "assets/js/28.7b8439f4.js",
    "revision": "3464e07411a275751963e94c0fc6a5b7"
  },
  {
    "url": "assets/js/29.056fbd5d.js",
    "revision": "ed510d4d6011a1c8bbc55ab2b2e0e391"
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
    "url": "assets/js/31.e2e2bbb4.js",
    "revision": "5047ce3d5f4ed84a3ddb61a70f544a7f"
  },
  {
    "url": "assets/js/32.d2170bff.js",
    "revision": "5eae520049df7415222f3362a57d3232"
  },
  {
    "url": "assets/js/33.39271713.js",
    "revision": "18a2bfed41c90c1c4d3defed8c63eb87"
  },
  {
    "url": "assets/js/34.a1983cfb.js",
    "revision": "feb4e7515bda6577ed7917957edf6037"
  },
  {
    "url": "assets/js/35.6a4a60d8.js",
    "revision": "4a1852bb5d9fa70ea6fcc9cd03b3159c"
  },
  {
    "url": "assets/js/36.b9734ca4.js",
    "revision": "41e273b9c6f4d081af5bd768d48b3c0c"
  },
  {
    "url": "assets/js/37.d911e21a.js",
    "revision": "a0a919d8ab82427b3deb79527a92481b"
  },
  {
    "url": "assets/js/38.09a4ff2f.js",
    "revision": "d22f677c229940b94167789267bbabc8"
  },
  {
    "url": "assets/js/39.3e3befd8.js",
    "revision": "4c050eb2829dc27222280a53a40f0037"
  },
  {
    "url": "assets/js/4.7973d24b.js",
    "revision": "1ff1240106f52ecddf50c58d947b2469"
  },
  {
    "url": "assets/js/40.b9a1e007.js",
    "revision": "b6d350c28671c5a14255f194e283309b"
  },
  {
    "url": "assets/js/41.af939e7c.js",
    "revision": "c44b3691140a0c91bd237758dd8679d6"
  },
  {
    "url": "assets/js/42.89aafafd.js",
    "revision": "008353bf7b29f298da129e4bc352c717"
  },
  {
    "url": "assets/js/43.c41ef7e5.js",
    "revision": "389b89849710150ad49c8452f30a033c"
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
    "url": "assets/js/6.527043ec.js",
    "revision": "0d072ced22a21ed0484dca4e9d921fe8"
  },
  {
    "url": "assets/js/7.b60e3101.js",
    "revision": "b331a88d39e2b9ab42f7e3deb94518dc"
  },
  {
    "url": "assets/js/8.98dd6245.js",
    "revision": "a31a7148765cfef3f684faf84d93a75b"
  },
  {
    "url": "assets/js/9.065721ed.js",
    "revision": "b98e43f550f18cebc4be74c76df4e1fb"
  },
  {
    "url": "assets/js/app.1ae17ac5.js",
    "revision": "9e488ab59f2e47d4f497c2a0acdd602e"
  },
  {
    "url": "icons/logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "index.html",
    "revision": "a0b9016241f5dd2e66c4af569796a118"
  },
  {
    "url": "introduction.html",
    "revision": "1138695bcffc4980e63228a05a963652"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "4a6e5d7e3448f044ecc75019826cecca"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "e263be4d853b138264eba851821ad8e0"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "a92343a68b5954b1282eda70de276cac"
  },
  {
    "url": "pages/181192/index.html",
    "revision": "342a47d566b29aeb90a2d9a06b3f785b"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "38c40cfb09f235d4e9578e5ad214bb27"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "ae433ab3f10adae497979ef686b7f924"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "94bf695cd711773db62805c3f2e860f0"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "787c978ae30fb21b67151e5545bc859c"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "2f67cf1de2f1a2c5bc7644d6eea533a1"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "e4e78b9cbd3bae79ad2d753c666b703d"
  },
  {
    "url": "pages/610ecf/index.html",
    "revision": "267366f161c244725281e0e813795a0f"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "75bf130ba6e6dcf5a64420aa45a58bcf"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "6b02dcd64de5a40136927df7c2369487"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "e3274be479a8e02ffba5dd9fb3287bee"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "4aad012f5ec006ba134e8b385b90b3f5"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "c17803de51e7ff9a4830bca7c7f66761"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "830e447782e9a3e644dad6790136f71c"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "09ab32a5b1c0ac62ff7c5b870205a684"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "e3c1d14c9c61d241d5078efec84694c3"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "503c825d663b05a1ddba8f3c8c7592ae"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "51f5556296ad6d31e9c4da91534621e5"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "242ed44fa9893fe6f50e7517a31acb5b"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "3850708b9141f4a0b60575fd74328406"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "346dc94ea3f1795235dac477d8b21d41"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "c0419a65d64c37d3bfdbdc897a796ede"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "e307455263017a20339382f0fa4a2ae7"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "cd54077b0eaca68c17c9217527690a7d"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "a17b39f81efe66ed369d4e5cfb474abe"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "91967a3a86040d241a5bd5c04af6b7be"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "66ddd6ec8ee85bba8b6cb8b164c99527"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "7bdc45501bbb9d8646ade0e56c04816b"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "309d160bec0c79d06c99876d7782e238"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "b4703b1f9ea391078ead58083b607f47"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "cd6f3a3f190944b7fd9916cf77f3e402"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "20a0e30cf61c8658197b8d3f6b1f2d96"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "5223d59500c162e3c3ce83faca81d773"
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
