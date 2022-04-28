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
    "revision": "7df4264d8fdbd3cc627bd79dd0378da5"
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
    "url": "assets/js/11.ecad1f64.js",
    "revision": "2962d5cad0228856e5a26efae1e37831"
  },
  {
    "url": "assets/js/12.532c62b8.js",
    "revision": "a5c622525bf27fd2fd916f978091d9a7"
  },
  {
    "url": "assets/js/13.29103952.js",
    "revision": "b2c280da6dfd9f36b7e8071a2647881c"
  },
  {
    "url": "assets/js/14.5d6d0b9e.js",
    "revision": "0c4c58a6233521cd998de0757e59d2b1"
  },
  {
    "url": "assets/js/15.c84b54ba.js",
    "revision": "a4492ae850056780dc80041752daa441"
  },
  {
    "url": "assets/js/16.5b3a1dce.js",
    "revision": "6c9bc569eda5d2da58cb59a438348392"
  },
  {
    "url": "assets/js/17.d75d9101.js",
    "revision": "186c1ce33705553eae1d2a417bceb212"
  },
  {
    "url": "assets/js/18.734bbb34.js",
    "revision": "7d480ce156baf21c65720da6d805d85f"
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
    "url": "assets/js/20.c5eed4c5.js",
    "revision": "7f329cc97b237971d7dd821103c45aaa"
  },
  {
    "url": "assets/js/21.65501251.js",
    "revision": "1889ddb744ebbfd14ac393ac957cffe4"
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
    "url": "assets/js/25.42d0abb2.js",
    "revision": "87a829e8f1f3365f3188f52cd7398ee6"
  },
  {
    "url": "assets/js/26.b9c447bb.js",
    "revision": "1845b58538c17e1824c474bc8e13c8b2"
  },
  {
    "url": "assets/js/27.3ab44c35.js",
    "revision": "b21e164fc0edfd99a1f93e20bbc1e406"
  },
  {
    "url": "assets/js/28.a9a1f262.js",
    "revision": "5260f02706d5bb88f11dfaf9216cf5fa"
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
    "url": "assets/js/31.af081f95.js",
    "revision": "90dab9ed31ce8fa44f7a53ef79e3542c"
  },
  {
    "url": "assets/js/32.86aa8421.js",
    "revision": "f9168f617063b5c2608190b8c03dfe51"
  },
  {
    "url": "assets/js/33.0aecc03f.js",
    "revision": "f32a0e6a0bb25542d634ab40440c71c3"
  },
  {
    "url": "assets/js/34.384f4782.js",
    "revision": "e4077ce6bb96cae07d131989388d51a1"
  },
  {
    "url": "assets/js/35.8c46166d.js",
    "revision": "2d489d46a748965ead3f5eb13dc89455"
  },
  {
    "url": "assets/js/36.fd57164d.js",
    "revision": "30522b3f37b54ff4bf58a6bb3dd8dad3"
  },
  {
    "url": "assets/js/37.1b73688c.js",
    "revision": "53e1f21600d398150d5eeed424ec4ba9"
  },
  {
    "url": "assets/js/38.0c1e7cb0.js",
    "revision": "deef3c519c88d243ebd6e14b219ce7ac"
  },
  {
    "url": "assets/js/39.14cad7ee.js",
    "revision": "eac573cd4d4b3ac78738077307caf779"
  },
  {
    "url": "assets/js/4.f3f13680.js",
    "revision": "8a146e495c9fa2ada1bd45ebb24ffb29"
  },
  {
    "url": "assets/js/40.8526f98f.js",
    "revision": "f453eed29c12063b6a91c9e64de90834"
  },
  {
    "url": "assets/js/41.65b2d624.js",
    "revision": "b8974c551b1f95ffd2e91b6d7f5aef61"
  },
  {
    "url": "assets/js/42.fd59ae07.js",
    "revision": "77d58c1810747fdf2722031bfbd3fc07"
  },
  {
    "url": "assets/js/43.64596083.js",
    "revision": "b9a297c887b808921c1ca2c1814837c3"
  },
  {
    "url": "assets/js/44.e7088856.js",
    "revision": "0b1c47cda4668129c4880cbb07bbaa51"
  },
  {
    "url": "assets/js/45.fc3f2a27.js",
    "revision": "511861d24c5f641c42559e9dec7a108d"
  },
  {
    "url": "assets/js/46.53f7d37d.js",
    "revision": "8fcee2d3e65c1deda5fad849893463fb"
  },
  {
    "url": "assets/js/47.8e4c77df.js",
    "revision": "09300e52f800dd46fccefbff9ccfe235"
  },
  {
    "url": "assets/js/48.7938c3a9.js",
    "revision": "4cc1415fe0de71464d78bd90e330ddfa"
  },
  {
    "url": "assets/js/49.09614fa8.js",
    "revision": "14452279f686ed7945eefa0adafe15e7"
  },
  {
    "url": "assets/js/5.40ce5b3c.js",
    "revision": "fa1dae38107180dfde488fc346eb922c"
  },
  {
    "url": "assets/js/50.108f93d6.js",
    "revision": "a6f4f3e3f7fe16fe89aebcb8c0e7de27"
  },
  {
    "url": "assets/js/51.06e189c2.js",
    "revision": "510168033cbfe8e4e6cbde77276ca53d"
  },
  {
    "url": "assets/js/52.5102c342.js",
    "revision": "44d3714ca349790bf3ce1c8a106612fb"
  },
  {
    "url": "assets/js/53.a2aa880a.js",
    "revision": "637f50518bdf00612b12e529c9ee266f"
  },
  {
    "url": "assets/js/54.62907a32.js",
    "revision": "1688490ee7210328c714248de75a278b"
  },
  {
    "url": "assets/js/55.f82f7250.js",
    "revision": "dc715678fbbd581d516ce15b5b91e7d2"
  },
  {
    "url": "assets/js/56.95479b8c.js",
    "revision": "260de5ca942954c12c4fb7be991900a9"
  },
  {
    "url": "assets/js/57.24dfbb79.js",
    "revision": "dbff4e5b17788ab3db0f49af0d585f18"
  },
  {
    "url": "assets/js/58.1dd5dcd8.js",
    "revision": "47e6b6bde518f516387608c4fc54edff"
  },
  {
    "url": "assets/js/59.3f868ff4.js",
    "revision": "c10305f3876076682bff7cf73f5ac048"
  },
  {
    "url": "assets/js/6.4051b925.js",
    "revision": "e46cdd588f468ecd3fddba13cb889c18"
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
    "url": "assets/js/9.a326e487.js",
    "revision": "49794fbae0e6798f74613fde8506b6ef"
  },
  {
    "url": "assets/js/app.dd9d1c56.js",
    "revision": "d987fe7ffb2ca4c7ed2358decfc725f5"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "36148088273eca87806f279d7ab4a93e"
  },
  {
    "url": "icons/logo.png",
    "revision": "d112ac3792544c0f674f65b5bbd84b30"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "ff0d98789893b4d7c438931b7fb2ec14"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "d3c59eb986fe03b663c4caa01028de28"
  },
  {
    "url": "index.html",
    "revision": "d4c810c8b22ab215fcbdc7a494978de8"
  },
  {
    "url": "introduction.html",
    "revision": "c11c4bcc262e8f041ed66cf9057032c2"
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
    "url": "newcontent.html",
    "revision": "952895783c4cf3ba382625903badbd28"
  },
  {
    "url": "pages/0b600f/index.html",
    "revision": "f8c69db7ad942c8f1e2474f5dc0c827e"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "cdd222ab0c77a391ab43c63f6998bdc7"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "a4540752e81c1d7685686fe71ccbc5d6"
  },
  {
    "url": "pages/16eaa8/index.html",
    "revision": "8590be0339af62ef6fe3a7b4e758f070"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "26438380d567865e44bba0d352b61ac6"
  },
  {
    "url": "pages/1921c2/index.html",
    "revision": "09158cf4055556861bca17a40d8f5f6b"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "63d61df00c1b7314517e314d648e22ad"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "367c02be8c3c62874b19e0b85bd3e1a3"
  },
  {
    "url": "pages/2bcd2b/index.html",
    "revision": "d1a014f04c8407e7390490c343e89b80"
  },
  {
    "url": "pages/2e8fcb/index.html",
    "revision": "5b0a45fd07a6496b24fe27c2dc379f41"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "a104f910e20dfee298eb528410a6bcd7"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "5d7796146627eafa051ce412c9bb4408"
  },
  {
    "url": "pages/423cb4/index.html",
    "revision": "bac4b86701baf7237f69bff16a3ad5f4"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "13caaa0040ca6e1a44c7fd20df38302e"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "1b3d6a4ce99a0dd8a5893255dfbf9a90"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "b85233f3204d3cb9ae5a1ae0de8aef3c"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "4a4ec9c8c2558e390eb970ac71de2d24"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "2e4d03feec4eae82e156084249d31884"
  },
  {
    "url": "pages/6c91e8/index.html",
    "revision": "0b13bd4caaf5cea626b600becea49a2c"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "3e31f7bbaa52d89c763c4985e46969ad"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "c4ae084f2ff966249a3ad3744b4325cb"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "1a71c9c65d6a5c8e188a59944063b1c7"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "246750175fc58eac2798fc076fc8d245"
  },
  {
    "url": "pages/7c8eba/index.html",
    "revision": "a566c97d84da25078f306d0ee1b58269"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "687020cb8b60e08597b0b5f8c6a4ba2f"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "64b555151d144af31e4911925f0255ec"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "7065725237ffe5ad0a2340175735cbdc"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "e35a189161173e667b43c8d9452b2302"
  },
  {
    "url": "pages/8f891f/index.html",
    "revision": "137def9576e66c9ccfe217c6087f890e"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "8c6111536b7b40bbce5561e13b4e7c69"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "b15223fa49ab9f14daf86fe04385b6e0"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "3c6360c7c89b2a5cd1d74ca136e96efd"
  },
  {
    "url": "pages/af185d/index.html",
    "revision": "b0c0f18fa823454a0c8f3fcee2e1d3fe"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "71f1e9b6698f776bb706f06dbb647250"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "e6e86e578c4d0d8f62efe276ed3d049b"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "96ffa17b9a929b2a11a60c69c7939e93"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "bff4b5e7fb8224e58fe48d1f73a1af70"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "b4af581f2e38cb02907e3d61ed5d61d2"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "d0cde2ed3560394a8c28aaeb7e423d0e"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "29495b40a0edd3c3b25ac5aadeefb767"
  },
  {
    "url": "pages/cc5a05/index.html",
    "revision": "e6a120ee2de6129ed2964e4301310f93"
  },
  {
    "url": "pages/d00caf/index.html",
    "revision": "3d917df2f38d3667f280d76bac99c521"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "562382a792d56c81b2f0dbd4fd21af2f"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "aaf7c4ba757a47620792c4480ed4dc7b"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "2b997a5f279b86e4b05fed3dcfd3f7ae"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "70fe0d78ffb0784c8846b510c96b62ac"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "33bac65c2827887db3e5bcd4395c1086"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "1d0d785b5230021a4d6022a6c713b5f1"
  },
  {
    "url": "pages/f87d4f/index.html",
    "revision": "bdac3a25609889bf3e87863fab8c68bb"
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
