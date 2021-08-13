import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const LandAddressesData = [
    "0x53a987ecbd7c756743711e1ed9aab70920c0ba28",
    "0x876f76e793b3e00ab9d841ba028fbdf2ccd12636",
    "0x58e357f102f35595833ee54b6d99c7ee2ee48247",
    "0xe827cea769af1df672908f18452db38693d4f641",
    "0x74269aaf46408dc57655e10ac08e343158fdda44",
    "0xf44e5a469dce1693565abdd9e0fb242852a3ac32",
    "0xec25a5b8a7c01e4c84829c30a5dbcc6e47f1112c",
    "0xa93eff0967b9173ca147b9f22fd76ea25822861b",
    "0xcaa70a0b4fddf29d69df6a7d98bbdf20077b1fbb",
    "0x3c284a074afe106adbc1b6eeea1c15983eafdc47",
    "0xa1262af80c64742cbdadfbd2039ad3a21889ebda",
    "0xb3518b0ff378bdbde931fb15fab653002663c4eb",
    "0xe4e2fe2da648aedb4b06f0829b8d2c4a01b12d80",
    "0xe670760dbb84b38cb63ce2a5d6b50f3b008b3348",
    "0x9ce237dab72287eae2ef5eb2c45a374d7d561a6b",
    "0xe928694529f7579a59900bb1358144a036c2f181",
    "0xd0ba9b78f03556fc3e3d6ff664b2ef90f5191dc7",
    "0x56a83cf7c04d32949d3416c8299814ddf1608318",
    "0xa3b67264ef0aeb2284570c22abb57f683e8b75fd",
    "0x760af9dbb856f0e00682c9799282f6b547a5c27a",
    "0x816d7eeb8ac180916cbeba5acf675f0cedfeff6f",
    "0x284c60e0173573aa480c6a1cae23a8214b5e317e",
    "0x5a79142ecc04e1be8d2f6ec94f0db1c51bd81204",
    "0x569944ba63c440fd2bb0ef465ee7aaaca571a372",
    "0x33753ae385d89b220c42745f9fc7a8457475d36a",
    "0x6657d3bcb35c63202c7c6dc248627d69cf6e35ba",
    "0x06ffa040521a1b6788bd7d4eaddf1e17b3fb089d",
    "0x1e4a1ae15ebef7e76d1fe29a15829e9e698124a9",
    "0xfd0675c17eec582fbe33bce7f9ce21b10f4fa0a3",
    "0xa5792e9a78452578e11d43fc9b3dcfebb96d84bf",
    "0x0a809e542312d5c4f15af17192ea14865dde46b9",
    "0xa40333dde13b09456fdd7fc615a2ac0dbfcc7a75",
    "0xcdf7f28ff9ee4a7c448fd9435ef4dc87ad5b44b1",
    "0xcff8c9c1a5ac6bf76f6da6c506c19a8490e28a9a",
    "0x6de4a5abacb7ba672d311e6b3648cec827b4dc46",
    "0x3713f542c234b6853f310ea12d5ce7f2c0201ef0",
    "0xd0f2826ad1ca9aa756570c9eda690f81a7fbadea",
    "0xd04ff22cbd94ec891939d78b5f363b6a8b8911a0",
    "0x6ade226d1d6633772de7865037ab4ee08b07fe11",
    "0xf19c43dde415693f4fb9f85e864841470ebd21ea",
    "0x402b69b21ac482a9057fade5c16ce024a5c80b54",
    "0x4f1b0edf3aed704040f5f8e6437993d5eb278c01",
    "0xcfeb6adb655c2ea30e82b3812aa54884f553a446",
    "0xbebd528ff380c38aa0e41d08bd0eab1a51a4449f",
    "0x51020fe9433a4ddbf378e3c1f83cafac82df154c",
    "0x4340b90cac8f66e765199b756548a8c780c01739",
    "0x40ba80c74992fa4438f41f632020e552cd98558f",
    "0x3f6b4d24d70a00b7e8a37290b83cd98bd654dfec",
    "0xfce2dcd0216ddfc057bb11d7cb652deed937f48f",
    "0x0e004f1b26f0db2d385d2d00f2b999aa54cd0535",
    "0x477e600fab0c881a2b3caea6e8ab582b47776b8d",
    "0xf09731169be9d800917b764cabc6a003199d9a58",
    "0xba7bfe8fd8198cc146b701ff228cb6c62254bce4",
    "0x1ed96ae4d9690898eecb4e59781e020366578599",
    "0x7bc1c2e788a30208150addd5020723d7a978b7dd",
    "0x38e758ad32f76e77a07dc900a68ace69500e99d0",
    "0xe2b0c9f604067d7e2b2dce4129da15a080727742",
    "0xdbab737d919fa5f1421fcc86563496f2131bb42d",
    "0xe0634ca2a1e159aa75bdb13d6ba1f382b645c5e2",
    "0x8026629d1af9cafe8c0b8a4638ed1e7818d37c06",
    "0xee5de8fe961b9d2599a1eea298db87be8768889d",
    "0x95e73b7ef8ace4a5c9f49676b4fa5cec3283892a",
    "0xfa26d569eacfa972211369cbb3a7e9d25f66c7a1",
    "0x8c63272811d4644b62825c0b110ffaaeb77a5d95",
    "0xc9d58a613f541215be667b188a3edad992895eba",
    "0xf1406968da33330df7427ab1fac2f05edaf7873d",
    "0x029c19c8cee3d6f058e453718d1bb51678f3d334",
    "0x157ea7465237654286ba3fdfaefd145cafc8859e",
    "0xf892fd861838aa93ca2acb5e1df089b01b50ce83",
    "0x7d591972e48d8aff9d61c55bc8afe338c8b8d509",
    "0x27e30559d9eb191d303f5b3ef9aaf7b2cc0e7c3a",
    "0xe60f74ece65f47edccc6d49c2ad4f2100b345ee2",
    "0x523f6d48a4ec01df516966006acac118c3626fb6",
    "0xf63b3ab161ab603ca9a508737491eb8671ccad7b",
    "0xb70c01619fdbfc7625d33be3766da621531f886e",
    "0x91f005e71727cd77d9b6264472c5a9c5b8af96ed",
    "0x09debb1c7b0771fa29621b5d120758421a17614e",
    "0xed3161e694bcef0e443a860708e83383f488ea03",
    "0x925e1ba43fc2d8468b1e1dd62f8a8e7fa2fbc67d",
    "0x0e7dff6c716fea935e3508eb06a2e44a4cdb4fe0",
    "0xd4a34388eb9dade2907846924dc1b294c33fcdf9",
    "0x01a676c60dcf1d8b7857e967ef99a44dd2edb372",
    "0x19f6c6c789619bb4313a59401069399896455073",
    "0x706c056916c9e407bf5d1202e2bec24c7f3d8cc7",
    "0x27aea25f12f766103d2ee71143349952e480ab0f",
    "0xa76ed411eb8198fba8cc92bc9b5c6c8dd705a24e",
    "0x537ef3c7b41b8519c04c0a67f38cf3b6c933c987",
    "0x7e64c465539a65f5821dce4febbfd834147b2037",
    "0xf963a79327bb597f159d09409e26d65e07cec331",
    "0xbb7f40ada957ac2932c527ff5cc0883bbd0fcadf",
    "0x5b679b46abea4140d1545ff11a1a4d6c95044c5b",
    "0x4fab0057b5a205fc6ff47f8d635e18cc0a2a98c1",
    "0xddcb236109d8536f9555f28e468dd178d3b65df2",
    "0x286e4a1bab542fc67cbe8844df802936497fa14a",
    "0x7e7e28c228007ca2a4359136fe7b2b3b80ee6593",
    "0x07fb5a06d0db3df34bf43c229af9132a056e7733",
    "0x99c103d4fe8d95ce93bfd5f27b0d933c5495aeef",
    "0xcd3ee0494deb60ff8967f84739fd93dd9386fb03",
    "0x4bb52ecef05fdc204e83e8538828bfaadbeb4131",
    "0x4d1ceabc9a1c9b95442e4d060a51dee2d55949c1",
    "0x68fc3f4687b1aa872b008f94c56b2b23eb3c9c18",
    "0x2bd9a3c77ddc593089357fd5ae9207dadc787faf",
    "0xa4ec41622d30cd3f30ab47ba0ba6bce099db6cec",
    "0xb7c271d46785d55f83821f63cfa5f5d9e48780a7",
    "0x274cbbede19aff4461695125170b974ba26a3964",
    "0xa276caeb8ee18631cc2a4aea9824c9367555b443",
    "0x844fce94bcfdc194d660912bb2c8e4546f3e47d4",
    "0x8894f86a206a5d6c98cca8d9c71c97268c20cbd9",
    "0x99349180ca0f0bc0754bec83d25600b29c5e9494",
    "0xad58fcdcc731d4f25ff42ce2e3c6db6a636001c6",
    "0x258b2ca7fe6372e64f0ed5483ff413e6034d436f",
    "0x2117085e7e4ee35825a9c71bbe46aad8c01789f3",
    "0x16eaf10fcb7be5522892f6f275adeca4158f067f",
    "0xb3ab08e50adaf5d17b4ed045e660a5094a83bc01",
    "0xbe158ee8d307f1a326ae7aabae146883c19d835a",
    "0x19183492206e67d49cdd44befe58c8e5fd29955d",
    "0x54b08e3142f729218a363cff0e1da17bc5660bfc",
    "0xe58b3dc972ec6d58f62521bc1e2422a21016c06e",
    "0xc81d8f1ec3ee76df1f6b7a4db317dd2a393b7ab2",
    "0x660b3eedfdecfcca3fdad99ca4c34d1217afe2b0",
    "0x0278ae06c43c99865201f76bc60cd4e9559a84bb",
    "0x92d30ed2a89748ef94892673f02b04836944127e",
    "0xe1569c6ad36981f27429f2163860154a2ba280fb",
    "0xc6712b2137a0bf80293b30ae77314ab78063ecd5",
    "0x11a320e498f23f9ac9df53532c333a6b296cb949",
    "0x5c1d8a7b88df1273c2611ce67c7e9a1d0fb64249",
    "0xdc9528e73f770c93ed7895a2928d52ea1d18e1a7",
    "0x015ccbf3d21e00d6f4598900f4a2a62f82d94e8e",
    "0xf52bab41492302bd7639e32679e2b5902ae62f5e",
    "0xc18d158b40f844c8371a8de210e405e498865d73",
    "0x4ccdc2d359aa898e5543f17aae1ce529a7562997",
    "0x60d9d7a3e67467b40118f0c8c1fd43edc359b6d9",
    "0xbf1633db9da394d774c87479c0cd1c2c67f79532",
    "0xd7171e19f8cc58cf5c213fe56bf59f3157b6a916",
    "0xb8626c4e3efe7c677dbc550cec7dd67102fe1519",
    "0x7b415ccc57089f780a705fb31aa12f3a78f37dcf",
    "0x706dd398c4bc5659c4f41be63939a93dcd4aa912",
    "0xcff140a95fd97c4dbb677aa6cc5c225382c67c48",
    "0x2cf56fc42b0d2bf8b2a97aeb3de95da2d9fd624d",
    "0xf81099bbb1a3f09b0c59ebb99e46d416bfb0710f",
    "0x8bac5892a1d2565fa30fdcc9252ad447c600b262",
    "0x48ada04c832a4fee8903aca381ca6c20c2134012",
    "0x900ee70188f41e9b81b32a21b1e0b496903c904b",
    "0x22c293db7a8cfad75c06f224ffea6faf052c5f79",
    "0x73f9abd65485c52ae2c1b436957b84aded5e5c8c",
    "0xf90488bd4a3b45f23e06c01bedd2d2c166d76e7a",
    "0xd9b2392b8a72ed60421ae29aa254937c88eebfc6",
    "0x622f53d0ed07a0cc7ccb85237ba7d722a4c15784",
    "0x38b9e14c9c99e82e27b15c9ec874de5df51caba0",
    "0x2ddcdf1d43a41082033cdbae2868de0ca2d7f8db",
    "0x46aa04699cd31f6714163bce110c664881c7b39d",
    "0x01957a9df3add4998ae35a416f2f0df7a952f6d1",
    "0x92ad4e3940f2a53bf156e31ef0fe84f579d9dd44",
    "0xabb37d82da856a27799dd94748466ef97ccdb9cb",
    "0x942d8cdf9e492f4f1c02d25eb390fec8cac3151b",
    "0x0b3c89f9b05d3458b648f43203e0e1b5558a2fb8",
    "0xeda679cd559e2736bc00c870183ad7254312a20b",
    "0x32fa21ad7efb18bfb49633c748a682eec6e82f50",
    "0x4af51bb619ca8f287f7ac189b2b83da298acf348",
    "0x8a9f6eb8566b8f505393eeaaba6ea6db7f125d44",
    "0x20ea2266975273740a424d7ce774bb8d79d29999",
    "0xd99af100c88adc799c9b851edf324df3ee8bda6c",
    "0xeb6248425d3039a40178c7b9a2ef567c170df4f3",
    "0xe75b087a6c4725a275dd2cae2c9b6db55938f564",
    "0x4212402f6f361b0ac9bc0681d9a86531a499b530",
    "0x7ef5bc3a815e6422a795332eaa4f472ba18234f5",
    "0x88ee8692adfc54798c2190c1e68612f75ab15618",
    "0xd45209a888fc362d6ef1e7bee5f7209a0a077889",
    "0xe0642eb36d9a1de37ae3c41e9a5013c9bbf41f1f",
    "0x878047acd0ea0bdb31a105419f6ad05d9a880896",
    "0x1c10810e35ea1f83b85fad7e36667ab1eed0dfbb",
    "0x59acdcf6227a454be57f09d44b011ba3849d81f1",
    "0x0bcea161838b57a11bddd94a357727319639d95b",
    "0xd07ab30dab3fb0d29a699c17201baac970f03c92",
    "0x604475bfc5e3a46b45c727f27f493ef9854ba2b7",
    "0x72b1bf0e23f4c51a8af4de66c8603311b56859f4",
    "0xaff3d8bbde3b450598d2b1c6e4620dbe805ffe6a",
    "0x20c696e29240a82a5ba31a2352853ac14ec6d1e6",
    "0x41b680dda20c0d507066648b0ddc33931ece43da",
    "0x576e78f9522b896dd6f34f93126a70dc6ed297a7",
    "0x42663dda13f4a18dd028d8f11170577dd85dcfbf",
    "0xd16cdd29022c8a5b0fe3df20ec1255bf44ce50db",
    "0x501b6b566f80b74d9852fb3803efc4454f262c4e",
    "0x825c52ab66bf7f9b1b3432f7282f92e6dd103d6a",
    "0x37824c71c04aa537e8ffe68f8c8d767228608ee5",
    "0xc1e7ca17274c36a3358460f93ce30200916688b6",
    "0x1c75a8be04ccf2c4a3a7b0a3ea88f9c1620b598a",
    "0x6c7b8d78686d443b6e5eaaf04bda892034316290",
    "0x2e4e4a891d122c8ef07ac3f63a0aa5912b19798f",
    "0x613eeb4fa81d0a45eb4b26e3ca56e24b47e0ec7e",
    "0xc139e62e6e382ec49fb4fa2c4ceede8219094295",
    "0xae66b0bfc19a94a7bafe848fd5c2877894afb8e5",
    "0x253f2c1812fa9a0c0146ae7639e8314db1f9e479",
    "0xb2c45d665e6178e840d43fe31eaf53ee51f92210",
    "0x4e6c82e9a930285f5afdfd664d3605fbed4b873d",
    "0xf2644256b596c2731f0b47d6bb376b77de5bb965",
    "0x5a7830d6d5c043751f87088effb4cc4a012768c6",
    "0x321c39a71ad86dc5ba041c4db52e3763fde7dc5f",
    "0x495a4e78a5210aacf7fea0fbdde2a9a662a8f88c",
    "0x92b7ae8753d4ca22f5c49a33c37315dc5cd26fac",
    "0x8f5f57b317e33927c62f2702668d9ca5b31c6c5e",
    "0x9166b8dfadc55cfb2f86ebeaf4a38fd0397eb657",
    "0xd4a3ae7dac6a9ae49cefb8391c0a8a542328172c",
    "0xc0bd92bcbb3b02966ae751236b15f9599754f816",
    "0xd288dc3907e8b0008b3d84733c4ab4a6323124b7",
    "0x3aedb97569ad578038498af46f071045b1f36476",
    "0x015af0e8b889e4c81d03c1ab064fc3a870194345",
    "0xc2f4af87d4008c24fc852a1457054b7326cd7aeb",
    "0x082bfc3d79387bf99c3a6183345b6b82f88056fe",
    "0xc69bba13aab1ceb6f2257ed9a82d8e1921e2569b",
    "0xbb8e4d73a32c915009a0cdec07716806e59f0f40",
    "0x90566d25d7c1b20a5afa8c312170c482ad4cf14b",
    "0xd39763be4e00c42d2ac1b862290ed2eb57021313",
    "0xc2f91e44a2ae8031a1403de4f48ff2eeae192fe5",
    "0xd7dcc0f9bc2b584d1fe42dea37f9ce40bac2d248",
    "0x2fd9eb78f7ae98f8c09dfa81bbb878c250cf5611",
    "0x4f5146ca191e5ca0aebe6fdf92c124804efe40e5",
    "0x9b034715d6769ff4229c2f4eca64bf1d202c603a",
    "0x9857198eecef612be6b94ef6f6a875846f07f1bb",
    "0xf07816343ad784de6956261a5eec09cd64dff3ad",
    "0xed3ccbe6d316cc64a6e94359e1b7d88861ff7139",
    "0x346a260b82ee8f7f12b9a42d52266b5b9b7e4ee3",
    "0x829d78e8e8ba37a875fd579769c547993790468d",
    "0xcd2cc3a73967b1f4e2b6861bb032150fae91b68f",
    "0xc38a94441fa7b7cc92b97d82051928c447d195a9",
    "0x9fb2838fc9570d57bae43e41dfe716b294905f04",
    "0x5ecfa5fa152baa78053bd77b9682b0dda71141c8",
    "0xf3d2c1a8e2cb7a22b312b77eec8fd10eb259d05e",
    "0x68b78fbce45b70d3d33c517058b2022f48bfd917",
    "0x5571cc7ea038023c7d55189b2e1a82c1247d8516",
    "0x8f4796c4843c96474cc2eddbba9af79d3750b770",
    "0xdd8e528d2991a2bfee5777d49103af83a0bcd414",
    "0xf3a9ec467b097401acd49520d1a6d0ac1a654f25",
    "0x31fb611c244e1f81307077ef448d174ca34cad91",
    "0x67ec9a3f0cc8cc70fd5d9b45c0703ae3e069c05b",
    "0xdec7baf53777d343329b913eed503a9374a50253",
    "0x5563ef970aaa28ff0ff9f1f2c7600858e204349b",
    "0x9b18d3c083e8fb56df7d781c3286388ec59c7313",
    "0xfb88187fe4de17ca8842ec244c62a34e264c5e10",
    "0x3c4e524f55f78dc420b996e28c6767112c78e468",
    "0xd670b5ba02e791db789495247e062196d4e5be50",
    "0xa4372d275f46ee482dedfe0d600d33bfb54ff4f6",
    "0xa22796b477ec7aaa6cd530fa87ebb4a069c1866e",
    "0xf513cb863b11283656fa362b9298f51e5d143939",
    "0x3dd22b2d91b330768974b214b5a0e67c5b3589fe",
    "0x8b7d6e985b31af7b0f7b64dd852a61587a8bca0f",
    "0x6f61cac02d9d5e5221925a42bc19d8bc164fd83b",
    "0x66c409501e5fa822f8b151418773521d45f84bee",
    "0x585b3f92652d18585c308936d542a1db8427c107",
    "0x49f6979f0a62de11921e0589164e56e1ba28724a",
    "0xd65d1518f3e3d8ec819bf3216dc966daf2f4ccb7",
    "0x5561134ff5b24700d1f8d45fc59f73d023effeb2",
    "0xea1510da0e238266b0e1da7174bdb3d835b80b2d",
    "0x0ad5709b7bc719fa4173f8a4d556e7f7b7a48577",
    "0xc96d990d129d8e63d8b0e53cb87f59d6512e301d",
    "0xb14ad899421898bc238d4020c0a5750e060d46fc",
    "0x3cb3f7e6c6155586fdfe46af7afe08a1c7edf5f1",
    "0x5fd89aadfa2755cf0b9d687bc8b8e869c54ff6b6",
    "0x2b32f1a3d50d3dac9a467f5d3a33afaacaea2b3f",
    "0x35f72345b754b914d13bd483f9d520ce72c8ff65",
    "0xefd69c4a5aa3564db6556efdfb353802c7d1dabf",
    "0x7abc95d4ff776d1389b1ca28dc4de0fa3b97241d",
    "0x24be06c686ba89b0d02f0d40535b6ac495400f92",
    "0x05daaaf88769ecabc10d83babef6dc2f1bd3a552",
    "0xed320bf569e5f3c4e9313391708ddbfc58e296bb",
    "0xdeacdeb0d2d6492ea9b711edb4528d01cc0894a5",
    "0x2adde568bbcab1ad53b5a339544bc8ed6b21c1f3",
    "0x3e162d079a6b46c868ff968f847d8cb36e054ab5",
    "0x01c5c4ca74a665e40e96ed8ff221500b6366b8a6",
    "0x973904c7a03e132b91c81f6ab7c2a2391e14de36",
    "0x5e95491cf6586a4e62fc41b530acbe5ec28af651",
    "0x0f551f367adb8bb1e3d79f580e5c00d7247a06ef",
    "0x0ce697a2ad1f49f6ceab93d4edae58b37408aa3a",
    "0x5fd7f2fe8f233d56cc1e8d38f1d9669d28ba315d",
    "0x3080e007ddbb0c985d723934318e51242e39788a",
    "0x059b4c865ab94a99f85c531fcf2462aa6bca9219",
    "0x7f4c8f9571c2f0433cf117e0c6a3f567b6b3c88b",
    "0xe0a7f9747c9146acec1c3a935df77118960a8bb6",
    "0xef4184f5d92639661b37e2d9b45842e4e5cf8db5",
    "0xb43b0f1d828e5b70ecba3495fc4056a14829e786",
    "0x7c38015f58c1ca0228d67aebd73a60f8ff54d49a",
    "0x9e3b33833448fe9e6224b639ab3c74b11a880013",
    "0xcae1bc22157990a362bf3bcf71438f16c5334a53",
    "0xa6445450c2ca3f8463d358eea28163f62cfa45fd",
    "0x7fe0a9a420bf84167e92d07534df815e69699b05",
    "0xa404d97152396021bc34f1b44051d25eb6927531",
    "0x6803a4a37630542fd114e13ed170a9be11346815",
    "0x1c47c8a43ba39817dfc5ae223c9d04cee88a795e",
    "0xf1b8e223072be2eafb0da6067baf4ba3cd238f2b",
    "0xe36431d2b61267a71e2bcb952460739eb8e4b9bb",
    "0xb2f70a7864f687bc44c79fd725542bc8d3a66583",
    "0x655a775c20067208b206f7024227d2dd5a41d715",
    "0xb9f16b42d7e997a9170c7f0923e7afcc83806458",
    "0x8bbd11137d486952e7ae4541750b9f80ccd09de5",
    "0x8fbe3b1e18856ea2e4e7edfa2281d1b2c7c85ccf",
    "0x294f5462f3553f1700a69d5178fdadaf806f5748",
    "0x0231ffe3d56064d3e480fbc47742d6bfb59a9101",
    "0x17a3fe22a4b92750e69d95e32764c15baa266991",
    "0x8326c2e51815f384b4e264c6f0d9dd6f37a87e30",
    "0x9eb333cf8d148d3e429ae7196f9109a73074691a",
    "0x90a2deb1b5ab3dc8cceac470f8e3789c5a4c5df1",
    "0x664fe01207dc37c84a97a8dcdc28bcc1da6bee57",
    "0x98610de292958f415fb49067d167c7451d68f3e1",
    "0x2c4ebd6efb6fe45f3d764e35e42268848b084b56",
    "0x9e23212bcecb3879ceb914f7a1449ed8162c5bab",
    "0x0c928979fcee6490c009b84084286479907ad947",
    "0x2f68cd6609d37ee9e3ef804f5d9ae23cea947e1f",
    "0xe3c25e7344d3da3dee26bfb2a045c3451929f1f7",
    "0xe404a13f95d805f2f2158f2b7fcbde042d2167b5",
    "0xa19442739286654467f2c9f57ea33fef541e610b",
    "0x1faf6e2f3c883859686518a0a7d912e0655d2995",
    "0xbd2e90409031e67ed3185330fe9d4e96dcf65ebe",
    "0xd8b30f8998e7e3abc5d9ec2ef06073e2d713fac5",
    "0x90f2b710bb936ca2caf16b1e99d8ec7abbb8eb29",
    "0x18379764cd1be5f8bba5eea191ad92be2c395cae",
    "0xc67dcead81b78f112bfa390772856538a0432bc6",
    "0x2a995881588271373154a7b064c30fe5b8f5264a",
    "0x0ecc44066e8a9f9c853e861efb36a2705e517930",
    "0xed9ede9ba26e64a4bf41647843666b89bea5bdd9",
    "0xd2f003e38e215631c2737956779fb9099d27d7ea",
    "0x035a40c2f53afdf9e6c369737cf9f40027828bf5",
    "0x937bcd512062a714d48f8f31a6b8c2bce3c7140a",
    "0x3f07b4ae6b38b99c3569176dee66aae7d1b7b92e",
    "0xa67750d0d01458b0fecafe1f7a83620b537506d2",
    "0x34eb6c5d65780cf88c6c0ff0e4e88e45c0deb266",
    "0xc51b77b22c23b54abe9daeb1212529c5eae2ad07",
    "0x9550615f7e5b9182e6f58a73094239b3d03c8dfd",
    "0xa03819a62b78102bba39d95aca727799816414e1",
    "0x3111d879fa642ccd5fef9ef1747c8ecb49d306bf",
    "0x6b3159ad81f8a2f74ce32101e4aa40ac42039fe9",
    "0xe65440981d431a44d029bf4b7c12e591f2602b91",
    "0xcd86ff57710949df1037769a6f2de72455dc46b8",
    "0x39864f26702fc6971305f2609cffa3822c1ede70",
    "0x51781c2383fd2c0306e6557a02052804f4d2ef55",
    "0x1fdc9f9b742b2cd3256ebf451b802c51b2de0b9b",
    "0x486d94374f88803a29542ae27cd29a2a53dab35e",
    "0x0169016101181e4ffd9f1704ee2f4ae0125f6ff0",
    "0x49e48a45578c9fbf8ee4321ae189787743af1c2f",
    "0xdef0bf15d5e31c662b7a0adb17d86f58791c3d30",
    "0x2f88db1943b23235ee221fd06ee7a57d94b59f44",
    "0x67f40256d7755fe086b4b69c01abd8e728ca4a7b",
    "0x9cd4ddf0744723f8f89a68f83d88e9a6ba4e9691",
    "0x01a19fdaf19740e37b6db81d9265a81756d05dc2",
    "0xeb70bcc3231648e0c2f325803d70069083ba388c",
    "0xc6e89ffa674e9fdf13aba2ba3b5ef457fe53d8af",
    "0x61dbdd905315767a42839f3958de3124d5e1bdc7",
    "0x1bce1136a3f71875b3cfa77a20c9646aa5f76628",
    "0xba7f485eabb85f2ceb7f7aec62fe2069abec3f93",
    "0x74097b581f5f50a42b2e368bc27c695449d76e8a",
    "0xf23a24b228c1ea169c36cfb3df57de58816025fd",
    "0x84936f77a2888f354902fd066b59495fc9988a45",
    "0xd3f4fe3b11a30eb4a5b8e3b49b41af804c3940db",
    "0x39643e9201148d3ba43b114384f998341783302d",
    "0xdaf28c3e09208e6f168e4ce96d116bc18483cdd9",
    "0x6f0fffb72162aa9b882de09f48d1f83adeeb09b4",
    "0x776cd32fea240555fff760f7b4dda9295afcabe3",
    "0x0fbf6661a8f7b39fe3eeb770543efd42fb98fc02",
    "0xbd5cf9c5a240c5c017a86f5877d7123943dc7c1f",
    "0xff3e79532e8ecd263416ec014c27ffea0cade989",
    "0x5e21b6978cdd012de3721a15172b96634d123f3e",
    "0xb1e3a410451d5119ef8c69b1de1ad3ccfb298734",
    "0x288f07a3b609986ce3f2565cd7840df4bfe14e87",
    "0x6cff91f6e5817dcf2a934e9099f389957ab8960f",
    "0xa8d0c26922f68370cb2d2350719d209834cce095",
    "0x0f21704837074e1ba25827ed9300495ed646c78e",
    "0xfb7250bf267259671234fd7826e6c1d12f98ac7a",
    "0x93b4589628c950ef3d525b1ffd6187daa785715c",
    "0x7e6a332f754e326c5fdee77a1982d112751a0e7a",
    "0x67821879982531cb65fef8eaf275731f4c3dc53e",
    "0xeccb261a31e46752c89fa57d0948196af9027c4a",
    "0xb28e85abc6717c556d910efb75559c19a61f2392",
    "0x6becb7684d45f9c28c91ffd31afecd78cfd3ad3e",
    "0x73a6417cb57bb82978c40665efd102fe8f86895b "
]

const customStyles = makeStyles((theme) => ({
    buttonWrapper: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function createData(number, name, action) {
    return { number, name, action };
}

export default function LandAddresses(callback) {
    var addresses = [];

    function ActionButton(props) {
        const externalClasses = customStyles();

        const handleClick = (e) => {
            e.preventDefault();

            callback(props.urlTab);
            window.open(`https://marketplace.plantvsundead.com/farm/other/${props.urlTab}`, "_blank")
        };

        const copyToClipboard = (content) => {
            const el = document.createElement('textarea');
            el.value = content;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        };

        return (
            <div className={externalClasses.buttonWrapper}>
                <Button onClick={() => {
                    copyToClipboard(`https://marketplace.plantvsundead.com/farm/other/${props.urlTab}`);
                }} variant="contained" color="secondary">
                    Copy
                </Button>
                <Button onClick={handleClick} href={`https://marketplace.plantvsundead.com/farm/other/${props.urlTab}`} variant="contained" color="primary">
                    Go
                </Button>
            </div>
        )
    }

    LandAddressesData.forEach((element, index) => {
        addresses.push(createData(index + 1, element, <ActionButton urlTab={element} />))
    })

    return addresses;
}