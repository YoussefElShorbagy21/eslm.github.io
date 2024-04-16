'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "2e19e7e37542a6fa495b0bfc2848b016",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b4e630e519a6e7665435f77b7df0e2a6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eed5e4a525d61ce1cb304e92e4a15c14",
".git/logs/refs/heads/main": "14433aa952f2854a4efe3d1b48e3ed28",
".git/logs/refs/remotes/origin/main": "c79afa8a8578eaf4953c82142b635396",
".git/objects/00/4f00fdff1c6da4a36f298ad5c9d31658b3c4f1": "a840851b0ae62d92b1f44dc63e581016",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/f8a865dc42f551a28ea769ec2fbc694fc6ecb4": "79ba942a8064a46a6e5e90ac0c703378",
".git/objects/01/d99968c28b4023b2d0df1db1eae7ada1df569e": "723016b001056d98ae6770b44bc180dd",
".git/objects/02/61521002cc1c2f0efe83f752e81113f0c5c52a": "8aa3fdb738087280e55d5e9f7973a5c8",
".git/objects/02/62261c3a8960a39c0c13bed32322026644094b": "67837aaf3e29bed88600b4b9fca6a944",
".git/objects/03/e133ebcd45f49d1022b49fc0ffbb8508ac19f7": "9e820e9efbaea96d378d8dea2475a95b",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/05/4e03c6c0f0806167f3046ff93de5c258288518": "a8c4061589607ae4075916404e2a6d58",
".git/objects/06/ae4ba2bbf15b7b31b255bc47ce9faee9b39846": "2c1be1bba8d655bd6d05d673a2c02450",
".git/objects/06/c80a4a547cb306a7058cab2c4c55a1cad88cf9": "fa5f0dd17b900682fcb203e13608fa7b",
".git/objects/07/0b867266af621452d2bc03a83b4eda4a3bfb2d": "8f9e9b09ab9bf70347232a9120c9316f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/8770dba23e445db50e3dacd5a46b0a70edbf70": "4d9340daca3fb2ca6baba6748c473193",
".git/objects/09/9ecc807db72d4f06498313d45525a3cc6c5941": "306644612026fa2da0c8933311b6bd00",
".git/objects/0a/a454c437fdbd077f7af676ddd3aaaba7d1bf54": "e3cbc4bac888b85b1f0691c36b20b93e",
".git/objects/0b/3755eaca50c2b075429d2cde922c054772f50f": "0f24d6bbba97f67418bfe19d99692173",
".git/objects/0b/7a0f29182c7986102ebae2a21753c7ad7f74f0": "f46292cde923d781085492ee0b290cb3",
".git/objects/0f/f6c95eeb0d1b5c78e27bd9281d491285fa93bd": "4c6d63514f3e100c604344a3c6afbd68",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/af8f4848fa1512522d5f880da378dcb6ae57d8": "d96036384a58620a663f23e0f10d747e",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/992f99b666e06aa6531a9a7d9f3e4486b78b09": "27ed07a34107170a929175f4ae4a4d95",
".git/objects/1a/52804db492992a9f8be6cde12fee86b5ca4e0e": "ece6c83429ea713c1643b082df0dd450",
".git/objects/1a/af049851e23541674b5fa45d44c46f167ea52f": "44aee3734cdbedf967d4df5b0b7f6c4f",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/1c/aeac22afa53d873b5a4cc1e6139947f2052ba7": "35c89055bc2754c4f0eddafdfaeda071",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/d03a336a0dfd5078fcd2978239aa2d5a5c64c6": "fb7856f69520db6398c4ec19ed3a427e",
".git/objects/22/fcb5ceb1baf9f7c9392db54ae7eb4ff32e9827": "480af6a59edf2c624395169f4e5f0b0c",
".git/objects/27/14cdba5b706ccab0da9af6d634edb0a8eaefcc": "5e776132da414e2f6f598aeaf04672fc",
".git/objects/28/318715dbb232bb89a6e64a4afdd12137d0eda1": "2f7d6262af8be2174cb5a3a82005f32f",
".git/objects/28/85d0360fea1f1f0c9343203933e74fba3b20f0": "80b01a5c5b7041898389378c739873bf",
".git/objects/29/17033c28ceaaa1f7b7094ad69723c927b4d429": "214c9e5dd47062aeb04db1b62149f8be",
".git/objects/29/4a0725d0ff6a3fecef56e594096b683810c778": "f6d46ca0bfd2b5188fcf76bca5553ce7",
".git/objects/2a/b6c88f5a54ab69320a79dd2ee1f8b497ccad69": "3f37d8d02615c74bfb2faa6e1007f317",
".git/objects/2a/c161596c6da2538b0eb3e7d2e833f24e60f616": "c170f5b295a378006c013caa2a809075",
".git/objects/2b/3a0e97cf7a8226528c9d7e56dd1ed414f2b1ae": "111a8d13fca9e78edc595d5f37535f85",
".git/objects/2e/a53053cf6d03fe8ae61dcdfe3e70004dc3806e": "6e5d31b31a4dba0a51d05c5e58f60345",
".git/objects/2f/7736dd1a7f5240c2407772826a5bbfdac2ef07": "2e65a935cdee6210a785387917722823",
".git/objects/31/1ecd77c5807969638ee83298fdd37ebb77e5c1": "81447bd665a52420024c249ca56d8d46",
".git/objects/31/cd2abdf013f3caeb8b07ba87f224705eeb2a44": "5422397e3008835f4361cf67853d4f19",
".git/objects/32/61553dfd7e64c622a23489e951dd0d08b5a388": "2e5ac71817cf64f4168b8873285532f6",
".git/objects/35/2980e2e4af93efad564567d40bdc441b80248e": "b9d6809a1f0674a14f77e135f001375a",
".git/objects/35/c092e1e4259e3f7669fc3406da9af7338b80af": "bc119a0dccb3c3ae19d481f2711aba5b",
".git/objects/36/6947e20f2e3624c8708c5675ee13c4cf90f9ca": "c26379defacb626b70245704e9daed31",
".git/objects/38/9dba63851897a02baf5b22de3628a279ee3e5f": "a69fe43b536fe28b28aa2f43e30e1834",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/45/2e948cb3f7661b740ad55b5ff2211b7c5f5141": "b070946be5a1e65be78b5f885b1dcba2",
".git/objects/46/1b03043bc686efe77a9146c0de660a2fb95bbf": "c2492f5a881f73daacda1b8c95d55f02",
".git/objects/47/915776954d76b292b4edc925cc184bc597fb67": "0436379f30fd1539e48ed49cec573c6b",
".git/objects/4d/355c3175f38710cf049aefee0693fac3be9091": "9591522ad3b2f0586a88e3e116cb6996",
".git/objects/4e/4330b71debbc78cce40e11653132ab9560e632": "3523c99504b36e5157489c4579c75c36",
".git/objects/4e/a02bef1991a79865c555369aca0a44e955ca93": "b146bef46bd4f9999de3681598396cf3",
".git/objects/50/06adce0851f7b82777e8ea6a239c308098f7ab": "23bfe23120cf542f7ffe3aae35ab71c8",
".git/objects/51/d75f087d7dea913822a0fd1aec78622ba5ee74": "45e0bc8ef3adbc8de62b7c39b4b9a3ff",
".git/objects/52/c066f83e566a911b4d2e332821d886d0677c81": "136e00e991b5130d464f23a17e5c391b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/b162522f18b9b2bb916809c660a3be7f1d88d9": "948e22edd4b0387628f87a77b43e7c72",
".git/objects/56/ad1920429426b188d4a76489210d4c05ef84ba": "9a028f253ea4c27213ce319a55602a3d",
".git/objects/57/5cf391c971f271ed34a04c6c27ddea5430e42e": "6ea2a7438c4e0c4e3051b6aa393dc547",
".git/objects/58/6fdc3b022b925ddbc16c34a739f5f11634e54a": "af7c9a635b2a4a3da83fc5c36a0f38ce",
".git/objects/59/0587415c1ee338196ac4f9258e22705662e4af": "3126dfdfc2dd9ac62c03a47dcd516324",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/24d39d98db752d43bc98515f8f1e2293e50db4": "f81989e72f9d0af5b5e81b9d66bf0d12",
".git/objects/61/5e34dee78903911e2ee53ad43842e1c0656ed3": "80619fb922db9d9be2f25c7eab33531a",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/64/c242040ded71cdb6cea51297b5185f1d6a0e63": "5a660de2d2f9ce19d15453480429bb12",
".git/objects/65/3a5d27419898ac1031f39ad8d6a84ee839f370": "60ed567bf8fcde6250f0dfb23cf04fc8",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/6b/aa47d6aaf6b7543610ed6971b2b6c833785fa6": "83d7cc1af83fe3677061310b66305cac",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/5e0c4d950ddfd7d741ac21323d1c35cf7fdf1a": "296b4687e104b10bb44192721b57dd28",
".git/objects/6e/ad5661d377ccdec84fb657344bd0a54d2cf748": "4a18b3e45025e2e75ba2fd386bdc83c6",
".git/objects/6f/2bce931b17a0bdb6a73a200efd95d1e6e52c2e": "1da417f91aa52b3d0bc64f52bf604fe2",
".git/objects/6f/7d5976f2e0dec8fff59dff9138ab8cf013f168": "1617d253190cfe0f01e2c4856a824d88",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/72/718d2b2943b1b7fc8b3ffeecd7d91373fffd79": "a0b2ae9c45f8e8bda01bcee25b3eec99",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/78/16fd49798d4a48ff36bf9fd39bc97faa2dbf48": "7df9c69dbd896c1f299bbf9834826dfd",
".git/objects/78/47f2f7da3b51a45672126659b95a0e046d2471": "5c22e521de0ec378b127a647e3864c91",
".git/objects/78/d9a0f5a80729f292987334cef8edcf679d4c9c": "f6b3a16c2bb45c4260f2a21857793504",
".git/objects/79/359c460b13e94945a8700227dabdc790091c0e": "73405ba2e8edc9aa7ab0b89388371a1d",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/81/ba5936928e6734f76c83017ac1ff8fcd825880": "3f99bbf5296e793a2024d8be0b0524f0",
".git/objects/82/8e90f7d5515bb89837fb2d367e065a593bb64f": "20e884209dd065bbbc6e8fbab57e5959",
".git/objects/84/d4da56b839326e7ebc9cec5ec9a39378b107be": "1a0fc75631d4b85adef208b008b201ca",
".git/objects/85/9f92b0fe2c2ef5847738a6e52dd7470b26bf50": "aa8faee330c3c940e576b1463b1ee0e3",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/89/167dd6d27117abc8443d98441d6a15e94bdbee": "74c797b05747e0496d76d5607af6a445",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8a/85cae1e2ad87dceb06e928fed87dfbd4ff49f8": "17e1c49ad6c8944481b8ed3921cdaea5",
".git/objects/8f/372fa753f392e2836eca1f07966a8b1db6c964": "65f6b28ae6dc6962ec89487121035021",
".git/objects/93/616f1a9f84ac0c888976cb70201b92b2611a3a": "242ea42ad289029263cb38ba3be8bac1",
".git/objects/93/ef5c091d5b645d695114668e549aa839f5c0c3": "812f932203df43fb543f11e38aab3d77",
".git/objects/94/81e6a31eab72fe0267900071926c5d55e2499c": "d36f033fa293955970645fcaf351c6ff",
".git/objects/94/94fef07aeaaf899f1f0f7ac63b3cb6c611eb2d": "861e0dcce228f7e65cfd714d5583f1c1",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/95/4c0e32f4a0887f1b83f66d69beb79131680543": "a2e31c9b31a15050f973221b5a10f153",
".git/objects/95/802f15eacc7c3631e51bee56effe8eab8fc84b": "41f2ca7cc7600b6314731ca78a2e2898",
".git/objects/96/567a5fa8d8395bc8c0336293584b72375386d4": "bf1f117e21f36dc2f269fc203f02c85f",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/98/cbc01501ff534e06d0264b0802d41367139786": "02b679538b3e6e812cdc5d8ba95ce5e9",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/9a/3868b96514e39308364320a3395340095c5d3c": "c25272fd884a8285af7b5c17579bf3ba",
".git/objects/9b/00785b9c1a4adacd112d934c4517da738c14eb": "74426d5c54c548472eac9e8a7de04a1f",
".git/objects/9b/88933eeb833d8ac61958e2d4382743b781a82d": "ef5b608d0c7416b8d3fd0554ad71ebe7",
".git/objects/9c/30a1b6306c4845300081ba2622eddc97c76926": "e3a08da6a2ffcb6425902986aa86d306",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/930c12ed610a147c4b3bb14499378e0dab06d9": "cf04438d9559499ca4ab379fa1595df3",
".git/objects/a1/a9cf225ce2245a76b5a9e84ae41181bada1b44": "4c4fb856e746d60d8a80a8312b064fc9",
".git/objects/a1/e9f6a609312360db82051bccd5dd121795f5f6": "db63e1562882cf38b2c18b9f2e62b1cd",
".git/objects/a3/49d6ea0fd0de04df5a961b5a10c7942a27652c": "d697150de0eb0356f5b59a597c5aa231",
".git/objects/a8/b5342d3d372023d9265c1e30e0fb523cc5a67d": "3dd6c615c90959945d0f62352bad3fba",
".git/objects/a9/5d3475fca16755658c19382ae09747415b883f": "33a49ffeb027aabe02fe2009f01ace90",
".git/objects/ab/45a62200ec5a98b321c63ec2ac0a85268adcff": "0df7c84359ebc6eeee60215a739c7f8a",
".git/objects/ab/4d8cdc9b15372166461c8628840325d4fa2274": "5d668656368c5e15af530727aa7bf409",
".git/objects/ad/9b98952eb3e458cb4a4f9ac638552fe03462a4": "c5095df98d7df748b8c686ba9272aefe",
".git/objects/ae/88fb2bca4a3389bc8908db902a26d9eaad06b0": "7cca6e3cdf84dd7f7755e082580e80bd",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/b1/3659cea70b412d7204787406e57e8ff9038cf8": "0b4a4c67fbb50e897876c4bc1b2fbc6b",
".git/objects/b2/b1c2b9704f62e84c9f902f47b3001fc92c19d8": "7050400e03440304f5a5c3e5405d52ef",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/c178e7da7223ff064e0e5518260ba52b11080e": "4968b581a16b26038a3c933630effdf8",
".git/objects/b9/3a0c81ab848ada28f0a0e8992d39173530136f": "9976e3c364602b7e6e7203851da8d591",
".git/objects/ba/085847722347c7a58a2dd6d4f53186de7caa53": "a562b81325c3bbf2afb774a68a26125a",
".git/objects/ba/53b016781bc99008ff75df0143005e4be3e554": "7abfe081f77c486b1689c35c224de613",
".git/objects/ba/a42963908d73a9a0307356387820c12d902fae": "7dd13026e593e5d707caf811903f1294",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/bd/3edef1683cbd65a35871c40fcecf91bd5c3e94": "fc9fb8a43b3e71ea7845f2505c28c0e2",
".git/objects/be/2c60d874550f89170d344bed386f150883f3ea": "923d2b7470aebfc290b22062eb4debc7",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/c0/266f99797c99add19f2680f63cbe848a75755f": "fce56a58101047d0de5e727567f524cc",
".git/objects/c1/65cedea9df4b10b4ef73cacc4026e8aa6bf01a": "8b5318b80f72b2edf5deecc4c2fcaf76",
".git/objects/c3/3625c4374fd83a986f85097e8c0235d29b234f": "06348667e204c1f12e5411a63356548f",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/8bf3036b11a5c1017cdb76517e051a6cb69c7d": "fefa0e84e4cfde6ca200b0ef8fc93ef6",
".git/objects/c6/c2b48cb497b316b37788121326572fa43afe6b": "73ac662fed3a9552e8ef99dd024f9868",
".git/objects/cc/11e9c9a8034a6b0b0fff1f439c7df57b24906a": "c6d542dedcea1721bbccebdc35f9b447",
".git/objects/cf/086fbbfa7555dd38c6b34b89dbc173f807429a": "2cedc8e6194f5965904e126d3beeadcc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/55709e5280e5e891f92caa4955ea029e99a87c": "03ae523fbb39e2c5c9ada341d87147f3",
".git/objects/d9/2daf1b112ff0c71f640206a47395d547e6c15c": "be9460265cc0737016c888a3e7353f59",
".git/objects/dd/ab6168452dfd20ae76720c73f1986a6d696e82": "0656dce7a93a6d426f1e5cb102fff764",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/e4/837e840aa2c90861ad65217bad7b07a8ad8bf9": "2b40b3dd85937b35048293beb63927e1",
".git/objects/e5/434181977a1efab69e1f5323a7daa68b776b71": "84d1e972d39304b3eeb0a75625be7263",
".git/objects/e5/f986f5ee0092b88541c86125b573fd08ae42b5": "6a7e51e9e9c41c70b2d75c1b0a19f43d",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e7/d5a10898fbe79e110ca3d17eda4aa4e8fccffd": "479047182b1a566aebcce9cc5945b4aa",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/2aa835e59016f2dda51a3f458c424be305c669": "13390d9d10ee8a7badf4ad49ac298ca2",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ee/45ee09f4b3b4acfc6662e829f00530522a7acf": "c5e26b3b2a5cc0c164491164facd1916",
".git/objects/ef/ac301a8843078a2b57f23ad0529dcffe68c0f1": "10955e2dc40790c56d2986e43f6d9bf8",
".git/objects/f1/026d526f2c139cd09cd68338498d48d7a9b110": "96f509a9a39d0baf12b8995ff3b9bab6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/d8ae9e5b54262481abef61c693be82033a6ab0": "a242876372a55af8382c7854cfcf6419",
".git/objects/f5/90b2546fcd384c961d5aae95bb28ce834e1da9": "59f66eeaebfea25eeaa941d56707ba93",
".git/objects/f6/06c5be83b6370529bc447fff2a302f45e02232": "1bdc8eab0e1b50088efc9ef637438aff",
".git/objects/f6/46416df4dde8ba9dfbcfd5bc9fba3db17453e4": "40b50766094538a6e65835424523422e",
".git/objects/f8/344880a1a8e716cec5f5974e1fde40889c0649": "3204868069b7f62bb4c6b95e16d9d722",
".git/objects/fa/8fc036f03407957113635495c4f2718577395b": "35d17fe6ad9b61df700e377f6b289279",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/fe/db92620f5e0b8f3c3496befdf323417ad38afe": "0dbbd3462f4e35abc6e512bc0a378165",
".git/objects/ff/38f4d07a4f5d0935f50390de9f7e7f4f8746ea": "3e0d7515620fcd0b28ef5f75b9137ff4",
".git/objects/ff/6236c9c396176770158f30237f9e7ceed62609": "c764fc1c996e614cd4db61ba5b8485b8",
".git/refs/heads/main": "bba1fc93c7b46def7c5beb74d553f938",
".git/refs/remotes/origin/main": "bba1fc93c7b46def7c5beb74d553f938",
"assets/AssetManifest.bin": "7ad93a55977500af236ae518129b5fac",
"assets/AssetManifest.bin.json": "6c3178d4e56ff4c58553fb0d828db260",
"assets/AssetManifest.json": "0a8a5d7e24878a09ce2a0fbce966dd80",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Black.ttf": "6729fd5454518cdaf492a2b3fe27cf88",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Bold.ttf": "cda675687ed1576b7bda072838c0ed5f",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-ExtraBold.ttf": "398d2a98487424a3e5051de8cb0fb1c0",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-ExtraLight.ttf": "9bf46a52b39d0fc53e9a54dacde2e0bb",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Light.ttf": "ffcfcc231a05032bca6e0819aa60eacb",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Medium.ttf": "21f0c6935e6ad3e4481e94b236624764",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Regular.ttf": "75527903c6a793772b02807c5343f4c8",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-SemiBold.ttf": "6668035e904e215087e94774d5f47c8d",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic-Thin.ttf": "2b1587c2f8be37f7398be7f4f19a8ff1",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Black.ttf": "f14bd7108661cd47700d5a44a022bd5e",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Bold.ttf": "fbb783a6ff2aeffdf2a29f5d264496bd",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-ExtraBold.ttf": "1177a7b9d97d8950ca1db767f726b05c",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-ExtraLight.ttf": "10fca32dbec65058e90fd538526b4bbb",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Light.ttf": "452b14e88276b52e26ac460b9cb2c7e1",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Medium.ttf": "d24c84084e577fb3bb03517c8a20d26c",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Regular.ttf": "c01f450f90ada0f820d9cc4d5ea03f95",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-SemiBold.ttf": "b0508904816b5574a2e746447b17f010",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_Condensed-Thin.ttf": "1861f94a8101745776210ea2261d5754",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Black.ttf": "4869abae4e7bf986f51df0e55b8a2e60",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Bold.ttf": "2a34ce4751fb907989564832d51c5fbb",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-ExtraBold.ttf": "2ebdf77ca2b3f99b1573992c3bf11fcc",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-ExtraLight.ttf": "64b11693cdc8bd10467f5c062f5596ee",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Light.ttf": "39e16bc02ffc25fcd09865fdd85d80f9",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Medium.ttf": "27267fd3e592898c9d23bd4bb54a731d",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Regular.ttf": "fe4d7da2189c37c45f5d34b46fdf0c6e",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-SemiBold.ttf": "902fd4a8f6b3ecc8d1fa40f819b22190",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_ExtraCondensed-Thin.ttf": "789c98e16f99aef60a98f7a151bcc24e",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Black.ttf": "7b7314d4fd5caf6d6c62bdcdf28d4098",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Bold.ttf": "114981c5bc640a521c59be521497a6b2",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-ExtraBold.ttf": "a52323f61e2d50da02ba9fc27929269d",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-ExtraLight.ttf": "b8fa618894eebab79f091ba0636a1b0a",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Light.ttf": "c7f053b72c794ade00e4a825cbdf19db",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Medium.ttf": "1e4238d991444359b56bcf90c9e12d6f",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Regular.ttf": "7c40f880a43986fe144bfbf477b9fd3f",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-SemiBold.ttf": "f428b8238a05b4855640dbaf0aecaa0c",
"assets/assets/fonts/Noto_Sans_Arabic/NotoSansArabic_SemiCondensed-Thin.ttf": "16f15b0b5ecfb8e809b8f01178ea81f8",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/images/1.png": "9ca9f2425e71528ffc19b43547e365bd",
"assets/assets/images/2.png": "fc64b9d88457608b469227ac9221b593",
"assets/assets/images/3.png": "129f198d715bff1afb8f280fc1be9dcc",
"assets/assets/images/5Star.png": "efc987b8a0fef9c6db81282e91166757",
"assets/assets/images/AboutUsChartImage.png": "1adb3b38d37378b2f836b8a52da63845",
"assets/assets/images/arrow-bold.png": "f42971b660e21e762c82e7620fb52697",
"assets/assets/images/arrow.png": "4bff51b9098498c021129ec620b8d14a",
"assets/assets/images/carHyundai.png": "3a98f4e9c90b44d504cfe3922b64ea75",
"assets/assets/images/contactUs.png": "498712419d9b9a2d744b27e2e160492e",
"assets/assets/images/EditProfile.png": "e3d857be5b40520fcc4b931f0c66ffc6",
"assets/assets/images/EmptyReportImage.png": "f084a947f90919a83f0b35622bc3c629",
"assets/assets/images/Feedback.png": "e3cc32079c9e307caedcc80e52f47545",
"assets/assets/images/FeedBackMobile.png": "e6d9daf9f2772c60e340514d39bed56e",
"assets/assets/images/Flag.png": "dada74ecab647855b0b28ae420d3f8b2",
"assets/assets/images/FooterHomePage.PNG": "853710adb4bf29f663e87fed5d04acf6",
"assets/assets/images/home.svg": "fcf701fb2089a6b0432b9be959b87fa2",
"assets/assets/images/Iconbag.png": "51987ddf9ddb443eb690d40dd55c9619",
"assets/assets/images/Iconcheck-box.png": "eb5dd4404169ff2bd242e5cc63e06b60",
"assets/assets/images/Iconlist-box-line.png": "d6f7249682f3f6f50b8c47bd2ec4cf41",
"assets/assets/images/Iconmingcute.png": "79989edf7b3380de0ed2b205beba312e",
"assets/assets/images/IconSettings.png": "392c034951ade6eda9b6834ff7db518c",
"assets/assets/images/IconSignOut.png": "359ae17f6a47f133233539b6f1e88796",
"assets/assets/images/Iconusers-four.png": "580771571341540ac89af4fc8c56a88e",
"assets/assets/images/IconVector.png": "2d711d8adcace58a5ccfbbc212291723",
"assets/assets/images/Image1.png": "945af634aed92442f42d05bbba6a8591",
"assets/assets/images/Image2.png": "4797680d17a23879fe2f2f3b085d3369",
"assets/assets/images/Image3.png": "70866cb4c8614dddfaee4f40cddf3045",
"assets/assets/images/ironicon.png": "d9907a2134eb315eadce4cfcf158e5d3",
"assets/assets/images/LogoDvier.svg": "26c239e7f4be8a900640e31bb858f3ab",
"assets/assets/images/LogoEslmAR.svg": "7f7bf623809618d5c4f74e526714ccd4",
"assets/assets/images/LogoEslmEn.svg": "43394330c01ecebe2e41674d6bd41eb4",
"assets/assets/images/LogoVendor.svg": "dee09e6a8ecc9eb36cb34193e2d2aae8",
"assets/assets/images/LogoWorker.svg": "d7d40bd95e9f6ed058ceb0a93c15fa96",
"assets/assets/images/offersImage.png": "d9c0f34a77d52e2d4214d8951a7cf8e4",
"assets/assets/images/ourServices1.png": "17a5c4cb67fc60880665270266e0f620",
"assets/assets/images/ourServices2.png": "c7b576b33d37176295fb8bfa588b3279",
"assets/assets/images/ourServices3.png": "d5f4314cbdd5f7fdcb25f97b7c5a2048",
"assets/assets/images/ourServices4.png": "3cb6874fe017b2565e76fd7caded00e4",
"assets/assets/images/ourServices5.png": "5082a3d7a2a31eb8516f9959cdbf4382",
"assets/assets/images/Pending.png": "be2b824631d8db2e5a24f1b838bcb584",
"assets/assets/images/ProfileImage.png": "9c6a8a24c8d5e6c91ce80712ae438215",
"assets/assets/images/ProfileImage1.png": "a0c2fb4373ed07eb3f696c297682336e",
"assets/assets/images/ProfileImage2.png": "a93968d88172ff6ab977d752eff16ab6",
"assets/assets/images/ProfileImagesAdd.png": "f382b21f28e80b3a56d3116665fa00de",
"assets/assets/images/TermsImages.png": "d8f4111278a106ca6853580d22c0d6d1",
"assets/assets/images/WeAreSorry.png": "f388e94e44d0c62ae9ff68c99f993f5b",
"assets/assets/lang/ar.json": "9d70959db6fdfb9d1228c2d04d754d09",
"assets/assets/lang/en.json": "3d137e5a81f11d619652703e47b132cb",
"assets/FontManifest.json": "37b667b5940c770ff8f4e869008e200b",
"assets/fonts/MaterialIcons-Regular.otf": "b6ae66da3bd9c808a3d6c550d00117e5",
"assets/NOTICES": "54909ac686b6f83287b4633c6bdb4719",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c28258a333ec8e53a688ad074fd53c9c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8dc099775ee24aa309977ecfb23d301c",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"file.js": "4f13884147b748050148e5c007cc1272",
"icons/android-chrome-192x192.png": "3498bbf23a3833197287c91ff159ba21",
"icons/android-chrome-512x512.png": "85079ec74966a078051b49e6df9f54bf",
"icons/apple-touch-icon.png": "f978525cc57ce5cf272056ffd5ce822d",
"index.html": "ff74f17abf0de40ff3f6cdef589a6176",
"/": "ff74f17abf0de40ff3f6cdef589a6176",
"logo.png": "3498bbf23a3833197287c91ff159ba21",
"main.dart.js": "0a0311fafab2629e7f853b336e350e47",
"manifest.json": "d4705b1c481198950d88a37d7ddc74f8",
"README.md": "582fc9df22b75c1d0f03fdd1dad10de5",
"version.json": "a1792bfc6f95a7d4e2eae01d32c5eedc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
