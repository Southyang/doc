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
    "revision": "18127d22a6fddb0d47dd8d94b15b977e"
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
    "url": "assets/js/10.82443fbd.js",
    "revision": "d3135ac02a825869ddb145e039db2795"
  },
  {
    "url": "assets/js/11.55d51b35.js",
    "revision": "f01d6e25664bd9a91b5f8d277e2fd324"
  },
  {
    "url": "assets/js/12.45b6180f.js",
    "revision": "2befd69acb50fa7636993b254f063817"
  },
  {
    "url": "assets/js/13.12ef4fb9.js",
    "revision": "0c9951f1f8fa5fbd74aa426744d5c4a8"
  },
  {
    "url": "assets/js/14.c9cfd98b.js",
    "revision": "d4a538f72d01a43e5d090d9db70411ef"
  },
  {
    "url": "assets/js/15.16b00fbe.js",
    "revision": "74e7f6b14908949fad78434c8a7731b4"
  },
  {
    "url": "assets/js/16.25076332.js",
    "revision": "2826dc6792b86ec6c9a14b3b26288aaa"
  },
  {
    "url": "assets/js/17.0218291a.js",
    "revision": "f763cd4159fa80ad480a67ab8fe64a23"
  },
  {
    "url": "assets/js/18.3541030e.js",
    "revision": "73bcf315144e8504715f6db08a7aa09c"
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
    "url": "assets/js/20.a07f532a.js",
    "revision": "775fe139bde1eeef383f7829e40f548a"
  },
  {
    "url": "assets/js/21.e0dc363a.js",
    "revision": "2221e331fa6db0105851b886cd87345d"
  },
  {
    "url": "assets/js/22.74582696.js",
    "revision": "6ff909ad26ed5af71e87953944494a3d"
  },
  {
    "url": "assets/js/23.17024d48.js",
    "revision": "7785f5401cd0651256b8a5b54cfaf71b"
  },
  {
    "url": "assets/js/24.e942aad6.js",
    "revision": "949c7d1fc5c698ae9dbf0d1256571f74"
  },
  {
    "url": "assets/js/25.037e7f66.js",
    "revision": "f549111036497e4d7b33996830c05319"
  },
  {
    "url": "assets/js/26.a22509c2.js",
    "revision": "5bc23b8df9e1b8fa6599d4b70a3d1cb9"
  },
  {
    "url": "assets/js/27.597ec34b.js",
    "revision": "2b44f0e3ea140cc9b7361b6712f12cc4"
  },
  {
    "url": "assets/js/28.b3206884.js",
    "revision": "7ce48daaed25b5f0ed7c9131575851e7"
  },
  {
    "url": "assets/js/29.889a92a6.js",
    "revision": "697a04d96b6ed6bfdd6cee944edc1283"
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
    "url": "assets/js/31.00bc9998.js",
    "revision": "9842d8341e7fed5ac7bb3aa02c11cc7d"
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
    "url": "assets/js/36.23d3bc44.js",
    "revision": "ca1c5a36efa21b2d4106f9240c161857"
  },
  {
    "url": "assets/js/37.04ebbe48.js",
    "revision": "32a50666d05adc83ec2c30b87966cd57"
  },
  {
    "url": "assets/js/38.3ff99f36.js",
    "revision": "49b2ab7bf134ea650d484f76a2f7a77a"
  },
  {
    "url": "assets/js/39.b5dc8fa9.js",
    "revision": "8a754839bca21e1785c2905c4652e83e"
  },
  {
    "url": "assets/js/4.b3b0540d.js",
    "revision": "1ff1240106f52ecddf50c58d947b2469"
  },
  {
    "url": "assets/js/40.95b8b15a.js",
    "revision": "746ea9a722839b072ff93ae0560807e9"
  },
  {
    "url": "assets/js/41.82eb16b4.js",
    "revision": "b06a031743b6b228c034b53c7c440772"
  },
  {
    "url": "assets/js/42.4dc7062e.js",
    "revision": "0c8face334161b73d1028c8820a09851"
  },
  {
    "url": "assets/js/43.a8e9bc34.js",
    "revision": "27cee560ad2e4434ed1e0d1d3e605bad"
  },
  {
    "url": "assets/js/44.ea339ad5.js",
    "revision": "da027c1820a69289c7c479a53b814a9b"
  },
  {
    "url": "assets/js/45.1c6428f7.js",
    "revision": "009c8aff6def4b905f3cebd0717ef1f3"
  },
  {
    "url": "assets/js/46.3a848721.js",
    "revision": "491c4d3b5282b58635601274b06f958b"
  },
  {
    "url": "assets/js/47.261e21db.js",
    "revision": "4db8f95846b491c79954eedab65818cf"
  },
  {
    "url": "assets/js/48.080d7e60.js",
    "revision": "61821f787879ac7accc78bce39caa538"
  },
  {
    "url": "assets/js/49.fc706053.js",
    "revision": "8fe0ab9f57a440f1893934f781cc17df"
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
    "url": "assets/js/51.288bd3ca.js",
    "revision": "e2c2ccc9ca99fc65b01e59ad7b8e3141"
  },
  {
    "url": "assets/js/52.89afb927.js",
    "revision": "ece9f7e57b85972b0a6ae66b5890fac2"
  },
  {
    "url": "assets/js/53.4ada614a.js",
    "revision": "83cad0482fd52fd7000dc46c6528837a"
  },
  {
    "url": "assets/js/54.eb4c746b.js",
    "revision": "0fc4174f874a736a98bed31e4b1c30c0"
  },
  {
    "url": "assets/js/55.722aa7d3.js",
    "revision": "c1401d11b2749ad700d04245cfb1b0da"
  },
  {
    "url": "assets/js/56.7568f462.js",
    "revision": "5aadaa0b8fa43b4fc18174d4366d4f53"
  },
  {
    "url": "assets/js/57.3a7fe1b8.js",
    "revision": "0cc9d0d337e933de5567cb904420c7dc"
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
    "url": "assets/js/8.029c67de.js",
    "revision": "c54248ed344d9222bfd63f8f0cae4ac1"
  },
  {
    "url": "assets/js/9.88f3e016.js",
    "revision": "b8a011dc51b072517839713c82f4875a"
  },
  {
    "url": "assets/js/app.854c6449.js",
    "revision": "40c3599009d1146453c76ac4bfc00fb7"
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
    "revision": "febfaf3a1999a8fdbee785e5a8268d36"
  },
  {
    "url": "introduction.html",
    "revision": "a8bd2e678d105d1995d01883d78e2fbd"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "newcontent.html",
    "revision": "b226ce0c77acf42595bcf175f73686a7"
  },
  {
    "url": "pages/0b600f/index.html",
    "revision": "21ee19fafc2a0e2f508c10f09ac8e77a"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "9dc1fb8068f89ed03696b3748a64334b"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "e4ae2b782d7c28f50bc97e239ebe432d"
  },
  {
    "url": "pages/16eaa8/index.html",
    "revision": "4d0028e74f9c2d72ad0bdf69c79ef744"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "d16e0a56852a6e79bf7e60dcee8d0965"
  },
  {
    "url": "pages/1921c2/index.html",
    "revision": "5593d76bdbce7e04a563b60132c32fb7"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "54c7f4a073ef1506734d2ef6286185ff"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "1a2dc7edc96ad85da94c6e7482d6c3de"
  },
  {
    "url": "pages/2bcd2b/index.html",
    "revision": "d15891de8605d2dd58c8687896830fe6"
  },
  {
    "url": "pages/2e8fcb/index.html",
    "revision": "b2a79a122d4fddfd0102a89403f9ba1f"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "a0388dbd6307d3245f20561087d18262"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "a3b96e94471883d7c11614447a7d9760"
  },
  {
    "url": "pages/423cb4/index.html",
    "revision": "351989f01d8cae7c24ce24a227c14da6"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "ad6b870e1a012cd701c02920bf742505"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "c05231d6525c485db31ccb9c74632c5d"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "35333ef3ef593ed335d6c83e93ac3001"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "f1cda5628ebb1b3168028fb5ddd96f83"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "6e65b902d72fa75319ad4fc7f593b292"
  },
  {
    "url": "pages/6c91e8/index.html",
    "revision": "673c45e15a771b00f5d7de615551f597"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "4490cb802f2abb6be61baa2e590865ff"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "d5d2e9171c1939274ec6b2e26d3e9b74"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "fc213889fa93d221c2718649a0f9a124"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "c176eca3e9b033347b30c21b1644ad3e"
  },
  {
    "url": "pages/7c8eba/index.html",
    "revision": "b65f0405d0964bc9b505cbaddecc1909"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "60d2bbc16b8a3a855dd03cfb431f3642"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "706e73f441f5d658acaa3fd95ecbdfd5"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "f519dfcac1585180f80d016e57ec495d"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "e266f34e85de12eafc0052999b53121e"
  },
  {
    "url": "pages/8f891f/index.html",
    "revision": "4fba23c14ed263391ec68d05441b4fd5"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "4a1945273bcb4a332d3ebb4ffa7fcdd2"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "761c41fae5a5d88ef9e8efc03b5ea250"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "956117b715cfe511ac3454eaa1a22880"
  },
  {
    "url": "pages/af185d/index.html",
    "revision": "acbdb92d4702c7cb14fc74b249edb511"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "0fa2629b5827a4964b5f6e38dd7816cf"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "7dd8245b79d1b99b4ebe1b145d597537"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "7352bf5668f68a0819130f664ab8e194"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "b8a392a65888dfdb192de661abeedb4c"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "ec9cd00ddf9ce9e645359a783df0a791"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "3364c2e683a40700be80b976f09f525b"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "cae78251da4ce295279706a309308910"
  },
  {
    "url": "pages/cc5a05/index.html",
    "revision": "9a9d01857d35a3306bf8419b7f8e6f5e"
  },
  {
    "url": "pages/d00caf/index.html",
    "revision": "81dbd01096b3e9d3ed41f4cc4883e74c"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "8578cb4c7531ba6b4e9b4f0a9c6c6ed8"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "b44914d6713146a92e816f372d14a3bf"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "52166bfff5ba1440b7d590c08856fe49"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "cfc021a4d8506b0f4f3a6a0f72abf5d2"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "9d5258152d08ec30d2dc0f1b08c9934d"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "2214fe8a297f36dc7c60df54bd4dfc42"
  },
  {
    "url": "pages/f87d4f/index.html",
    "revision": "ab7e302ee8ef02eb8b32d91b47ce737c"
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
