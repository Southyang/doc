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
    "revision": "dca3be8a9dbfa6648424e5ef425cc123"
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
    "url": "assets/js/10.f670fa85.js",
    "revision": "73675070f8600f89ff690a1b890c99ec"
  },
  {
    "url": "assets/js/11.efe9dd69.js",
    "revision": "fbc9389a6c2cef9f9cf2fc229b8fcdd2"
  },
  {
    "url": "assets/js/12.7725cd03.js",
    "revision": "5590637873d6efc9aaff37ca41b89ea1"
  },
  {
    "url": "assets/js/13.816bae66.js",
    "revision": "4538518a35aab8b0a08f04623f1c721d"
  },
  {
    "url": "assets/js/14.21fd99b8.js",
    "revision": "6ea11b7b96db8e67815ad2d57a9bf5bb"
  },
  {
    "url": "assets/js/15.dbcbecdd.js",
    "revision": "798068688bb9c54929cb4fd4c4d12042"
  },
  {
    "url": "assets/js/16.73e43b8b.js",
    "revision": "0295607330074c7d021360bc6fc1064e"
  },
  {
    "url": "assets/js/17.0218291a.js",
    "revision": "f763cd4159fa80ad480a67ab8fe64a23"
  },
  {
    "url": "assets/js/18.3a772dc7.js",
    "revision": "7b84b8387304e00aa8e2fdea6fa80dcd"
  },
  {
    "url": "assets/js/19.5ec0f52f.js",
    "revision": "e80a9cf0bc0b842e13ad55d8003c9922"
  },
  {
    "url": "assets/js/2.b6f71f5a.js",
    "revision": "f898b4fb634787b4f041c43e84065d3b"
  },
  {
    "url": "assets/js/20.881e8740.js",
    "revision": "5cd1d078c789f3d880c39f0415b3fdcd"
  },
  {
    "url": "assets/js/21.4def26e5.js",
    "revision": "6a2be601c44f1823a4a65aebf3ca38c8"
  },
  {
    "url": "assets/js/22.4362408a.js",
    "revision": "150408eed5c02a0db33b1633fd89e540"
  },
  {
    "url": "assets/js/23.fcfcb8d2.js",
    "revision": "0b683486446f309fc42570cf3d93bebc"
  },
  {
    "url": "assets/js/24.53c9fd6f.js",
    "revision": "9cb4307f47854c59f08d8dea35534b8f"
  },
  {
    "url": "assets/js/25.818b214a.js",
    "revision": "a80a0df56711b415f9f40d2315bc2206"
  },
  {
    "url": "assets/js/26.a22509c2.js",
    "revision": "5bc23b8df9e1b8fa6599d4b70a3d1cb9"
  },
  {
    "url": "assets/js/27.f3eeff6e.js",
    "revision": "fa03721f96813746a42600e11a5f414b"
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
    "url": "assets/js/3.5f9da083.js",
    "revision": "f2873838ea6898c5803540ce8f021c5e"
  },
  {
    "url": "assets/js/30.7fc4b71e.js",
    "revision": "6c8a2cc1c0653f67d5e150ea2a48a8f4"
  },
  {
    "url": "assets/js/31.d4f1168a.js",
    "revision": "1813a4f11f8fd0495be44f663b6855f0"
  },
  {
    "url": "assets/js/32.063bf596.js",
    "revision": "741a456ed026ed928931b365fb0c446c"
  },
  {
    "url": "assets/js/33.29947452.js",
    "revision": "cdba0614c6604627b57afadb4b45fe84"
  },
  {
    "url": "assets/js/34.00c93784.js",
    "revision": "51656c446f93ae7daf15dfd88b2e13d1"
  },
  {
    "url": "assets/js/35.98269c8c.js",
    "revision": "326e0062f5f7d53d6c9b0e423bd225a5"
  },
  {
    "url": "assets/js/36.5fe88731.js",
    "revision": "951837189ebff1b5856339690e0b1ab7"
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
    "url": "assets/js/39.828da547.js",
    "revision": "3a9aa3ba27e87a8e7d9c3716edd798cb"
  },
  {
    "url": "assets/js/4.b3b0540d.js",
    "revision": "1ff1240106f52ecddf50c58d947b2469"
  },
  {
    "url": "assets/js/40.237e134c.js",
    "revision": "2caef92428e0f0d87b9df3da064f2329"
  },
  {
    "url": "assets/js/41.3e36de9c.js",
    "revision": "46f79d83012cba6726eef04a8feaca4d"
  },
  {
    "url": "assets/js/42.792c8c4d.js",
    "revision": "70f8a1c09c108a79101e8e521c96d3e7"
  },
  {
    "url": "assets/js/43.4c603d23.js",
    "revision": "972c75dffc4a4e7da9f0225fcb362b97"
  },
  {
    "url": "assets/js/44.96e39ddb.js",
    "revision": "8a7ae972e1efc1d9d4ee21a2217d6840"
  },
  {
    "url": "assets/js/45.7a59489a.js",
    "revision": "4d835ac195f84dfcb3d45ec5e524aa10"
  },
  {
    "url": "assets/js/46.ad835b29.js",
    "revision": "dcdb062dd7ac49336c3deb0443c9e648"
  },
  {
    "url": "assets/js/47.7c1a3445.js",
    "revision": "eb61ff11863b13756163cda7d3e85f77"
  },
  {
    "url": "assets/js/48.3bb1b3af.js",
    "revision": "e3ff4f06c48eb79bae44a1409c82c9e3"
  },
  {
    "url": "assets/js/49.4c345882.js",
    "revision": "363bbbb339909cf455bb405ae2018e43"
  },
  {
    "url": "assets/js/5.8caac652.js",
    "revision": "4c68a9db1e3d12d10ebf4a5cc1187eef"
  },
  {
    "url": "assets/js/50.45b56177.js",
    "revision": "98c8e156bd13fc21fcba1d53f2276998"
  },
  {
    "url": "assets/js/51.09421568.js",
    "revision": "888398d704611f82abdb08b814558435"
  },
  {
    "url": "assets/js/52.f14f7c18.js",
    "revision": "a611252d2bd8cd7e76976ed382a7658b"
  },
  {
    "url": "assets/js/53.50d77cab.js",
    "revision": "c0c42a855ae397f49978ca0d47e106ff"
  },
  {
    "url": "assets/js/54.64162eda.js",
    "revision": "1237e15fea637adc20ab6c03029971c8"
  },
  {
    "url": "assets/js/55.2468229b.js",
    "revision": "5899dc93d2b7067425467fc3c85f9715"
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
    "url": "assets/js/9.41bb1cee.js",
    "revision": "e23d52b2fcce3d634d89f247c0e97756"
  },
  {
    "url": "assets/js/app.5f4a9538.js",
    "revision": "e0ba608628820e50762fadd1a9e62aca"
  },
  {
    "url": "icons/logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "index.html",
    "revision": "af62ea4556b3786a313e831082c67799"
  },
  {
    "url": "introduction.html",
    "revision": "3c03e185b1dcfeda76a89c83f3d82e4b"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "newcontent.html",
    "revision": "3c30ad30dbdf5f4c2a7d4fe48dddea3b"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "d1d663644b36f8e51defa112bb222478"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "9334080e2dd1633b0fe8fd11c69871d4"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "65cb5e810752d5ab0ec1aad04a4ba4bf"
  },
  {
    "url": "pages/18c0b3/index.html",
    "revision": "5abf64521ce9ed075ec6b17a809c2a81"
  },
  {
    "url": "pages/1921c2/index.html",
    "revision": "4b86ad8ec1f5b5269cc1f3142fcd8103"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "a0065b7455bbbddd48702ca975f8827f"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "73c23e8e827bce14baace169c5319927"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "e55221f82eb5b373dd71c11cca00f0fa"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "0851b9e08bf8d7389b6cb2daae4abd31"
  },
  {
    "url": "pages/423cb4/index.html",
    "revision": "4424ab8bf992c1b270be6f94891823a6"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "aed74d30b3f30d4d015f58507f8af5b3"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "7bf3be4a9156527883c4eece127277dc"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "2d61db7ec0c021a1c4e0c26d69eebb48"
  },
  {
    "url": "pages/610ecf/index.html",
    "revision": "bcc82a2f69dcf839b1f56526092da297"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "8c801a222af23be7a2a110659b8d4c3b"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "27f0c62a716f024d8cc01fa08214e46c"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "cdef6a7b498378719abf7c76d5d119a8"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "3d11d247fe72bcfad641cff09ece7e97"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "679444fdd9701845900f7c762b068e9c"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "a7afe1510fb9fb580d2806c702fd1875"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "cce9dfa4fe60c33e430cecf0a9b419bc"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "3af69c9eea95870d5209580b5aa6a72f"
  },
  {
    "url": "pages/89c27b/index.html",
    "revision": "e8f0de10f4318f7b2dd8e7d911129413"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "2433b6f0934f29024b86d9f17f82f885"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "08d6e2adbdfcceda5e8a7837b05d91a2"
  },
  {
    "url": "pages/8f891f/index.html",
    "revision": "846795d3c289aa59cbf0ffb73be1f63e"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "a265e611055236ae06c165017d8a5c55"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "eafd32e7f3d9dead8ab5dd005c8c8e76"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "fcda046d07aff9e5e5ad86ae78f5f64a"
  },
  {
    "url": "pages/af185d/index.html",
    "revision": "fdf10b429810a5c7c824e5ddf7f0183f"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "7fd26c94f1e4a99f1ca2b4c5caf6395c"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "d7f478fc8ea9c80f583ffb52d15990ba"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "8d9e5832031316aa95cefccf45db22a7"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "eb63a7260f1575193c34f9865e83bd8e"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "52391d4e12cd8dd50c74d81fa9e27de4"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "4faa7a57819ee043d518d5bac82d6d96"
  },
  {
    "url": "pages/c93b87/index.html",
    "revision": "7838b5b910fab205d037698e0436871a"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "b59f43519ec4416cd68c08f0ddc4b6db"
  },
  {
    "url": "pages/cc5a05/index.html",
    "revision": "008ff248b9e2a477cf2e0b95dfdf0be1"
  },
  {
    "url": "pages/d00caf/index.html",
    "revision": "27f2bbfc4035f086166f0ca0c01a03bc"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "b3120982e2c73db5a130f1a8165b940b"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "5d513d98940170c5efb78bb0514da7a7"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "9f0d140afc949b8f97c4c5b8c6230d7a"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "ba189672eb1c5cdc833a63dde4ad8d52"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "fa787a7f2b0715a5ea0fc25697052158"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "f5d228d93bd3269b0c3be93fe51964ac"
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
