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
    "revision": "cf8dd7520778af00cb68dc6ac9ba1d93"
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
    "url": "assets/js/11.a9e337c6.js",
    "revision": "6adcd5151569f5a1b2000bc8010b9d31"
  },
  {
    "url": "assets/js/12.36455f29.js",
    "revision": "84cd8bdcdf7d36ab854d3c1cc0c3670a"
  },
  {
    "url": "assets/js/13.5fb9e132.js",
    "revision": "d2eb279712cb0504b70f2c4fece0a1ae"
  },
  {
    "url": "assets/js/14.a0a6e73d.js",
    "revision": "fc3570ababc18ab6f9ffb95168be6646"
  },
  {
    "url": "assets/js/15.b1c04ccf.js",
    "revision": "608515884b88ec495b548510a4f24903"
  },
  {
    "url": "assets/js/16.73e43b8b.js",
    "revision": "0295607330074c7d021360bc6fc1064e"
  },
  {
    "url": "assets/js/17.126f9ac0.js",
    "revision": "c3fcdcaf91bb0b8e0a754f2fd084a80c"
  },
  {
    "url": "assets/js/18.64665c2d.js",
    "revision": "78bfb0a900768326e4d6126bc66f5d0f"
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
    "url": "assets/js/20.881e8740.js",
    "revision": "5cd1d078c789f3d880c39f0415b3fdcd"
  },
  {
    "url": "assets/js/21.9fea5e9a.js",
    "revision": "948787d70644f27bead61d1456ffe095"
  },
  {
    "url": "assets/js/22.2b4a49aa.js",
    "revision": "f7659f2dd29d971928f3a39afc516ce1"
  },
  {
    "url": "assets/js/23.fcfcb8d2.js",
    "revision": "0b683486446f309fc42570cf3d93bebc"
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
    "url": "assets/js/3.a3e401fd.js",
    "revision": "3b0ffdfe66b6f587879324bf578af890"
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
    "url": "assets/js/36.f8e5c96f.js",
    "revision": "3340790edfe2e62e17afdceff86debb6"
  },
  {
    "url": "assets/js/37.04ebbe48.js",
    "revision": "32a50666d05adc83ec2c30b87966cd57"
  },
  {
    "url": "assets/js/38.62f88026.js",
    "revision": "da143250214e81046c925e42e4c87b19"
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
    "url": "assets/js/40.7f093bbf.js",
    "revision": "2a55579757320d9e0b5288a0f9b9b9c8"
  },
  {
    "url": "assets/js/41.ea7fa68f.js",
    "revision": "958dbbe9cc3aa40fbbb4d72463be0169"
  },
  {
    "url": "assets/js/42.a84b17e1.js",
    "revision": "20a52f03cfaefabad0e8e099a7b603c4"
  },
  {
    "url": "assets/js/43.ae955e00.js",
    "revision": "743a74712a5115f42a9cfefefe7c34b5"
  },
  {
    "url": "assets/js/44.63cabc23.js",
    "revision": "8c877071e8cb074e58df931ced61dcf2"
  },
  {
    "url": "assets/js/45.9dede42d.js",
    "revision": "899f715344bc2954dbfafc834d53c29f"
  },
  {
    "url": "assets/js/46.4b07630c.js",
    "revision": "23344151c9a57f56737fd44ceaa79f26"
  },
  {
    "url": "assets/js/47.855753dd.js",
    "revision": "6a48f3db8b77b345ad8ce4eba9df704e"
  },
  {
    "url": "assets/js/48.088da03e.js",
    "revision": "94014e35535f75e9d9d665285d5dd01f"
  },
  {
    "url": "assets/js/49.14171b95.js",
    "revision": "600e39429b10fb704d8b74f35c3c9880"
  },
  {
    "url": "assets/js/5.8caac652.js",
    "revision": "4c68a9db1e3d12d10ebf4a5cc1187eef"
  },
  {
    "url": "assets/js/50.0262d422.js",
    "revision": "43e0679579a00c522b9dbe685ea5de7c"
  },
  {
    "url": "assets/js/51.2ec3a312.js",
    "revision": "3bbd779fb64c0dec315e29c3f97ff1e2"
  },
  {
    "url": "assets/js/52.2b6b2d14.js",
    "revision": "861c1caf6b349a5b819c58e50d81086b"
  },
  {
    "url": "assets/js/53.20f279d4.js",
    "revision": "aa88eecd51802a08ceda87218601ae25"
  },
  {
    "url": "assets/js/54.2cb0cff0.js",
    "revision": "602d7459c3c19d3192ed0b84ccac0f85"
  },
  {
    "url": "assets/js/55.b1e32977.js",
    "revision": "03820bc0429c2282f03901bd7c804733"
  },
  {
    "url": "assets/js/56.7f17fe8a.js",
    "revision": "fe8fcf5fec64d6c1d8d69e2c334a3bd1"
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
    "url": "assets/js/app.aee677ab.js",
    "revision": "e67bdfd479b3b53fb173be6498034aec"
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
    "revision": "8ac7fe3795a2be186c5f4c1d5868effd"
  },
  {
    "url": "introduction.html",
    "revision": "d5685afafcfefec9bc6d6fd4961e43b6"
  },
  {
    "url": "logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "newcontent.html",
    "revision": "b900d2e2e3723f9424e80e7351af422b"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "c0309d9b96b5d9d1233d7e9c7a719523"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "3944c97e45960cd9916645a92750acff"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "92f79ee022ce25b7fb52269fceacaebe"
  },
  {
    "url": "pages/1921c2/index.html",
    "revision": "8158af3f5d4eec9e37aeb679f15b894f"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "324ec1aa09d1cd3e34fcfeb7c2a9d778"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "3a3f00d3e18a63c1ce615ad55ae0cd95"
  },
  {
    "url": "pages/2bcd2b/index.html",
    "revision": "8b40f0b024e1fb5bd7d1181a74b7c47f"
  },
  {
    "url": "pages/31b21a/index.html",
    "revision": "8e9b66337b023bef9e4b6aea3c468b99"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "c7b1c7debfb4db4d6886058ef8377659"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "f6c2cba75cc83699e27304c85185ea36"
  },
  {
    "url": "pages/423cb4/index.html",
    "revision": "fe580166144f6b848e1df9637df915f6"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "4f2ad5d59f0a700de455e7dfab25e63a"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "b4600fab7ad5ff379d764b85c42fe954"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "6a6816885be40aa9cd998ac1b2926a4b"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "7f96901a3e44f54421d02e9e89164922"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "664fb5ed6acc80e923839a4a4bfc3ca6"
  },
  {
    "url": "pages/6c91e8/index.html",
    "revision": "4e7333fb0fd0ce084fa180892a0af8cb"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "83afdd20ba4e714db713b975fa3972b2"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "39be04879683135fb84f31c61878a6f1"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "e9b8f4e9de3babb98f5d797173447de4"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "47a8cd1f966f4ee1d8acf424c2831027"
  },
  {
    "url": "pages/7c8eba/index.html",
    "revision": "e3d07b56643db695fb07e60177d0be82"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "24d6068b7f619f517d45878f2ba1a530"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "36e75a9081513191eb623c0399d090e5"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "69b75030ccda16ecf3583a85811db971"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "d59a79d65bb43acf1be33656c2f3fc64"
  },
  {
    "url": "pages/8f891f/index.html",
    "revision": "2eb5c6e739e414a1dc7e234318856249"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "f30ca1d6bfb57e07699b3e377ba59b7a"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "2e95d601c8be5265f7ac3e67ac8cd693"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "5bf34b6078ab41bc0adee40aa99bde08"
  },
  {
    "url": "pages/af185d/index.html",
    "revision": "f4606344d2a923f0cab17b9bb26e0252"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "881b071e45f02daee215811faff1690c"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "c5c7b4a7f024a6f050df9f1058670820"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "ce1fe31745472c8656bd2c84ce5fb751"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "8a85d0eea4a6c2de0871429835309306"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "ba72080ccf6a43ef307993816131b45e"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "0678440501d573273daf18a1f25fb966"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "e9f8cca608dba3e96e31a4d8703a475e"
  },
  {
    "url": "pages/cc5a05/index.html",
    "revision": "4a422653b85a36c0dfffe6de668d29eb"
  },
  {
    "url": "pages/d00caf/index.html",
    "revision": "0530e44628e026a5234042217b6aca38"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "966a9b561d767a56e0d86595b35985a1"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "176b1e8e6f8cf6eaebcafa24394ea5e6"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "efb0e8c2e072fc28f7c6a31f852aaa8d"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "25895d9bf5166eb34be23a4c7344694c"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "ec8cc440676bc53fe1a661d6da1b101a"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "52a55dc4af402ad53e70e7b26e43cdb5"
  },
  {
    "url": "pages/f87d4f/index.html",
    "revision": "a8ad553afbb8e7667ad4cbd870db5600"
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
