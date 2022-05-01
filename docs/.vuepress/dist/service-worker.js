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
    "revision": "51a25e3e1f7730182085ef5dd6cd9938"
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
    "url": "assets/js/14.01687950.js",
    "revision": "03f1b595e1f916599b3deedd04c3e12e"
  },
  {
    "url": "assets/js/15.489a858b.js",
    "revision": "e30ec63a273896e1f535914ddff74e39"
  },
  {
    "url": "assets/js/16.7ffa71eb.js",
    "revision": "421b9649d218dceb772047e22de6cd46"
  },
  {
    "url": "assets/js/17.656edc94.js",
    "revision": "9a8eaa8d773574e74ce9a71ee34256fc"
  },
  {
    "url": "assets/js/18.45c78f68.js",
    "revision": "ed87391270f17e40833f64076dffb5fd"
  },
  {
    "url": "assets/js/19.9176f51f.js",
    "revision": "0fa7e8b2b8c5fb27b03954b1a09c1d97"
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
    "url": "assets/js/23.e5139efa.js",
    "revision": "226d76dd937419e61a078f3eaa15ccfa"
  },
  {
    "url": "assets/js/24.0cdda6c9.js",
    "revision": "7ecc0c8c6c550148f153c444c76cc42f"
  },
  {
    "url": "assets/js/25.c37c36de.js",
    "revision": "5033dbbb9b20014294e8a596fa28ac85"
  },
  {
    "url": "assets/js/26.9db69132.js",
    "revision": "fef3aaa12861607b316692c358fe10c9"
  },
  {
    "url": "assets/js/27.3ab44c35.js",
    "revision": "b21e164fc0edfd99a1f93e20bbc1e406"
  },
  {
    "url": "assets/js/28.071276ca.js",
    "revision": "4597429468987c6819c19527874d0cfb"
  },
  {
    "url": "assets/js/29.51faa081.js",
    "revision": "b6ebbc9f0e74cf884ed93c31ea61f7ec"
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
    "url": "assets/js/31.f1cf6585.js",
    "revision": "67af9c4f64fcbeecdaf96a6a4b53672b"
  },
  {
    "url": "assets/js/32.faba5075.js",
    "revision": "f9168f617063b5c2608190b8c03dfe51"
  },
  {
    "url": "assets/js/33.bf5bd718.js",
    "revision": "f8ac4714fa00fb7fef2f6f6c41edb292"
  },
  {
    "url": "assets/js/34.5ea55496.js",
    "revision": "694ddcb3ea8e99ca42c7445faf6e1c71"
  },
  {
    "url": "assets/js/35.c6fa5e81.js",
    "revision": "e676abc4c4766fd26c80f8c6f0e01ead"
  },
  {
    "url": "assets/js/36.510fef12.js",
    "revision": "0406ad08bdd83d54cb736b0601e2205c"
  },
  {
    "url": "assets/js/37.6570c3ec.js",
    "revision": "80a1264be418f82811eacb05a611f071"
  },
  {
    "url": "assets/js/38.702209ec.js",
    "revision": "2984d608525f2a0193f4f03b7c303462"
  },
  {
    "url": "assets/js/39.e701d660.js",
    "revision": "52c04952d5182b37631acbc57bcfa3b5"
  },
  {
    "url": "assets/js/4.b5cb466e.js",
    "revision": "90257a7ef7746fb28c2826d69cf76803"
  },
  {
    "url": "assets/js/40.c45f56b9.js",
    "revision": "42533e319bc86b8712ed2a244ba7a6fb"
  },
  {
    "url": "assets/js/41.55ba6927.js",
    "revision": "91cc209fe9ab3e8508b4af2e2678a3df"
  },
  {
    "url": "assets/js/42.132cd90f.js",
    "revision": "377503ab3ee4db77027eb2c815f1e083"
  },
  {
    "url": "assets/js/43.1e403440.js",
    "revision": "b863b39d664c232a7dd2593a50243258"
  },
  {
    "url": "assets/js/44.59536f39.js",
    "revision": "dc0b8920d28b28e58ad38991f9463352"
  },
  {
    "url": "assets/js/45.19702e93.js",
    "revision": "0dae6bcedf46d6d38bcd9a56e2cd16aa"
  },
  {
    "url": "assets/js/46.e5490ff0.js",
    "revision": "19fc253adc45004956f99fab8dae115d"
  },
  {
    "url": "assets/js/47.6e91fe0e.js",
    "revision": "84d851f89c28a03d992748c8412e8359"
  },
  {
    "url": "assets/js/48.c69f6aec.js",
    "revision": "e231094309557c4362dfee30a94b45b9"
  },
  {
    "url": "assets/js/49.d2d23f46.js",
    "revision": "b8989834dcac85f3338dbae72a71fe80"
  },
  {
    "url": "assets/js/5.40ce5b3c.js",
    "revision": "fa1dae38107180dfde488fc346eb922c"
  },
  {
    "url": "assets/js/50.386616c4.js",
    "revision": "bbaeed4273f81a587b6e6d4808b80e99"
  },
  {
    "url": "assets/js/51.ae73755c.js",
    "revision": "405f828b61ac00d9f358924d62cb0d62"
  },
  {
    "url": "assets/js/52.22949f38.js",
    "revision": "f7dec6a420b501626a9226cf1b310ba0"
  },
  {
    "url": "assets/js/53.32c880ee.js",
    "revision": "882514999237b5405dca02cb2e8a34c0"
  },
  {
    "url": "assets/js/54.d308b76b.js",
    "revision": "1849231b53e7e9eb3111aad9c5025f4b"
  },
  {
    "url": "assets/js/55.7a430cce.js",
    "revision": "6db0e1cd7fe6529efe32906a01e11544"
  },
  {
    "url": "assets/js/56.ea3e8f78.js",
    "revision": "663b254036032a9c64cdecbd29675661"
  },
  {
    "url": "assets/js/57.49253bfb.js",
    "revision": "9b02fb03936298d95485ad4ff20cc081"
  },
  {
    "url": "assets/js/58.8640bec0.js",
    "revision": "d01b9cec1acdab792d2161f082232549"
  },
  {
    "url": "assets/js/59.eff70426.js",
    "revision": "0dc6d8b1398fdce9edfad013d2b4cb87"
  },
  {
    "url": "assets/js/6.4051b925.js",
    "revision": "e46cdd588f468ecd3fddba13cb889c18"
  },
  {
    "url": "assets/js/60.9f0e1884.js",
    "revision": "916b605fc3d456f73fdf8a562b4f0336"
  },
  {
    "url": "assets/js/61.37d0a42f.js",
    "revision": "96fedd633141512aebcd8af50f53b1dd"
  },
  {
    "url": "assets/js/62.01bbf746.js",
    "revision": "1cc8b0c09796f13ae4c99e117df44f95"
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
    "url": "assets/js/app.99c05342.js",
    "revision": "d4ce0a43e636f558bb2db149f2167974"
  },
  {
    "url": "index.html",
    "revision": "f60aa556a7ab85e272186e296a4a6fb6"
  },
  {
    "url": "introduction.html",
    "revision": "5f8e9323295e054d142d97b25f47a91a"
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
    "revision": "a37b7956f7f3f3e3f3cc915dc08d1643"
  },
  {
    "url": "pages/0b600f/index.html",
    "revision": "2518ad539aba403ac94769d543f702dc"
  },
  {
    "url": "pages/10ef19/index.html",
    "revision": "33bb6d7fa84b346fc7b2f759864e8f26"
  },
  {
    "url": "pages/11dd4c/index.html",
    "revision": "23b53f2cfaa0b8e9cc26bf4c68cc5d38"
  },
  {
    "url": "pages/16eaa8/index.html",
    "revision": "569360b7e33e96900bec9348b0f17bf6"
  },
  {
    "url": "pages/176740/index.html",
    "revision": "f5f9f90752f35f44c06c92afe7ab778c"
  },
  {
    "url": "pages/1921c2/index.html",
    "revision": "a2a22939b6fd9b5ff2e06c816fac28db"
  },
  {
    "url": "pages/193fef/index.html",
    "revision": "42053e0e0f7cf033532b106da279bbe6"
  },
  {
    "url": "pages/1e5f88/index.html",
    "revision": "f615306ccfa27dfe9c0588200e87d153"
  },
  {
    "url": "pages/2bcd2b/index.html",
    "revision": "a1860795f1837aaf94d49faf7ffd0a74"
  },
  {
    "url": "pages/2e8fcb/index.html",
    "revision": "99ef15a25ac92d1890ee38f3d65c2ced"
  },
  {
    "url": "pages/38c3bd/index.html",
    "revision": "ef6627803f06d332d241f241c32bee84"
  },
  {
    "url": "pages/41197f/index.html",
    "revision": "beb43e8d9fe6253675fffc6a84da3816"
  },
  {
    "url": "pages/423cb4/index.html",
    "revision": "9089c7925aebd9a2ce9163d36224560d"
  },
  {
    "url": "pages/52839a/index.html",
    "revision": "4702fc2ba8e85ed61f4789451ff3f9db"
  },
  {
    "url": "pages/56c835/index.html",
    "revision": "bcbe2670f1c4effd6d01422ce1b8a56c"
  },
  {
    "url": "pages/585dc5/index.html",
    "revision": "debc77274664fb21883dc8967e0b33b6"
  },
  {
    "url": "pages/69cacb/index.html",
    "revision": "3965d8920aee627ea155548e266a9a64"
  },
  {
    "url": "pages/6c70bc/index.html",
    "revision": "645638fe21a435e42beb43e7a8bb09f3"
  },
  {
    "url": "pages/6c91e8/index.html",
    "revision": "9977ffc825a8cdeda349c3b3a1f94991"
  },
  {
    "url": "pages/7328cd/index.html",
    "revision": "bba06e7f74a8293bcabc9edc142464e2"
  },
  {
    "url": "pages/7699be/index.html",
    "revision": "1e185d119ef4ba61e69b9e359be1a378"
  },
  {
    "url": "pages/79ced7/index.html",
    "revision": "58a5a777170509ae7253df500d67866c"
  },
  {
    "url": "pages/7c82a0/index.html",
    "revision": "686a4920240b45aa1d83ce7e4ab78753"
  },
  {
    "url": "pages/7c8eba/index.html",
    "revision": "a5397fd2282bafdc34d3ffb60730b308"
  },
  {
    "url": "pages/7eb7c2/index.html",
    "revision": "7bdb344aad60c33443395fee75f06131"
  },
  {
    "url": "pages/8667aa/index.html",
    "revision": "b08d892444f994dec36fbd39ebf2d170"
  },
  {
    "url": "pages/8a6b59/index.html",
    "revision": "4b809bc779707941155cf1cf7c239cb8"
  },
  {
    "url": "pages/8a7da4/index.html",
    "revision": "05654d8613821f2ef95ae8de49492718"
  },
  {
    "url": "pages/8f891f/index.html",
    "revision": "d279c4ec661bcce8b7a8f36b7a1f5007"
  },
  {
    "url": "pages/900ada/index.html",
    "revision": "02cd6425c684f9a415ea8bdcbee5c6e6"
  },
  {
    "url": "pages/9399aa/index.html",
    "revision": "767389b2f15938abf44326fe99cd4a37"
  },
  {
    "url": "pages/975625/index.html",
    "revision": "d8157d1449d38e41cb6ae856b95cc6ed"
  },
  {
    "url": "pages/a69cff/index.html",
    "revision": "f2cafb44f838a3c073632c4431c089cf"
  },
  {
    "url": "pages/af185d/index.html",
    "revision": "697abe2f97e9caafc48752c2939ad274"
  },
  {
    "url": "pages/b13839/index.html",
    "revision": "819ad7edac1a668bfec384bd3b4e2d14"
  },
  {
    "url": "pages/bb64ca/index.html",
    "revision": "6bfb4564a9b09e7efdddbe81f5dd5dc9"
  },
  {
    "url": "pages/be7c65/index.html",
    "revision": "0ff82444be2f9acbac298dab275affa1"
  },
  {
    "url": "pages/c14c26/index.html",
    "revision": "98160a110845662b7d317a81dc176361"
  },
  {
    "url": "pages/c8b0d3/index.html",
    "revision": "e65a1f064f4cf88e21f76a22ffc99b52"
  },
  {
    "url": "pages/c9021c/index.html",
    "revision": "d5688033434bb681a0263593e71f763a"
  },
  {
    "url": "pages/cbb6ed/index.html",
    "revision": "bd365d0e93288224832822519330a911"
  },
  {
    "url": "pages/cc5a05/index.html",
    "revision": "a053173af19e8d688cb190a8d6000087"
  },
  {
    "url": "pages/d00caf/index.html",
    "revision": "e5182da2132f9ea2a5837da7c5e55d65"
  },
  {
    "url": "pages/d384b4/index.html",
    "revision": "98640666fab0adc81bf28e9c1414585b"
  },
  {
    "url": "pages/d57a50/index.html",
    "revision": "3ce19ca66b5c6a08f208cbdeaaa4a5b7"
  },
  {
    "url": "pages/df26eb/index.html",
    "revision": "8ef5409b19419bf806852708ae1a7967"
  },
  {
    "url": "pages/e1e8af/index.html",
    "revision": "83916ac65ddd838835f5e116b85ed2b1"
  },
  {
    "url": "pages/e29b48/index.html",
    "revision": "7c0e227eaf95e5ce7e9fb0bc76695889"
  },
  {
    "url": "pages/f2d661/index.html",
    "revision": "90d0f2a64725ce677151eaabe95361cd"
  },
  {
    "url": "pages/f3911d/index.html",
    "revision": "005adc3347ba525303d4610465dace31"
  },
  {
    "url": "pages/f87d4f/index.html",
    "revision": "9e2c81daad009dee99f8a691959b235e"
  },
  {
    "url": "planning.html",
    "revision": "37e5ab6833eb5700a226d88cbf746da9"
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
