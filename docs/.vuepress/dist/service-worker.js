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
    "revision": "b3104ed400c430675dcd6d8a60999f81"
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
    "url": "assets/js/10.dd2fc9a7.js",
    "revision": "0d7122b462c9c2dfd71e682df124fbce"
  },
  {
    "url": "assets/js/11.7bf29322.js",
    "revision": "202c74b787d373b880fc3a377a122c4c"
  },
  {
    "url": "assets/js/12.aa6ca290.js",
    "revision": "afd5fd247ba8b38cb63bf66c611458ce"
  },
  {
    "url": "assets/js/13.29103952.js",
    "revision": "b2c280da6dfd9f36b7e8071a2647881c"
  },
  {
    "url": "assets/js/14.c39ab4df.js",
    "revision": "fc610f18088c06f38c38f4820ad39f74"
  },
  {
    "url": "assets/js/15.c84b54ba.js",
    "revision": "a4492ae850056780dc80041752daa441"
  },
  {
    "url": "assets/js/16.7ffa71eb.js",
    "revision": "421b9649d218dceb772047e22de6cd46"
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
    "url": "assets/js/19.014587e0.js",
    "revision": "fca5edd34063e4cc81aec1de9804ea8a"
  },
  {
    "url": "assets/js/2.8135f503.js",
    "revision": "0c625c7ba1f59b609e601348b6a98ac9"
  },
  {
    "url": "assets/js/20.116ead3e.js",
    "revision": "d273196cac7e167e6ad130322a5c373d"
  },
  {
    "url": "assets/js/21.c9906b57.js",
    "revision": "fc4c125e271ee8297f3632d06b65f9e7"
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
    "url": "assets/js/26.9db5b438.js",
    "revision": "1b787e7c2b641553f508028df28b9247"
  },
  {
    "url": "assets/js/27.1a1478c6.js",
    "revision": "824a2e91ba67c58ad52e01df3121a27c"
  },
  {
    "url": "assets/js/28.a9a1f262.js",
    "revision": "5260f02706d5bb88f11dfaf9216cf5fa"
  },
  {
    "url": "assets/js/29.591c9d80.js",
    "revision": "5930fbb36dfe263fb0fd6031aa36be0b"
  },
  {
    "url": "assets/js/3.c554437f.js",
    "revision": "9a260e09eb3559d0b1220fe1dc1796b6"
  },
  {
    "url": "assets/js/30.645d8523.js",
    "revision": "d7a6707048bb44d68d7120aacf85665c"
  },
  {
    "url": "assets/js/31.5b064b4b.js",
    "revision": "70df15cd41f83eeb6f75f44d5c9ddfcc"
  },
  {
    "url": "assets/js/32.39748f20.js",
    "revision": "1ef22e822dd7e1d419be24bb86cee803"
  },
  {
    "url": "assets/js/33.11404f00.js",
    "revision": "f1bd5f9dd23e2a714d611e047b636dbb"
  },
  {
    "url": "assets/js/34.3cc78d60.js",
    "revision": "3a1d62d7325a4d1bda66affa493b4a83"
  },
  {
    "url": "assets/js/35.ee06439a.js",
    "revision": "05d215f3d246803c0f3f832891efd14e"
  },
  {
    "url": "assets/js/36.9d085e50.js",
    "revision": "beacb0d57c2cf500024def4944bd914d"
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
    "url": "assets/js/39.3d440cf3.js",
    "revision": "f338be9d59ad3f54f9e6e2208762ca31"
  },
  {
    "url": "assets/js/4.e7817aa2.js",
    "revision": "8d953440913bab05eeb6b440e52bb7b1"
  },
  {
    "url": "assets/js/40.c45f56b9.js",
    "revision": "42533e319bc86b8712ed2a244ba7a6fb"
  },
  {
    "url": "assets/js/41.9c27c668.js",
    "revision": "11142d5a4159492d83d2348d7ab63767"
  },
  {
    "url": "assets/js/42.132cd90f.js",
    "revision": "377503ab3ee4db77027eb2c815f1e083"
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
    "url": "assets/js/45.be95c114.js",
    "revision": "08126969d19c544aca22c8578be02140"
  },
  {
    "url": "assets/js/46.def9b5c6.js",
    "revision": "65622723046249bc3587e14f41518a76"
  },
  {
    "url": "assets/js/47.cf9b54d0.js",
    "revision": "d09a2083d86613eb235c071f75a587ef"
  },
  {
    "url": "assets/js/48.fb8e6429.js",
    "revision": "fe8c9319a91d99a54df3c76e32408f85"
  },
  {
    "url": "assets/js/49.b0f2ba41.js",
    "revision": "c9527cea05ec602de1948562e472a72b"
  },
  {
    "url": "assets/js/5.40ce5b3c.js",
    "revision": "fa1dae38107180dfde488fc346eb922c"
  },
  {
    "url": "assets/js/50.27a6aa1e.js",
    "revision": "273b7a4cdf10d6c01ff4457448c30ae8"
  },
  {
    "url": "assets/js/51.9935d0bd.js",
    "revision": "f379ae102bc4b0b5db19b07f153fdc1d"
  },
  {
    "url": "assets/js/52.d85a69f7.js",
    "revision": "ae10c5508f5c243a47a65f33b2ba5bda"
  },
  {
    "url": "assets/js/53.f7f98a28.js",
    "revision": "2f55369d15e7a8f805b4b7930ab8eafb"
  },
  {
    "url": "assets/js/54.77f67dec.js",
    "revision": "634fc3e70f5e0cb819dc269689623efb"
  },
  {
    "url": "assets/js/55.ede8456e.js",
    "revision": "26e5234e460e5da550958729f5ec6b3e"
  },
  {
    "url": "assets/js/56.94147306.js",
    "revision": "edc4d68d3e962525ffcb8fff731cbb6d"
  },
  {
    "url": "assets/js/57.c5a39115.js",
    "revision": "5eb607d22226cc472d30a4aec85c90c6"
  },
  {
    "url": "assets/js/58.fb697dfb.js",
    "revision": "48fa0d3393ee0eef6ee4c00ccc765ad5"
  },
  {
    "url": "assets/js/59.f9df2edc.js",
    "revision": "d13b6c8af168147dbeafd4827caf774b"
  },
  {
    "url": "assets/js/6.4051b925.js",
    "revision": "e46cdd588f468ecd3fddba13cb889c18"
  },
  {
    "url": "assets/js/60.96142ab8.js",
    "revision": "f7399a873f2173a2b9fe641b5885b605"
  },
  {
    "url": "assets/js/61.17b4478d.js",
    "revision": "a4913186a63708f129845a2baf55ce77"
  },
  {
    "url": "assets/js/62.e576e16a.js",
    "revision": "60d0df18c951599980957ee87b796fae"
  },
  {
    "url": "assets/js/63.f8820243.js",
    "revision": "75b163863a0e2f78f53500849c317ca2"
  },
  {
    "url": "assets/js/64.b493189b.js",
    "revision": "d62af1fc21ecf0da6a11d915b9e34fac"
  },
  {
    "url": "assets/js/7.28bcc1a9.js",
    "revision": "c075a1c5ce7bd912fbdb6e2294e2869a"
  },
  {
    "url": "assets/js/8.03ba333b.js",
    "revision": "9afd5b994a3d692ce90937e7760fba71"
  },
  {
    "url": "assets/js/9.a326e487.js",
    "revision": "49794fbae0e6798f74613fde8506b6ef"
  },
  {
    "url": "assets/js/app.4867017e.js",
    "revision": "f0ebee5526daa654ea53f95e5f9f98f8"
  },
  {
    "url": "index.html",
    "revision": "0d9f07f653568be67e892401c0f21597"
  },
  {
    "url": "introduction.html",
    "revision": "77e8dfdb4ed089849ab0864697c4781e"
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
    "revision": "6d98e2a10da50bb11534ff6e367160df"
  },
  {
    "url": "pages/0b600f/index.html",
    "revision": "3c4bb00d46989e81b9286f9fd376e48a"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "055f1c19ea5a7625c6c0b9a334c799ef"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "2ae90c01797c66e1147fc774f69c35bb"
  },
  {
    "url": "pages/16eaa8/index.html",
    "revision": "c5e31cda1a7968b743721cfe24622769"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "b3fda6761aa74ef641b0e1d4aafcf7d6"
  },
  {
    "url": "pages/1921c2/index.html",
    "revision": "8d727f79d1abcd4b94e1889ee6908b12"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "9b9efd467cc5eddd1fb3064fe6c068d1"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "3326c2ad6a558abfc657710f1f5629ae"
  },
  {
    "url": "pages/2bcd2b/index.html",
    "revision": "37a7a9d062c1e41472f595700a17ed7f"
  },
  {
    "url": "pages/2e8fcb/index.html",
    "revision": "737f89deae89426033efaca01871e9a9"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "b14dc4ef13f903864787cd5dcd8d91f4"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "81a4b156fad20a854b1c15db308cf4fd"
  },
  {
    "url": "pages/423cb4/index.html",
    "revision": "065ca3dc1966781bbaefef8fbd1ce8ca"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "ece158e684e9d5572cfa23dea0f1e381"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "5c9e24015ce9d662d8c816c401e5fbff"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "3bcb0f4deaf552a0f341a23b5b479777"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "aed86bc242fac1a46dffc4abb48e229b"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "0c0288a6371b3fcf0fd21953cc23d937"
  },
  {
    "url": "pages/6c91e8/index.html",
    "revision": "d6a2a188d33eb92eab36714a57fae2e4"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "5be965a18c1112493e720f7d354cf46e"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "0c8b2d9545d8600522926613341c5659"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "724576a14222dd70182c4448311e2245"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "18617c8ec1f8f549a360e664028f058a"
  },
  {
    "url": "pages/7c8eba/index.html",
    "revision": "32bf65c55748302265460e9071887eec"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "c03a597669ac260a561278652b746439"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "ec61c67b5f64dec28b312dff5f9e6d12"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "49c68d70df7365aec6d0e20d3bb5ee45"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "095b68f0b1699c8a69a4cc6cc1e788a8"
  },
  {
    "url": "pages/8f891f/index.html",
    "revision": "1b3a53e3bcd4893f0cdfbbbc20797e57"
  },
  {
    "url": "pages/900ada/index.html",
    "revision": "d83d2f3397c3ab0437174ce5a9dba3db"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "c425851f3f1d075e1f452ba99c856fec"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "913348a9009b8e26189773647481aad3"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "2227bf5f8599cfbbe0b1ac81550af46d"
  },
  {
    "url": "pages/af185d/index.html",
    "revision": "ff6e2dc1c8104a325c9d9ebec4d011d0"
  },
  {
    "url": "pages/af873c/index.html",
    "revision": "45f2242423918bd0250cd663b6047f65"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "8a4808760cbf5ce5ca4bf1786db818bf"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "7ead7255989fb15d2b72f7586a5df51c"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "4f1a4dffcfd54a510e8acb9d1a5aa0ee"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "4920ea40137bfab4b802f016d6db33e4"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "73ab71c867f4a0cc041a93ef06d4d2f9"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "4f11b35a1772fb5ed15157d0fb7d5c80"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "2544dd46d7276caab8afc5aace2d89da"
  },
  {
    "url": "pages/cc5a05/index.html",
    "revision": "9d1970d8895b5d5ac86f74286ae4ca9f"
  },
  {
    "url": "pages/d00caf/index.html",
    "revision": "e34e4f96365d6ca8de570161c494b185"
  },
  {
    "url": "pages/d3179f/index.html",
    "revision": "e7cf3908a1747f9cc60d6d2eed066d37"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "a864ba97d5d81f8f21ba2ef71b888fc3"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "eb4e4e5aac01d9e88994fc0650947807"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "f52e7d7e9ffec43908c0a94b548e3c5a"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "a12ce1af44f5316a58c71383aca578b9"
  },
  {
    "url": "pages/ef18b3/index.html",
    "revision": "48abf681526d599a73e718bc1e1824cd"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "6cf6bdc6296f76c0befc706c1c0f12b7"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "ae5f3ac6301e34ba754a6d1d861aa34f"
  },
  {
    "url": "pages/f87d4f/index.html",
    "revision": "82fd552c85584d29e7c5834762e14263"
  },
  {
    "url": "planning.html",
    "revision": "9e1cf19d2fc71ae4184633e35e6def27"
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
