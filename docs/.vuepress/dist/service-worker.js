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
    "revision": "41c7033dd44836cc648dfa9072b8e8ae"
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
    "url": "assets/js/10.b7b88b0f.js",
    "revision": "8e7c731d560c9265b0134decd23e197c"
  },
  {
    "url": "assets/js/11.efe9dd69.js",
    "revision": "fbc9389a6c2cef9f9cf2fc229b8fcdd2"
  },
  {
    "url": "assets/js/12.5c578781.js",
    "revision": "f506a22369517e99bf00a0c4edd3d8c4"
  },
  {
    "url": "assets/js/13.816bae66.js",
    "revision": "4538518a35aab8b0a08f04623f1c721d"
  },
  {
    "url": "assets/js/14.f78004c1.js",
    "revision": "63028d292b36b93facb3a31f91054a4f"
  },
  {
    "url": "assets/js/15.ca582151.js",
    "revision": "cc2cd5d41f5dae0710d7441d92195f92"
  },
  {
    "url": "assets/js/16.ac4fc458.js",
    "revision": "b75702a207eb247e8e5109f65471227c"
  },
  {
    "url": "assets/js/17.9340237c.js",
    "revision": "73ae97628f5ace707491067be5959243"
  },
  {
    "url": "assets/js/18.8f86eb10.js",
    "revision": "e30dafa0436e5e6fe5eec57acd3d8d9b"
  },
  {
    "url": "assets/js/19.2d7b2b7e.js",
    "revision": "5a9def0bb268568eb27b699ebfac7ac1"
  },
  {
    "url": "assets/js/2.b6f71f5a.js",
    "revision": "f898b4fb634787b4f041c43e84065d3b"
  },
  {
    "url": "assets/js/20.046e3240.js",
    "revision": "8871bb57e137abb9e52ec1596c28d763"
  },
  {
    "url": "assets/js/21.8893851c.js",
    "revision": "b8e6746e475930388fa75fc1654a7d50"
  },
  {
    "url": "assets/js/22.8e770f8c.js",
    "revision": "c7af72336980cb1153e64bd05d0caa07"
  },
  {
    "url": "assets/js/23.d7d9eee2.js",
    "revision": "272ac344ad3f0f6eb12797c6851b585c"
  },
  {
    "url": "assets/js/24.82a93271.js",
    "revision": "6f9d21ed107f155561149e0349c7e847"
  },
  {
    "url": "assets/js/25.7a4b4e7d.js",
    "revision": "c12153821ed7fd3c997a3d6c3e781cdd"
  },
  {
    "url": "assets/js/26.125e1819.js",
    "revision": "78f0abb53f3311314951a8c2c44584ae"
  },
  {
    "url": "assets/js/27.14a7026a.js",
    "revision": "35641da090a846f2ed731bdefdafabc2"
  },
  {
    "url": "assets/js/28.5c5fa023.js",
    "revision": "d29a42b53e41d5d56dda866986331cca"
  },
  {
    "url": "assets/js/29.243600ce.js",
    "revision": "d3e76234771c5d11dec2307eec597a63"
  },
  {
    "url": "assets/js/3.a693a447.js",
    "revision": "2853dee0ffe99b8e081516652fb780e3"
  },
  {
    "url": "assets/js/30.6e0da072.js",
    "revision": "82b4763411c5fbfac8513343adcddcd7"
  },
  {
    "url": "assets/js/31.811e494a.js",
    "revision": "f9cd88ccc61454804b4f3d08c6e3049b"
  },
  {
    "url": "assets/js/32.cf9ee089.js",
    "revision": "a0e6566ebb64ff9aff5a3b7c142470aa"
  },
  {
    "url": "assets/js/33.dae85e0c.js",
    "revision": "1ce93bb20540da0cee084883000f32da"
  },
  {
    "url": "assets/js/34.a99443b6.js",
    "revision": "db8f43335938f830c5588e60c14ed3a9"
  },
  {
    "url": "assets/js/35.097e0869.js",
    "revision": "673b60de03ee20f009e23dce6db5a72e"
  },
  {
    "url": "assets/js/36.a2bbab04.js",
    "revision": "e75e3dc711f06f50984cc9557d4c2a69"
  },
  {
    "url": "assets/js/37.2d9ac33d.js",
    "revision": "ca70836b87dbe797651496fa208b33c3"
  },
  {
    "url": "assets/js/38.e95271bc.js",
    "revision": "15277975a8434e126cb616c3038e9171"
  },
  {
    "url": "assets/js/39.c40448e1.js",
    "revision": "96bf1376ce1cd145c4a3f00037b8b68d"
  },
  {
    "url": "assets/js/4.b3b0540d.js",
    "revision": "1ff1240106f52ecddf50c58d947b2469"
  },
  {
    "url": "assets/js/40.25ece0f3.js",
    "revision": "13cb33a32427f1590d2f7942c56bef16"
  },
  {
    "url": "assets/js/41.12ad4df0.js",
    "revision": "5fda2e3c6574252cffb76b1df07b3fc1"
  },
  {
    "url": "assets/js/42.10425c9a.js",
    "revision": "f08d151d76567ff0f2cc7b2cf30c5533"
  },
  {
    "url": "assets/js/43.bfa4add3.js",
    "revision": "802983e15b411ebc626bf208a11a95b6"
  },
  {
    "url": "assets/js/44.090e0ca5.js",
    "revision": "4f22942e92ba66572ad0086dfd75410c"
  },
  {
    "url": "assets/js/45.a04318ff.js",
    "revision": "60a591ccb50ed1ca611981de0b0d616b"
  },
  {
    "url": "assets/js/46.c62fbd13.js",
    "revision": "b88861f83e4082da8083e9724fff64cd"
  },
  {
    "url": "assets/js/47.c6bce20f.js",
    "revision": "8b4413390b43b681f19b3b401aad11e2"
  },
  {
    "url": "assets/js/48.01cfd262.js",
    "revision": "2ccccf14a2c0f27b73ec097b6d2e52bd"
  },
  {
    "url": "assets/js/5.8caac652.js",
    "revision": "4c68a9db1e3d12d10ebf4a5cc1187eef"
  },
  {
    "url": "assets/js/6.a23fffc4.js",
    "revision": "85639d5c3bbdc4fb2b13a016b646058d"
  },
  {
    "url": "assets/js/7.8d8dd183.js",
    "revision": "11d85a8bd814160cbb3eeb285674e5a5"
  },
  {
    "url": "assets/js/8.5c9119ff.js",
    "revision": "b25fd41bf4cd0d1477b27107eb4c8539"
  },
  {
    "url": "assets/js/9.b8d21465.js",
    "revision": "cb415f844645afb2b20f551c52506ce6"
  },
  {
    "url": "assets/js/app.14aaaef6.js",
    "revision": "31d6d5673a4db41c0fb5c4f456472aec"
  },
  {
    "url": "icons/logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "index.html",
    "revision": "9bd6f1a6a9617dab86e57f1680ca236c"
  },
  {
    "url": "introduction.html",
    "revision": "87a51348113ad23de427a67c21694b18"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "40c3c905a1efd17c8d805576f9969c2b"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "d96aaf1645cf0296db39982cb4a66ceb"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "d0ea7d442cc0fdf0d221fda0e582247a"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "0f995b94c529be7569d2fe139ba6ebac"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "0cd9bb35887a5f03bb800fea77dcf0b0"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "8de25425e7bf5c91cb68e9125bed0016"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "a069022466c191a198076f98031b8b92"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "279e90ecef4f64dfcac668275cf3d651"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "458ce8efbab80afbdb6e0495bb384ecb"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "2db665e8e000a3b982c3646d60940c18"
  },
  {
    "url": "pages/610ecf/index.html",
    "revision": "c66e9b1a0716010ca03102a1bede5c12"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "529141f294d2cb9e750448b7072c854f"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "a6db9af5c275158630949e02c2090b30"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "02ff2dd671f90810a5f84331048f856a"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "b0a30f3f873785b505ac6ff1bf458827"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "215deec1f6033f94d3b50e3ff7985273"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "f2c87525f4d6a7df658d00e65dd942a8"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "2f84a49a09f071fb82b6c0c6977bdfde"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "72877b6aa1554fe3bdd775aeca815f71"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "0c0e4b6b42fe84bc89ef6f2302f94d36"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "04835738594fc8e9e50949d498e81189"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "2877eb04bac8f2ba7fbe80f2a24b686e"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "183dfa3ddfdf46056e1319fc4d0a5171"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "2a584caadc37416ca9234b6c1a44d028"
  },
  {
    "url": "pages/af185d/index.html",
    "revision": "a4e3ddf2e45a11800fd2b12c0cbc8bee"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "b014e98f150948a9c4e120d2eda4cf33"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "bc30d9299b21cc711fb07ae3de654e40"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "24bcabc0cd2e60df42bdc87c0953d880"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "9f19375c303a6a5b00ba24a170e6f49f"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "229958b3cb67d38053c3499ad4cd2a92"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "82d42eb5892d759d20a6622e89d0cc90"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "cce3bba948f36e8fc6cc93fc5eb1343a"
  },
  {
    "url": "pages/cc5a05/index.html",
    "revision": "8a7a85bb8101a5ac3285e88860dd12c4"
  },
  {
    "url": "pages/d00caf/index.html",
    "revision": "272d110e20536083e6bf4e988c284b9d"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "fd8db262cbb677be02e3fd9c6f1bb13d"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "108469fbf502ab8984b01dee005775d4"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "6a9532b339585c3b4b066f5f3e450030"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "0565dc5eb23ee3ff9a449183bda51d7b"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "20f0edc025d369714185ace721df050d"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "49e743873a6eeecebf695986b63358b7"
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
