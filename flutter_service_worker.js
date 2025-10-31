'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "45c6a12cd59dd956503157ec28743d09",
"flutter_bootstrap.js": "679470fb05b23a77f81387a66a8fa612",
"CNAME": "237f0d4608a1e2758397a0d2f647dfb7",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"index.html": "96803609370b8b4a0658d75c13c77981",
"/": "96803609370b8b4a0658d75c13c77981",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/flutter_iconpicker_plus/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/flutter_iconpicker_plus/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flutter_iconpicker_plus/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/flutter_iconpicker_plus/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "35ba89dd1e108938a41128039a73f321",
"assets/FontManifest.json": "e1044d6203f63216088caa35ff937713",
"assets/AssetManifest.bin.json": "dfc2a2ca0631d5414aa64044d4b9c10a",
"assets/assets/images/leads_funnel.png": "d1071c817031a6decb8ee4244076231e",
"assets/assets/images/lady_outlined.png": "fa4e3c104e8612bcc9a90df2d5054ca3",
"assets/assets/images/logo.jpeg": "b1f9482ac1a90156ed05de596944420e",
"assets/assets/images/background_lt.jpeg": "ef835e95114c81ce550fe08b8bb92e6f",
"assets/assets/images/person_outlined.png": "072166b07decc640cd88a428e3412513",
"assets/AssetManifest.json": "d6a7d1e7a12fba3c887826be93387a62",
"assets/AssetManifest.bin": "61eb6d63c51603c81c1a3ceb42ac414c",
"manifest.json": "1514ad61885dea9f7838c9e876d407e6",
"README.md": "b915b96b87b7421e1535b1096d6e31c8",
"version.json": "94c87e5a8f38369875d2f0c59a119fd3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "f10da4575cff016688f9af63787b6077",
".git/objects/13/9a969794be97ec81c7d9fe3df1072c3fd725de": "39875a67527a8e3e0e8068a8a5a1ba2a",
".git/objects/34/db84126b179f798c4bd09c0aa32904d2af2279": "e25ab8c0730cdb8426f3114c588feec1",
".git/objects/80/a7d9706a960d123d5a0b7de314e7aefd13d2eb": "bd5d2a00c029bfd670856e00adda3844",
".git/objects/2f/13ad60fa9328cac4d545d0bd4690f216adc7e2": "b7e7483dfa4a189c9c8a0539085c59b6",
".git/objects/8f/78a59d3ccd6b80dd84bdbc63d211e88f953244": "c149024748ac37f8473c3d26c0cec7ff",
".git/objects/ca/3504bf060fefc1b304c33b30a8c6aea138299f": "53e0d9931bbf4b0de7bcc05ecccbf60c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/52/9ab28a403c4fdab84c1eafdaf29514d2efd6ce": "22150d51ad993d96ca0848b4ce3cc7af",
".git/objects/27/644c3c4677230d5beeee6e0566f3c12ec260bf": "559c17abce743d6e2ec129a8d0e035d2",
".git/objects/31/047b73e6569ef2d72b8385ca0e1701918d2ec7": "5887bda0831896216e465d3c5e04c524",
".git/objects/12/fcc22d0405b90f0d1b9a938361a1ca81f50d7c": "75d5cc1ab54d4de365856892d5ccf3b8",
".git/objects/d1/885f743af80bcd1ef8b8e7501a904796934a03": "07c96ac97548a14692a470259e2821b9",
".git/objects/d1/37e0919bbf7f1e55d87eea2cc3e6f681c0612e": "b1e5b5fa0dd5c7e207a44263fd973a81",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/90/9f85ab6930f703ef73ece37b3559d8ef56b73f": "ed43d1a730160ea42f0688eafef6a9fd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/bcbe9b6986309efdbf6762348318f54b50232a": "32f43730d15f4c6b79500b14098aebd5",
".git/objects/fd/b785ad97edba9a917878d120b097e38d962426": "ce8f47d446dbe4542a23493e73764884",
".git/objects/76/4ab3028dab6523a631e75f602d87b7aeadf415": "a669ae9aaac7e6d85a6111abc7697bff",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/48/588dc34e6e1290932e349b48eeb0180f7a1bf2": "08063216cc26ad8233eee01eed62eb27",
".git/objects/48/00c1bc99a14db60016dc6dd2bbe825b0a1002c": "3f2ce817498083c058b514f20dc685e9",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/83/f4164f170cf16704e1ba1ba2cd1e3d5b8e32fd": "5b99226cdb82656dbb4ddd718f6bd2b7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/c0/964966ca1248aa3e9e286959a5c531a03f042e": "fbe3fab3a7e9ce9758032d98f49e1d3f",
".git/objects/c0/dbea4d049aae61c855ac6f293ad89a6237edbe": "57701488a8263353ad8b1d8decf84673",
".git/objects/2e/e896c5eed3ac658063814e42fca1e8fb815203": "16c629d63507f00a813acd8d3e155fee",
".git/objects/2e/cf191aa3dc0bca39f01ac0010307f05e98b00c": "90eb0e2627b6f539ed20bf44f1de0b35",
".git/objects/2e/4bf636e956a1f90d469d00a1c45e12da433f8e": "d58eb2c2fc172cd4e38befdaa6d3d341",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/1f/30a731cb1e135bd007296960d7d57434fcf55e": "2a533a9fe6d5bbd835fdd2102dcce8c6",
".git/objects/50/5fdd5789f25941204b127356ff523edaffff64": "89139e52cbf3df6711bd710f8dfe4db4",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/77/6961384d33f5861d01c45150fd525e6cdedc64": "e3a7e59f817049db7273121289e348de",
".git/objects/62/4822818f3e629fcf6b1488a974dd35428e4d12": "366be14e0512b9d0db6b43a7abe9e90e",
".git/objects/1a/a6545165a9185bb14e651946bbf9fa07f70c6b": "48375821f9914a64c6210e7914e9b894",
".git/objects/1a/418a939b8e37b033db6c15d035b72767626e34": "56ea57906d123855d1fc5e93de7ee2c1",
".git/objects/a1/b026b0cacca22d74114496d039b424d9c1c336": "77ff81751f99ac889a5fd707ca4fd690",
".git/objects/3d/ccc0e7da7db5562815c968361acacee8c17e31": "39d7f59b1738bd9d397e036273d27a0c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/18/29adab1ef1e0c1955b3775180087689678a0eb": "f4d59b51e5392c3e5b0acf490296f640",
".git/objects/8d/6a33841a363def997fd938ceb15eaeed4c1599": "1855949f5625b306a3de5234062f0c6d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/38/be803e8b349feef89a102a04d735fc0f5d05f6": "9720e0af03c9ec2d1308ce10e5729d87",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/0b/4cd6b1bc8a142439bc5953d2941d1e95750aef": "9a943d0b52ee3ef7f8bb9851ee930ad1",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/23/105b7e344317fdac316f05e28fbf66adf71766": "ee65dbd5289a6e895cad60f0d5fabdce",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/68/74600bfc9003b5ce065daa8c0d1830f950a22a": "8e81ac252a77fd7e994dda60757558a3",
".git/objects/68/5f5307bf4d85a3bae5f4bafa38b473cd8889e4": "ffee15c54507f0bd910878ae993dcabc",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/94/879a8d42f5736a7fe543ac8f13e685807a618e": "ba03e9f32c82c38c99779fcbbb594f41",
".git/objects/66/08fb1f13f27a409abd89e7daba50a7088cbec3": "b7a89d31f171406cfde3a2e81c2cd3bd",
".git/objects/66/1739d01f96d57f7044c78491eb9ab50cb468cd": "b03adc8dba9e2c5d958f031b421dbaa5",
".git/objects/58/8ed4b7bb28e4855d41d2c3d33801899d07e507": "a4dfb5c41615b5a2100761f055fd29a1",
".git/objects/96/0cabfdf6fb1085b7a62a701d0618dc649876ec": "9b8c5ffa76c94b0d26387acc7e5a5a83",
".git/objects/47/c0e6ce88a5a3a7338deb1ac2fc9425fde2a099": "ab506b339ca443be7afb2690696d9761",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/d0efb66260681da5b2c434df4ae040ca4e3727": "0002f8f9c5ebca0ff554757a865d6251",
".git/objects/bc/ac37fad75a3b56f3b6e9e61ff2d32a96a3f1b4": "51046eaada25103c2b753bdd0fb97e28",
".git/objects/cd/1e8f3daf0deee2f37bd3b67d8822a92e9e8ad6": "edd1733d6011f711721f0f624a2dabc8",
".git/objects/f4/37b3bbd207b8da4d3641391e6dd3eeca242fc9": "42b4c24c5a78aca8caafdda144e42116",
".git/objects/b9/6966c0f057c14c1b49857042b10e35016299d0": "fe34321a5055c7b8c4baebb97da7e177",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/99/e4565a726cd3ccf6c81d1dca879b3faf94f8b1": "b57ad7e5c2f030e8a81a3634fb23d6ce",
".git/objects/c9/0580a7138c98e42d6cf9edb0a2cd75de622fcd": "d392b2c54f9e1669418ee24d2ea20f12",
".git/objects/37/73719b3de423b8951d29f5144ede8d64766d3a": "cc2297fbfcfdb2379f1d90d1be554cdc",
".git/objects/c7/84880818338889d56d1db732e57f634fb126b1": "b8a1d91e1309c662d3056873bb4b9dbe",
".git/objects/5d/08109ccb00851cc64b026b636d6cd54402a4d0": "72147d5c2e56039fe41431d297bb8b8a",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/c20a0c97fa71bdf25fce52088d89473905cb5b": "3501c6177406d8e24ae4184cca25f9d4",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/f2/c0883257fc20e8c23146ff9e2e0bec0eb0e9bf": "e85c1ab26f702c6c1946ba9b262cedb0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/3094e49f8f5f8a24e7b0895fb3cec4e457bd74": "70bd16ef66ecdfd89604c8ea75a58f53",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/e5/e5871ae3f80eed459cff13bdfbb412f05ef4c2": "22fa96fc9015a04307052f1d35cd15bd",
".git/objects/0d/95524cf1aa5ce34e91a944a81a4c708f4b81ba": "e00108ef608dab2e409a2d4d1872c518",
".git/objects/92/6945d7257a12886d359f154cf4de2d09f3a3c6": "0cd6de0184f3309a7eddb1fd1c9eef8e",
".git/objects/92/cd08f9d54c1e89b9d223ea2ebc16222c46e948": "d55e4f86c1809de96b8da7a4a5c942aa",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/bf/2384b4f42abdd0e40d72004fee34a9b8785754": "10a3e07174481f8f8ee3ce69d9989e41",
".git/objects/bf/8e366bc3ad7426a0546bd9e4ec1354c7a50266": "1c94e9a9968a249d383e93909dadfc26",
".git/objects/a9/e3472e2e8a508ed162c649807b39f0c5da4488": "a23091d0a9b3449e416d0ab53a0f894d",
".git/objects/08/5185898b3bbedaaacd5621ce7668c11e510dc3": "dce47a6c338fd169c1b94f167ea6011c",
".git/objects/a8/57a821a4f16843de7ff62e63c895ccb951fcd9": "1dfa2977f65ad7be47b89166562df013",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/ff/fc26c84b9b37f3a199b1ba3475f40f9a4deed9": "1e5e83c03fbf44f0799524c5f0c14704",
".git/objects/e0/05dd8d460c29477fac5fe61ffb5bfc5c33e054": "133cd7fd9c9c2c94e200af446b7abd03",
".git/objects/78/3c5577503d726d56a091d39e6477cd88a74473": "ef550bb87946de850427521f74ee5590",
".git/refs/remotes/origin/main": "4c643f43d5665c73253d34c0e587a54f",
".git/refs/heads/main": "4c643f43d5665c73253d34c0e587a54f",
".git/index": "95c9e5100a248abde1f4ee97aaed7149",
".git/COMMIT_EDITMSG": "3519a08bc104688a1b0de2fd13475cd8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "1397aa4af1491252b21ea56fb95f4836",
".git/logs/refs/heads/main": "96975f702fc0790613a17a37bfb591fb",
".git/logs/HEAD": "23c10b947a8d700990ce62ebfca37309",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
