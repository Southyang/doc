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
    "revision": "309b3cb81cdbe711660bab9ae689fcd6"
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
    "url": "assets/js/11.ff6b8b08.js",
    "revision": "1464dda92a3c1e32869a5c52f6ecdf90"
  },
  {
    "url": "assets/js/12.9cebc999.js",
    "revision": "eef20c225ba906f4fd38797250f3c3d3"
  },
  {
    "url": "assets/js/13.eb923618.js",
    "revision": "dcd9587e8138fe5f7fcba741998a24ee"
  },
  {
    "url": "assets/js/14.3102fa1f.js",
    "revision": "1c79b1b413e82fd4bc18f9b55077423b"
  },
  {
    "url": "assets/js/15.91670fdc.js",
    "revision": "1413b7dd22b37973188000dcbfd78426"
  },
  {
    "url": "assets/js/16.ea93356f.js",
    "revision": "0dc643d56dda521fdc1c2c2223386e11"
  },
  {
    "url": "assets/js/17.7851393f.js",
    "revision": "265d24516444d1d22f41884e687e23d6"
  },
  {
    "url": "assets/js/18.f2ad80db.js",
    "revision": "a10391f287af409bd8ad3739b85e7bcb"
  },
  {
    "url": "assets/js/19.ed1ab031.js",
    "revision": "09c59b89382663f4d19783777e818e51"
  },
  {
    "url": "assets/js/2.b6f71f5a.js",
    "revision": "f898b4fb634787b4f041c43e84065d3b"
  },
  {
    "url": "assets/js/20.06d220ad.js",
    "revision": "409609df4f374bcedd09cf0a968877de"
  },
  {
    "url": "assets/js/21.9fea5e9a.js",
    "revision": "948787d70644f27bead61d1456ffe095"
  },
  {
    "url": "assets/js/22.74582696.js",
    "revision": "6ff909ad26ed5af71e87953944494a3d"
  },
  {
    "url": "assets/js/23.33498ac3.js",
    "revision": "5ebdf33e46bb536a23dbafd9be276537"
  },
  {
    "url": "assets/js/24.87177a8c.js",
    "revision": "9cc7f3a09b4c7406a0d328c7de84902e"
  },
  {
    "url": "assets/js/25.818b214a.js",
    "revision": "a80a0df56711b415f9f40d2315bc2206"
  },
  {
    "url": "assets/js/26.bff5383d.js",
    "revision": "e3d6f193965c29b1d972a94c39c52462"
  },
  {
    "url": "assets/js/27.7c019dc6.js",
    "revision": "cf792ad84dc89acdc6352d61dd505cee"
  },
  {
    "url": "assets/js/28.0fdbf0e3.js",
    "revision": "e1ecc105390b7ae58f62194f2c687e57"
  },
  {
    "url": "assets/js/29.95c6e3dc.js",
    "revision": "d89d999fc9d70619c431554f75bee154"
  },
  {
    "url": "assets/js/3.2253d7da.js",
    "revision": "ba5bc2ff134962a896b7f98aee4ce398"
  },
  {
    "url": "assets/js/30.80c29782.js",
    "revision": "0d4ac79532b78ff99f9ed51c76e7e125"
  },
  {
    "url": "assets/js/31.13da200b.js",
    "revision": "06d38a9726544c18310939b592621e65"
  },
  {
    "url": "assets/js/32.db770980.js",
    "revision": "107e91c4e7b868a2f1deeb0b48fcf649"
  },
  {
    "url": "assets/js/33.b4e17f60.js",
    "revision": "fa913c42754c812cb651ba3bfbc4f432"
  },
  {
    "url": "assets/js/34.b77a94b6.js",
    "revision": "05d9892e5971c95e9c6e196b0dcfa79a"
  },
  {
    "url": "assets/js/35.12baace0.js",
    "revision": "1ab12c811926ddf278505e17c9a20f4d"
  },
  {
    "url": "assets/js/36.8960ce5f.js",
    "revision": "4281e1ec11bb3c62b4284a249d597ab0"
  },
  {
    "url": "assets/js/37.7f9dcdeb.js",
    "revision": "ef3cba0b0a2383562c9037d6824b02da"
  },
  {
    "url": "assets/js/38.3ff99f36.js",
    "revision": "49b2ab7bf134ea650d484f76a2f7a77a"
  },
  {
    "url": "assets/js/39.137464e4.js",
    "revision": "6f20398272dcca84d5f2556d9d1f93a1"
  },
  {
    "url": "assets/js/4.b3b0540d.js",
    "revision": "1ff1240106f52ecddf50c58d947b2469"
  },
  {
    "url": "assets/js/40.e6b5cd0a.js",
    "revision": "ddc5b3bba8f4b95cecdd0604d26a9935"
  },
  {
    "url": "assets/js/41.4926bfc9.js",
    "revision": "de3d6c2a2256cbdd82bf1bfaee182bcd"
  },
  {
    "url": "assets/js/42.5cf09ee3.js",
    "revision": "6002a4522b63e7b5856a0c8726953e1e"
  },
  {
    "url": "assets/js/43.74e3e5c6.js",
    "revision": "4dd4cc8fa36f585862f16f2c9bebd3f5"
  },
  {
    "url": "assets/js/44.203ee35a.js",
    "revision": "b5ac77034bc6d3c2b7e4af08fbe02361"
  },
  {
    "url": "assets/js/45.7fb87880.js",
    "revision": "cb942fcf374af74170b494ced2d01b06"
  },
  {
    "url": "assets/js/46.4426c616.js",
    "revision": "c6eea968a619fdc3e298411049072d7d"
  },
  {
    "url": "assets/js/47.261e21db.js",
    "revision": "4db8f95846b491c79954eedab65818cf"
  },
  {
    "url": "assets/js/48.ec1ba4af.js",
    "revision": "fc4aded9aa48320cf26ee026facdb1a9"
  },
  {
    "url": "assets/js/49.8ed7cd43.js",
    "revision": "d1ab27f0ce03673de5c57bd93f21bf80"
  },
  {
    "url": "assets/js/5.8caac652.js",
    "revision": "4c68a9db1e3d12d10ebf4a5cc1187eef"
  },
  {
    "url": "assets/js/50.a5527455.js",
    "revision": "ca5708b2ba456b7162963b14672dae2b"
  },
  {
    "url": "assets/js/51.fd0eb8ab.js",
    "revision": "12d24fdad1a31e586f753e6346a408c9"
  },
  {
    "url": "assets/js/52.60af6b97.js",
    "revision": "3fff5feda3de7a4d838d47171d0382e4"
  },
  {
    "url": "assets/js/53.e94b0def.js",
    "revision": "dd4ba79f8e3b587920fe1dc03e00a950"
  },
  {
    "url": "assets/js/54.c9e5af60.js",
    "revision": "3b2fd8ad9e078511a27669b5dc97deb4"
  },
  {
    "url": "assets/js/55.82494747.js",
    "revision": "520e61d394dc76e5e2e366fe4b4adaec"
  },
  {
    "url": "assets/js/56.7568f462.js",
    "revision": "5aadaa0b8fa43b4fc18174d4366d4f53"
  },
  {
    "url": "assets/js/57.94fc864a.js",
    "revision": "31f74cd53c60b45ad81c13f2b5dae2df"
  },
  {
    "url": "assets/js/58.d361ebe8.js",
    "revision": "8c9cad9e44274d2c5226b34eefe3044d"
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
    "url": "assets/js/9.88f3e016.js",
    "revision": "b8a011dc51b072517839713c82f4875a"
  },
  {
    "url": "assets/js/app.d672e3a4.js",
    "revision": "23b176b2cd39c5102a1385d525553dd7"
  },
  {
    "url": "icons/logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "icons/logobig.png",
    "revision": "57a491858ae1659a23b7355812346736"
  },
  {
    "url": "icons/logolittle.png",
    "revision": "6b58eceb0baeb25c6195ca9af7c1535e"
  },
  {
    "url": "index.html",
    "revision": "14344c890814357c91103f01fea68955"
  },
  {
    "url": "introduction.html",
    "revision": "068fb5daf0ab521ab72adfbf66e3dd1a"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "newcontent.html",
    "revision": "7b580a9d5bada77edaef7482d5ce0f36"
  },
  {
    "url": "pages/0b600f/index.html",
    "revision": "4d19a06b49366f913844462346052879"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "50f354379d5a8321f902d210b7f002ba"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "5302d785f911bab1ad243da501726dfe"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "90ae76682539f1ac1d79c1012e42cba3"
  },
  {
    "url": "pages/1921c2/index.html",
    "revision": "a9ede89cd30ae01b17466e10bc145c94"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "6bf3c92ec05f1b45016083b08f708d42"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "df2051e5d1f6199c54b2eb9cc03ccf64"
  },
  {
    "url": "pages/2bcd2b/index.html",
    "revision": "735b18c240b7014fc95c8f8e60523213"
  },
  {
    "url": "pages/2e8fcb/index.html",
    "revision": "b27e7c47fad3714454bf31501e832165"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "8828599c6c580164cd1ffb350b96c16d"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "b11184d507af20252c1e3201b435aed4"
  },
  {
    "url": "pages/423cb4/index.html",
    "revision": "4b5f4d1f4b1fd9dcf208e9ffb007217f"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "f7c3d4327b10b0540d5ca246d5dbde29"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "27f23001bafa6365aca307587ad1be62"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "9595ede0c49f87fd7d3547c21bc15352"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "aef06446ed8de21be3bf9ab7c9e00320"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "b1d741e54ab7a72fcca785484b6bec5e"
  },
  {
    "url": "pages/6c91e8/index.html",
    "revision": "e5bbfc421daa2ef56d2f7a5a4a6e6d20"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "2c89c0bccc774efaef4c0721f2eb6f85"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "01896eaeafa6ee797ea591c8ec9bf018"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "98d8bb66e4a2e32068afb8385d00da04"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "6117f540121f5ccbb68ded0c720ca2c5"
  },
  {
    "url": "pages/7c8eba/index.html",
    "revision": "65a93669b1f6ee26dc07052fa5828e46"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "490dc2b1d5f0dd3b548deddf25a2e053"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "d38c5b24119b841acdd4c3d1ae447b63"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "d18f33544b1d28faeeabe490484d8807"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "0a34f08c9243d25f20db03ef8c201e08"
  },
  {
    "url": "pages/8f891f/index.html",
    "revision": "3c887a85d0400604305d1cbd7dfe40a0"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "3accab8007349b0fc8e4d96e221f444c"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "aa045bb0514877aebe13c4fe13fc77d5"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "70d1bdb1e76784430a3b0872d8ef785f"
  },
  {
    "url": "pages/af185d/index.html",
    "revision": "da5460be5ff19984ab2fb1cc570ad256"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "6d628ee51b23906259df0cd1f3415471"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "8ec5d74055dac5a472985c4ffc031765"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "f44f91a5be3ea2de48a1dded2f6771e1"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "318f84cc669ce3b6dd72d8a88685a83d"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "41aef27ee5bbdcff8e76b1f204ad11ca"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "cb2647f243fed0dc9ac8ddf0b1b8363c"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "023d3a944585c4b90560cc58301809d7"
  },
  {
    "url": "pages/cc5a05/index.html",
    "revision": "e9cf6d1aebc533f2d37e5ebac865b3db"
  },
  {
    "url": "pages/cde2ce/index.html",
    "revision": "27b4051ad7eed32b0a95d74eed8b8e88"
  },
  {
    "url": "pages/d00caf/index.html",
    "revision": "bc9a74401859bca32dba61969999553d"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "b4c508ffc2cd9206cadcbea00ad37e5f"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "34805e89be6fccb95b611aaf7210b82e"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "ca6571649f760ef96a30a528fa24e3d6"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "1da0ac86f07fe3f8a2bbce8d7a39dc53"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "c234442d1185f6d2f44b09d0f3d279fe"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "616d30ce7a91a639e7c804e95ae0c578"
  },
  {
    "url": "pages/f87d4f/index.html",
    "revision": "4b606d017b69c38ca3e6b8fcae2fb0aa"
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
