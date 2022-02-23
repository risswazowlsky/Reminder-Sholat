// REMINDER JADWAL SHOLAT
// Berdasarkan API myQuran.com
// API: http://bit.ly/api-v1-myquran
// Library: https://bit.ly/telegram-lib-v2

// --- SESUAIKAN ISI VARIABLE DIBAWAH INI ---

// seting telegram

// masukkan token bot yang di dapat dari botfather
var token = 'TOKEN_BOT';

// masukkan ID user kamu, untuk mendapatkan notif jika bot terjadi error
let adminBot = USER_ID;

var dataLokasi = {
   "ACEH":[
      {"id":"0101","lokasi":"KAB. ACEH BARAT"},{"id":"0102","lokasi":"KAB. ACEH BARAT DAYA"},{"id":"0103","lokasi":"KAB. ACEH BESAR"},{"id":"0104","lokasi":"KAB. ACEH JAYA"},{"id":"0105","lokasi":"KAB. ACEH SELATAN"},{"id":"0106","lokasi":"KAB. ACEH SINGKIL"},{"id":"0107","lokasi":"KAB. ACEH TAMIANG"},{"id":"0108","lokasi":"KAB. ACEH TENGAH"},{"id":"0109","lokasi":"KAB. ACEH TENGGARA"},{"id":"0110","lokasi":"KAB. ACEH TIMUR"},{"id":"0111","lokasi":"KAB. ACEH UTARA"},{"id":"0112","lokasi":"KAB. BENER MERIAH"},{"id":"0113","lokasi":"KAB. BIREUEN"},{"id":"0114","lokasi":"KAB. GAYO LUES"},{"id":"0115","lokasi":"KAB. NAGAN RAYA"},{"id":"0116","lokasi":"KAB. PIDIE"},{"id":"0117","lokasi":"KAB. PIDIE JAYA"},{"id":"0118","lokasi":"KAB. SIMEULUE"},{"id":"0119","lokasi":"KOTA BANDA ACEH"},{"id":"0120","lokasi":"KOTA LANGSA"},{"id":"0121","lokasi":"KOTA LHOKSEUMAWE"},{"id":"0122","lokasi":"KOTA SABANG"},{"id":"0123","lokasi":"KOTA SUBULUSSALAM"}
   ],
   "SUMATERA UTARA":[
      {"id":"0201","lokasi":"KAB. ASAHAN"},{"id":"0202","lokasi":"KAB. BATUBARA"},{"id":"0203","lokasi":"KAB. DAIRI"},{"id":"0204","lokasi":"KAB. DELI SERDANG"},{"id":"0205","lokasi":"KAB. HUMBANG HASUNDUTAN"},{"id":"0206","lokasi":"KAB. KARO"},{"id":"0207","lokasi":"KAB. LABUHANBATU"},{"id":"0208","lokasi":"KAB. LABUHANBATU SELATAN"},{"id":"0209","lokasi":"KAB. LABUHANBATU UTARA"},{"id":"0210","lokasi":"KAB. LANGKAT"},{"id":"0211","lokasi":"KAB. MANDAILING NATAL"},{"id":"0212","lokasi":"KAB. NIAS"},{"id":"0213","lokasi":"KAB. NIAS BARAT"},{"id":"0214","lokasi":"KAB. NIAS SELATAN"},{"id":"0215","lokasi":"KAB. NIAS UTARA"},{"id":"0216","lokasi":"KAB. PADANG LAWAS"},{"id":"0217","lokasi":"KAB. PADANG LAWAS UTARA"},{"id":"0218","lokasi":"KAB. PAKPAK BHARAT"},{"id":"0219","lokasi":"KAB. SAMOSIR"},{"id":"0220","lokasi":"KAB. SERDANG BEDAGAI"},{"id":"0221","lokasi":"KAB. SIMALUNGUN"},{"id":"0222","lokasi":"KAB. TAPANULI SELATAN"},{"id":"0223","lokasi":"KAB. TAPANULI TENGAH"},{"id":"0224","lokasi":"KAB. TAPANULI UTARA"},{"id":"0225","lokasi":"KAB. TOBA SAMOSIR"},{"id":"0226","lokasi":"KOTA BINJAI"},{"id":"0227","lokasi":"KOTA GUNUNGSITOLI"},{"id":"0228","lokasi":"KOTA MEDAN"},{"id":"0229","lokasi":"KOTA PADANGSIDEMPUAN"},{"id":"0230","lokasi":"KOTA PEMATANGSIANTAR"},{"id":"0231","lokasi":"KOTA SIBOLGA"},{"id":"0232","lokasi":"KOTA TANJUNGBALAI"},{"id":"0233","lokasi":"KOTA TEBING TINGGI"}
   ],
   "SUMATERA BARAT":[
      {"id":"0301","lokasi":"KAB. AGAM"},{"id":"0302","lokasi":"KAB. DHARMASRAYA"},{"id":"0303","lokasi":"KAB. KEPULAUAN MENTAWAI"},{"id":"0304","lokasi":"KAB. LIMA PULUH KOTA"},{"id":"0305","lokasi":"KAB. PADANG PARIAMAN"},{"id":"0306","lokasi":"KAB. PASAMAN"},{"id":"0307","lokasi":"KAB. PASAMAN BARAT"},{"id":"0308","lokasi":"KAB. PESISIR SELATAN"},{"id":"0309","lokasi":"KAB. SIJUNJUNG"},{"id":"0310","lokasi":"KAB. SOLOK"},{"id":"0311","lokasi":"KAB. SOLOK SELATAN"},{"id":"0312","lokasi":"KAB. TANAH DATAR"},{"id":"0313","lokasi":"KOTA BUKITTINGGI"},{"id":"0314","lokasi":"KOTA PADANG"},{"id":"0315","lokasi":"KOTA PADANGPANJANG"},{"id":"0316","lokasi":"KOTA PARIAMAN"},{"id":"0317","lokasi":"KOTA PAYAKUMBUH"},{"id":"0318","lokasi":"KOTA SAWAHLUNTO"},{"id":"0319","lokasi":"KOTA SOLOK"}
   ],
   "RIAU":[
      {"id":"0401","lokasi":"KAB. BENGKALIS"},{"id":"0402","lokasi":"KAB. INDRAGIRI HILIR"},{"id":"0403","lokasi":"KAB. INDRAGIRI HULU"},{"id":"0404","lokasi":"KAB. KAMPAR"},{"id":"0405","lokasi":"KAB. KEPULAUAN MERANTI"},{"id":"0406","lokasi":"KAB. KUANTAN SINGINGI"},{"id":"0407","lokasi":"KAB. PELALAWAN"},{"id":"0408","lokasi":"KAB. ROKAN HILIR"},{"id":"0409","lokasi":"KAB. ROKAN HULU"},{"id":"0410","lokasi":"KAB. SIAK"},{"id":"0411","lokasi":"KOTA DUMAI"},{"id":"0412","lokasi":"KOTA PEKANBARU"}
   ],
   "KEPULAUAN RIAU":[
      {"id":"0501","lokasi":"KAB. BINTAN"},{"id":"0502","lokasi":"KAB. KARIMUN"},{"id":"0503","lokasi":"KAB. KEPULAUAN ANAMBAS"},{"id":"0504","lokasi":"KAB. LINGGA"},{"id":"0505","lokasi":"KAB. NATUNA"},{"id":"0506","lokasi":"KOTA BATAM"},{"id":"0507","lokasi":"KOTA TANJUNG PINANG"},{"id":"0508","lokasi":"PULAU TAMBELAN KAB. BINTAN"},{"id":"0509","lokasi":"PEKAJANG KAB. LINGGA"},{"id":"0510","lokasi":"PULAU SERASAN KAB. NATUNA"},{"id":"0511","lokasi":"PULAU MIDAI KAB. NATUNA"},{"id":"0512","lokasi":"PULAU LAUT KAB. NATUNA"}
   ],
   "JAMBI":[
      {"id":"0601","lokasi":"KAB. BATANGHARI"},{"id":"0602","lokasi":"KAB. BUNGO"},{"id":"0603","lokasi":"KAB. KERINCI"},{"id":"0604","lokasi":"KAB. MERANGIN"},{"id":"0605","lokasi":"KAB. MUARO JAMBI"},{"id":"0606","lokasi":"KAB. SAROLANGUN"},{"id":"0607","lokasi":"KAB. TANJUNG JABUNG BARAT"},{"id":"0608","lokasi":"KAB. TANJUNG JABUNG TIMUR"},{"id":"0609","lokasi":"KAB. TEBO"},{"id":"0610","lokasi":"KOTA JAMBI"},{"id":"0611","lokasi":"KOTA SUNGAI PENUH"}
   ],
   "BENGKULU":[
      {"id":"0701","lokasi":"KAB. BENGKULU SELATAN"},{"id":"0702","lokasi":"KAB. BENGKULU TENGAH"},{"id":"0703","lokasi":"KAB. BENGKULU UTARA"},{"id":"0704","lokasi":"KAB. KAUR"},{"id":"0705","lokasi":"KAB. KEPAHIANG"},{"id":"0706","lokasi":"KAB. LEBONG"},{"id":"0707","lokasi":"KAB. MUKOMUKO"},{"id":"0708","lokasi":"KAB. REJANG LEBONG"},{"id":"0709","lokasi":"KAB. SELUMA"},{"id":"0710","lokasi":"KOTA BENGKULU"}
   ],
   "SUMATERA SELATAN":[
      {"id":"0801","lokasi":"KAB. BANYUASIN"},{"id":"0802","lokasi":"KAB. EMPAT LAWANG"},{"id":"0803","lokasi":"KAB. LAHAT"},{"id":"0804","lokasi":"KAB. MUARA ENIM"},{"id":"0805","lokasi":"KAB. MUSI BANYUASIN"},{"id":"0806","lokasi":"KAB. MUSI RAWAS"},{"id":"0807","lokasi":"KAB. MUSI RAWAS UTARA"},{"id":"0808","lokasi":"KAB. OGAN ILIR"},{"id":"0809","lokasi":"KAB. OGAN KOMERING ILIR"},{"id":"0810","lokasi":"KAB. OGAN KOMERING ULU"},{"id":"0811","lokasi":"KAB. OGAN KOMERING ULU SELATAN"},{"id":"0812","lokasi":"KAB. OGAN KOMERING ULU TIMUR"},{"id":"0813","lokasi":"KAB. PENUKAL ABAB LEMATANG ILIR"},{"id":"0814","lokasi":"KOTA LUBUKLINGGAU"},{"id":"0815","lokasi":"KOTA PAGAR ALAM"},{"id":"0816","lokasi":"KOTA PALEMBANG"},{"id":"0817","lokasi":"KOTA PRABUMULIH"}
   ],
   "KEPULAUAN BANGKA BELITUNG":[
      {"id":"0901","lokasi":"KAB. BANGKA"},{"id":"0902","lokasi":"KAB. BANGKA BARAT"},{"id":"0903","lokasi":"KAB. BANGKA SELATAN"},{"id":"0904","lokasi":"KAB. BANGKA TENGAH"},{"id":"0905","lokasi":"KAB. BELITUNG"},{"id":"0906","lokasi":"KAB. BELITUNG TIMUR"},{"id":"0907","lokasi":"KOTA PANGKAL PINANG"}
   ],
   "LAMPUNG":[
      {"id":"1001","lokasi":"KAB. LAMPUNG TENGAH"},{"id":"1002","lokasi":"KAB. LAMPUNG UTARA"},{"id":"1003","lokasi":"KAB. LAMPUNG SELATAN"},{"id":"1004","lokasi":"KAB. LAMPUNG BARAT"},{"id":"1005","lokasi":"KAB. LAMPUNG TIMUR"},{"id":"1006","lokasi":"KAB. MESUJI"},{"id":"1007","lokasi":"KAB. PESAWARAN"},{"id":"1008","lokasi":"KAB. PESISIR BARAT"},{"id":"1009","lokasi":"KAB. PRINGSEWU"},{"id":"1010","lokasi":"KAB. TULANG BAWANG"},{"id":"1011","lokasi":"KAB. TULANG BAWANG BARAT"},{"id":"1012","lokasi":"KAB. TANGGAMUS"},{"id":"1013","lokasi":"KAB. WAY KANAN"},{"id":"1014","lokasi":"KOTA BANDAR LAMPUNG"},{"id":"1015","lokasi":"KOTA METRO"}
   ],
   "BANTEN":[
      {"id":"1101","lokasi":"KAB. LEBAK"},{"id":"1102","lokasi":"KAB. PANDEGLANG"},{"id":"1103","lokasi":"KAB. SERANG"},{"id":"1104","lokasi":"KAB. TANGERANG"},{"id":"1105","lokasi":"KOTA CILEGON"},{"id":"1106","lokasi":"KOTA SERANG"},{"id":"1107","lokasi":"KOTA TANGERANG"},{"id":"1108","lokasi":"KOTA TANGERANG SELATAN"}
   ],
   "JAWA BARAT":[
      {"id":"1201","lokasi":"KAB. BANDUNG"},{"id":"1202","lokasi":"KAB. BANDUNG BARAT"},{"id":"1203","lokasi":"KAB. BEKASI"},{"id":"1204","lokasi":"KAB. BOGOR"},{"id":"1205","lokasi":"KAB. CIAMIS"},{"id":"1206","lokasi":"KAB. CIANJUR"},{"id":"1207","lokasi":"KAB. CIREBON"},{"id":"1208","lokasi":"KAB. GARUT"},{"id":"1209","lokasi":"KAB. INDRAMAYU"},{"id":"1210","lokasi":"KAB. KARAWANG"},{"id":"1211","lokasi":"KAB. KUNINGAN"},{"id":"1212","lokasi":"KAB. MAJALENGKA"},{"id":"1213","lokasi":"KAB. PANGANDARAN"},{"id":"1214","lokasi":"KAB. PURWAKARTA"},{"id":"1215","lokasi":"KAB. SUBANG"},{"id":"1216","lokasi":"KAB. SUKABUMI"},{"id":"1217","lokasi":"KAB. SUMEDANG"},{"id":"1218","lokasi":"KAB. TASIKMALAYA"},{"id":"1219","lokasi":"KOTA BANDUNG"},{"id":"1220","lokasi":"KOTA BANJAR"},{"id":"1221","lokasi":"KOTA BEKASI"},{"id":"1222","lokasi":"KOTA BOGOR"},{"id":"1223","lokasi":"KOTA CIMAHI"},{"id":"1224","lokasi":"KOTA CIREBON"},{"id":"1225","lokasi":"KOTA DEPOK"},{"id":"1226","lokasi":"KOTA SUKABUMI"},{"id":"1227","lokasi":"KOTA TASIKMALAYA"}
   ],
   "DKI JAKARTA":[
      {"id":"1301","lokasi":"KOTA JAKARTA"},{"id":"1302","lokasi":"KAB. ADMINISTRASI KEPULAUAN SERIBU"}
   ],
   "JAWA TENGAH":[
      {"id":"1401","lokasi":"KAB. BANJARNEGARA"},{"id":"1402","lokasi":"KAB. BANYUMAS"},{"id":"1403","lokasi":"KAB. BATANG"},{"id":"1404","lokasi":"KAB. BLORA"},{"id":"1405","lokasi":"KAB. BOYOLALI"},{"id":"1406","lokasi":"KAB. BREBES"},{"id":"1407","lokasi":"KAB. CILACAP"},{"id":"1408","lokasi":"KAB. DEMAK"},{"id":"1409","lokasi":"KAB. GROBOGAN"},{"id":"1410","lokasi":"KAB. JEPARA"},{"id":"1411","lokasi":"KAB. KARANGANYAR"},{"id":"1412","lokasi":"KAB. KEBUMEN"},{"id":"1413","lokasi":"KAB. KENDAL"},{"id":"1414","lokasi":"KAB. KLATEN"},{"id":"1415","lokasi":"KAB. KUDUS"},{"id":"1416","lokasi":"KAB. MAGELANG"},{"id":"1417","lokasi":"KAB. PATI"},{"id":"1418","lokasi":"KAB. PEKALONGAN"},{"id":"1419","lokasi":"KAB. PEMALANG"},{"id":"1420","lokasi":"KAB. PURBALINGGA"},{"id":"1421","lokasi":"KAB. PURWOREJO"},{"id":"1422","lokasi":"KAB. REMBANG"},{"id":"1423","lokasi":"KAB. SEMARANG"},{"id":"1424","lokasi":"KAB. SRAGEN"},{"id":"1425","lokasi":"KAB. SUKOHARJO"},{"id":"1426","lokasi":"KAB. TEGAL"},{"id":"1427","lokasi":"KAB. TEMANGGUNG"},{"id":"1428","lokasi":"KAB. WONOGIRI"},{"id":"1429","lokasi":"KAB. WONOSOBO"},{"id":"1430","lokasi":"KOTA MAGELANG"},{"id":"1431","lokasi":"KOTA PEKALONGAN"},{"id":"1432","lokasi":"KOTA SALATIGA"},{"id":"1433","lokasi":"KOTA SEMARANG"},{"id":"1434","lokasi":"KOTA SURAKARTA"},{"id":"1435","lokasi":"KOTA TEGAL"}
   ],
   "D.I. YOGYAKARTA":[
      {"id":"1501","lokasi":"KAB. BANTUL"},{"id":"1502","lokasi":"KAB. GUNUNGKIDUL"},{"id":"1503","lokasi":"KAB. KULON PROGO"},{"id":"1504","lokasi":"KAB. SLEMAN"},{"id":"1505","lokasi":"KOTA YOGYAKARTA"}
   ],
   "JAWA TIMUR":[
      {"id":"1601","lokasi":"KAB. BANGKALAN"},{"id":"1602","lokasi":"KAB. BANYUWANGI"},{"id":"1603","lokasi":"KAB. BLITAR"},{"id":"1604","lokasi":"KAB. BOJONEGORO"},{"id":"1605","lokasi":"KAB. BONDOWOSO"},{"id":"1606","lokasi":"KAB. GRESIK"},{"id":"1607","lokasi":"KAB. JEMBER"},{"id":"1608","lokasi":"KAB. JOMBANG"},{"id":"1609","lokasi":"KAB. KEDIRI"},{"id":"1610","lokasi":"KAB. LAMONGAN"},{"id":"1611","lokasi":"KAB. LUMAJANG"},{"id":"1612","lokasi":"KAB. MADIUN"},{"id":"1613","lokasi":"KAB. MAGETAN"},{"id":"1614","lokasi":"KAB. MALANG"},{"id":"1615","lokasi":"KAB. MOJOKERTO"},{"id":"1616","lokasi":"KAB. NGANJUK"},{"id":"1617","lokasi":"KAB. NGAWI"},{"id":"1618","lokasi":"KAB. PACITAN"},{"id":"1619","lokasi":"KAB. PAMEKASAN"},{"id":"1620","lokasi":"KAB. PASURUAN"},{"id":"1621","lokasi":"KAB. PONOROGO"},{"id":"1622","lokasi":"KAB. PROBOLINGGO"},{"id":"1623","lokasi":"KAB. SAMPANG"},{"id":"1624","lokasi":"KAB. SIDOARJO"},{"id":"1625","lokasi":"KAB. SITUBONDO"},{"id":"1626","lokasi":"KAB. SUMENEP"},{"id":"1627","lokasi":"KAB. TRENGGALEK"},{"id":"1628","lokasi":"KAB. TUBAN"},{"id":"1629","lokasi":"KAB. TULUNGAGUNG"},{"id":"1630","lokasi":"KOTA BATU"},{"id":"1631","lokasi":"KOTA BLITAR"},{"id":"1632","lokasi":"KOTA KEDIRI"},{"id":"1633","lokasi":"KOTA MADIUN"},{"id":"1634","lokasi":"KOTA MALANG"},{"id":"1635","lokasi":"KOTA MOJOKERTO"},{"id":"1636","lokasi":"KOTA PASURUAN"},{"id":"1637","lokasi":"KOTA PROBOLINGGO"},{"id":"1638","lokasi":"KOTA SURABAYA"}
   ],
   "BALI":[
      {"id":"1701","lokasi":"KAB. BADUNG"},{"id":"1702","lokasi":"KAB. BANGLI"},{"id":"1703","lokasi":"KAB. BULELENG"},{"id":"1704","lokasi":"KAB. GIANYAR"},{"id":"1705","lokasi":"KAB. JEMBRANA"},{"id":"1706","lokasi":"KAB. KARANGASEM"},{"id":"1707","lokasi":"KAB. KLUNGKUNG"},{"id":"1708","lokasi":"KAB. TABANAN"},{"id":"1709","lokasi":"KOTA DENPASAR"}
   ],
   "NUSA TENGGARA BARAT":[
      {"id":"1801","lokasi":"KAB. BIMA"},{"id":"1802","lokasi":"KAB. DOMPU"},{"id":"1803","lokasi":"KAB. LOMBOK BARAT"},{"id":"1804","lokasi":"KAB. LOMBOK TENGAH"},{"id":"1805","lokasi":"KAB. LOMBOK TIMUR"},{"id":"1806","lokasi":"KAB. LOMBOK UTARA"},{"id":"1807","lokasi":"KAB. SUMBAWA"},{"id":"1808","lokasi":"KAB. SUMBAWA BARAT"},{"id":"1809","lokasi":"KOTA BIMA"},{"id":"1810","lokasi":"KOTA MATARAM"}
   ],
   "NUSA TENGGARA TIMUR":[
      {"id":"1901","lokasi":"KAB. ALOR"},{"id":"1902","lokasi":"KAB. BELU"},{"id":"1903","lokasi":"KAB. ENDE"},{"id":"1904","lokasi":"KAB. FLORES TIMUR"},{"id":"1905","lokasi":"KAB. KUPANG"},{"id":"1906","lokasi":"KAB. LEMBATA"},{"id":"1907","lokasi":"KAB. MALAKA"},{"id":"1908","lokasi":"KAB. MANGGARAI"},{"id":"1909","lokasi":"KAB. MANGGARAI BARAT"},{"id":"1910","lokasi":"KAB. MANGGARAI TIMUR"},{"id":"1911","lokasi":"KAB. NGADA"},{"id":"1912","lokasi":"KAB. NAGEKEO"},{"id":"1913","lokasi":"KAB. ROTE NDAO"},{"id":"1914","lokasi":"KAB. SABU RAIJUA"},{"id":"1915","lokasi":"KAB. SIKKA"},{"id":"1916","lokasi":"KAB. SUMBA BARAT"},{"id":"1917","lokasi":"KAB. SUMBA BARAT DAYA"},{"id":"1918","lokasi":"KAB. SUMBA TENGAH"},{"id":"1919","lokasi":"KAB. SUMBA TIMUR"},{"id":"1920","lokasi":"KAB. TIMOR TENGAH SELATAN"},{"id":"1921","lokasi":"KAB. TIMOR TENGAH UTARA"},{"id":"1922","lokasi":"KOTA KUPANG"}
   ],
   "KALIMANTAN BARAT":[
      {"id":"2001","lokasi":"KAB. BENGKAYANG"},{"id":"2002","lokasi":"KAB. KAPUAS HULU"},{"id":"2003","lokasi":"KAB. KAYONG UTARA"},{"id":"2004","lokasi":"KAB. KETAPANG"},{"id":"2005","lokasi":"KAB. KUBU RAYA"},{"id":"2006","lokasi":"KAB. LANDAK"},{"id":"2007","lokasi":"KAB. MELAWI"},{"id":"2008","lokasi":"KAB. MEMPAWAH"},{"id":"2009","lokasi":"KAB. SAMBAS"},{"id":"2010","lokasi":"KAB. SANGGAU"},{"id":"2011","lokasi":"KAB. SEKADAU"},{"id":"2012","lokasi":"KAB. SINTANG"},{"id":"2013","lokasi":"KOTA PONTIANAK"},{"id":"2014","lokasi":"KOTA SINGKAWANG"}
   ],
   "KALIMANTAN SELATAN":[
      {"id":"2101","lokasi":"KAB. BALANGAN"},{"id":"2102","lokasi":"KAB. BANJAR"},{"id":"2103","lokasi":"KAB. BARITO KUALA"},{"id":"2104","lokasi":"KAB. HULU SUNGAI SELATAN"},{"id":"2105","lokasi":"KAB. HULU SUNGAI TENGAH"},{"id":"2106","lokasi":"KAB. HULU SUNGAI UTARA"},{"id":"2107","lokasi":"KAB. KOTABARU"},{"id":"2108","lokasi":"KAB. TABALONG"},{"id":"2109","lokasi":"KAB. TANAH BUMBU"},{"id":"2110","lokasi":"KAB. TANAH LAUT"},{"id":"2111","lokasi":"KAB. TAPIN"},{"id":"2112","lokasi":"KOTA BANJARBARU"},{"id":"2113","lokasi":"KOTA BANJARMASIN"}
   ],
   "KALIMANTAN TENGAH":[
      {"id":"2201","lokasi":"KAB. BARITO SELATAN"},{"id":"2202","lokasi":"KAB. BARITO TIMUR"},{"id":"2203","lokasi":"KAB. BARITO UTARA"},{"id":"2204","lokasi":"KAB. GUNUNG MAS"},{"id":"2205","lokasi":"KAB. KAPUAS"},{"id":"2206","lokasi":"KAB. KATINGAN"},{"id":"2207","lokasi":"KAB. KOTAWARINGIN BARAT"},{"id":"2208","lokasi":"KAB. KOTAWARINGIN TIMUR"},{"id":"2209","lokasi":"KAB. LAMANDAU"},{"id":"2210","lokasi":"KAB. MURUNG RAYA"},{"id":"2211","lokasi":"KAB. PULANG PISAU"},{"id":"2212","lokasi":"KAB. SUKAMARA"},{"id":"2213","lokasi":"KAB. SERUYAN"},{"id":"2214","lokasi":"KOTA PALANGKARAYA"}
   ],
   "KALIMANTAN TIMUR":[
      {"id":"2301","lokasi":"KAB. BERAU"},{"id":"2302","lokasi":"KAB. KUTAI BARAT"},{"id":"2303","lokasi":"KAB. KUTAI KARTANEGARA"},{"id":"2304","lokasi":"KAB. KUTAI TIMUR"},{"id":"2305","lokasi":"KAB. MAHAKAM ULU"},{"id":"2306","lokasi":"KAB. PASER"},{"id":"2307","lokasi":"KAB. PENAJAM PASER UTARA"},{"id":"2308","lokasi":"KOTA BALIKPAPAN"},{"id":"2309","lokasi":"KOTA BONTANG"},{"id":"2310","lokasi":"KOTA SAMARINDA"}
   ],
   "KALIMANTAN UTARA":[
      {"id":"2401","lokasi":"KAB. BULUNGAN"},{"id":"2402","lokasi":"KAB. MALINAU"},{"id":"2403","lokasi":"KAB. NUNUKAN"},{"id":"2404","lokasi":"KAB. TANA TIDUNG"},{"id":"2405","lokasi":"KOTA TARAKAN"}
   ],
   "GORONTALO":[
      {"id":"2501","lokasi":"KAB. BOALEMO"},{"id":"2502","lokasi":"KAB. BONE BOLANGO"},{"id":"2503","lokasi":"KAB. GORONTALO"},{"id":"2504","lokasi":"KAB. GORONTALO UTARA"},{"id":"2505","lokasi":"KAB. POHUWATO"},{"id":"2506","lokasi":"KOTA GORONTALO"}
   ],
   "SULAWESI SELATAN":[
      {"id":"2601","lokasi":"KAB. BANTAENG"},{"id":"2602","lokasi":"KAB. BARRU"},{"id":"2603","lokasi":"KAB. BONE"},{"id":"2604","lokasi":"KAB. BULUKUMBA"},{"id":"2605","lokasi":"KAB. ENREKANG"},{"id":"2606","lokasi":"KAB. GOWA"},{"id":"2607","lokasi":"KAB. JENEPONTO"},{"id":"2608","lokasi":"KAB. KEPULAUAN SELAYAR"},{"id":"2609","lokasi":"KAB. LUWU"},{"id":"2610","lokasi":"KAB. LUWU TIMUR"},{"id":"2611","lokasi":"KAB. LUWU UTARA"},{"id":"2612","lokasi":"KAB. MAROS"},{"id":"2613","lokasi":"KAB. PANGKAJENE DAN KEPULAUAN"},{"id":"2614","lokasi":"KAB. PINRANG"},{"id":"2615","lokasi":"KAB. SIDENRENG RAPPANG"},{"id":"2616","lokasi":"KAB. SINJAI"},{"id":"2617","lokasi":"KAB. SOPPENG"},{"id":"2618","lokasi":"KAB. TAKALAR"},{"id":"2619","lokasi":"KAB. TANA TORAJA"},{"id":"2620","lokasi":"KAB. TORAJA UTARA"},{"id":"2621","lokasi":"KAB. WAJO"},{"id":"2622","lokasi":"KOTA MAKASSAR"},{"id":"2623","lokasi":"KOTA PALOPO"},{"id":"2624","lokasi":"KOTA PAREPARE"}
   ],
   "SULAWESI TENGGARA":[
      {"id":"2701","lokasi":"KAB. BOMBANA"},{"id":"2702","lokasi":"KAB. BUTON"},{"id":"2703","lokasi":"KAB. BUTON SELATAN"},{"id":"2704","lokasi":"KAB. BUTON TENGAH"},{"id":"2705","lokasi":"KAB. BUTON UTARA"},{"id":"2706","lokasi":"KAB. KOLAKA"},{"id":"2707","lokasi":"KAB. KOLAKA TIMUR"},{"id":"2708","lokasi":"KAB. KOLAKA UTARA"},{"id":"2709","lokasi":"KAB. KONAWE"},{"id":"2710","lokasi":"KAB. KONAWE KEPULAUAN"},{"id":"2711","lokasi":"KAB. KONAWE SELATAN"},{"id":"2712","lokasi":"KAB. KONAWE UTARA"},{"id":"2713","lokasi":"KAB. MUNA"},{"id":"2714","lokasi":"KAB. MUNA BARAT"},{"id":"2715","lokasi":"KAB. WAKATOBI"},{"id":"2716","lokasi":"KOTA BAU-BAU"},{"id":"2717","lokasi":"KOTA KENDARI"}
   ],
   "SULAWESI TENGAH":[
      {"id":"2801","lokasi":"KAB. BANGGAI"},{"id":"2802","lokasi":"KAB. BANGGAI KEPULAUAN"},{"id":"2803","lokasi":"KAB. BANGGAI LAUT"},{"id":"2804","lokasi":"KAB. BUOL"},{"id":"2805","lokasi":"KAB. DONGGALA"},{"id":"2806","lokasi":"KAB. MOROWALI"},{"id":"2807","lokasi":"KAB. MOROWALI UTARA"},{"id":"2808","lokasi":"KAB. PARIGI MOUTONG"},{"id":"2809","lokasi":"KAB. POSO"},{"id":"2810","lokasi":"KAB. SIGI"},{"id":"2811","lokasi":"KAB. TOJO UNA-UNA"},{"id":"2812","lokasi":"KAB. TOLI-TOLI"},{"id":"2813","lokasi":"KOTA PALU"}
   ],
   "SULAWESI UTARA":[
      {"id":"2901","lokasi":"KAB. BOLAANG MONGONDOW"},{"id":"2902","lokasi":"KAB. BOLAANG MONGONDOW SELATAN"},{"id":"2903","lokasi":"KAB. BOLAANG MONGONDOW TIMUR"},{"id":"2904","lokasi":"KAB. BOLAANG MONGONDOW UTARA"},{"id":"2905","lokasi":"KAB. KEPULAUAN SANGIHE"},{"id":"2906","lokasi":"KAB. KEPULAUAN SIAU TAGULANDANG BIARO"},{"id":"2907","lokasi":"KAB. KEPULAUAN TALAUD"},{"id":"2908","lokasi":"KAB. MINAHASA"},{"id":"2909","lokasi":"KAB. MINAHASA SELATAN"},{"id":"2910","lokasi":"KAB. MINAHASA TENGGARA"},{"id":"2911","lokasi":"KAB. MINAHASA UTARA"},{"id":"2912","lokasi":"KOTA BITUNG"},{"id":"2913","lokasi":"KOTA KOTAMOBAGU"},{"id":"2914","lokasi":"KOTA MANADO"},{"id":"2915","lokasi":"KOTA TOMOHON"}
   ],
   "SULAWESI BARAT":[
      {"id":"3001","lokasi":"KAB. MAJENE"},{"id":"3002","lokasi":"KAB. MAMASA"},{"id":"3003","lokasi":"KAB. MAMUJU"},{"id":"3004","lokasi":"KAB. MAMUJU TENGAH"},{"id":"3005","lokasi":"KAB. MAMUJU UTARA"},{"id":"3006","lokasi":"KAB. POLEWALI MANDAR"}
   ],
   "MALUKU":[
      {"id":"3101","lokasi":"KAB. BURU"},{"id":"3102","lokasi":"KAB. BURU SELATAN"},{"id":"3103","lokasi":"KAB. KEPULAUAN ARU"},{"id":"3104","lokasi":"KAB. MALUKU BARAT DAYA"},{"id":"3105","lokasi":"KAB. MALUKU TENGAH"},{"id":"3106","lokasi":"KAB. MALUKU TENGGARA"},{"id":"3107","lokasi":"KAB. MALUKU TENGGARA BARAT"},{"id":"3108","lokasi":"KAB. SERAM BAGIAN BARAT"},{"id":"3109","lokasi":"KAB. SERAM BAGIAN TIMUR"},{"id":"3110","lokasi":"KOTA AMBON"},{"id":"3111","lokasi":"KOTA TUAL"}
   ],
   "MALUKU UTARA":[
      {"id":"3201","lokasi":"KAB. HALMAHERA BARAT"},{"id":"3202","lokasi":"KAB. HALMAHERA TENGAH"},{"id":"3203","lokasi":"KAB. HALMAHERA UTARA"},{"id":"3204","lokasi":"KAB. HALMAHERA SELATAN"},{"id":"3205","lokasi":"KAB. KEPULAUAN SULA"},{"id":"3206","lokasi":"KAB. HALMAHERA TIMUR"},{"id":"3207","lokasi":"KAB. PULAU MOROTAI"},{"id":"3208","lokasi":"KAB. PULAU TALIABU"},{"id":"3209","lokasi":"KOTA TERNATE"},{"id":"3210","lokasi":"KOTA TIDORE KEPULAUAN"},{"id":"3211","lokasi":"KOTA SOFIFI"}
   ],
   "PAPUA":[
      {"id":"3301","lokasi":"KAB. ASMAT"},{"id":"3302","lokasi":"KAB. BIAK NUMFOR"},{"id":"3303","lokasi":"KAB. BOVEN DIGOEL"},{"id":"3304","lokasi":"KAB. DEIYAI"},{"id":"3305","lokasi":"KAB. DOGIYAI"},{"id":"3306","lokasi":"KAB. INTAN JAYA"},{"id":"3307","lokasi":"KAB. JAYAPURA"},{"id":"3308","lokasi":"KAB. JAYAWIJAYA"},{"id":"3309","lokasi":"KAB. KEEROM"},{"id":"3310","lokasi":"KAB. KEPULAUAN YAPEN"},{"id":"3311","lokasi":"KAB. LANNY JAYA"},{"id":"3312","lokasi":"KAB. MAMBERAMO RAYA"},{"id":"3313","lokasi":"KAB. MAMBERAMO TENGAH"},{"id":"3314","lokasi":"KAB. MAPPI"},{"id":"3315","lokasi":"KAB. MERAUKE"},{"id":"3316","lokasi":"KAB. MIMIKA"},{"id":"3317","lokasi":"KAB. NABIRE"},{"id":"3318","lokasi":"KAB. NDUGA"},{"id":"3319","lokasi":"KAB. PANIAI"},{"id":"3320","lokasi":"KAB. PEGUNUNGAN BINTANG"},{"id":"3321","lokasi":"KAB. PUNCAK"},{"id":"3322","lokasi":"KAB. PUNCAK JAYA"},{"id":"3323","lokasi":"KAB. SARMI"},{"id":"3324","lokasi":"KAB. SUPIORI"},{"id":"3325","lokasi":"KAB. TOLIKARA"},{"id":"3326","lokasi":"KAB. WAROPEN"},{"id":"3327","lokasi":"KAB. YAHUKIMO"},{"id":"3328","lokasi":"KAB. YALIMO"},{"id":"3329","lokasi":"KOTA JAYAPURA"},{"id":"3330","lokasi":"KAB. YAPEN WAROPEN"}
   ],
   "PAPUA BARAT":[
      {"id":"3401","lokasi":"KAB. FAKFAK"},{"id":"3402","lokasi":"KAB. KAIMANA"},{"id":"3403","lokasi":"KAB. MANOKWARI"},{"id":"3404","lokasi":"KAB. MANOKWARI SELATAN"},{"id":"3405","lokasi":"KAB. MAYBRAT"},{"id":"3406","lokasi":"KAB. PEGUNUNGAN ARFAK"},{"id":"3407","lokasi":"KAB. RAJA AMPAT"},{"id":"3408","lokasi":"KAB. SORONG"},{"id":"3409","lokasi":"KAB. SORONG SELATAN"},{"id":"3410","lokasi":"KAB. TAMBRAUW"},{"id":"3411","lokasi":"KAB. TELUK BINTUNI"},{"id":"3412","lokasi":"KAB. TELUK WONDAMA"},{"id":"3413","lokasi":"KOTA SORONG"}
   ]
};

// inisiasi bot, biarkan yang ini gak usah diubah
var tg = new telegram.daftar(token);
var user = new telegram.user();

let database = {
  jadwal: {
    "tanggal": "",
    "imsak": "",
    "subuh": "",
    "terbit": "",
    "dhuha": "",
    "dzuhur": "",
    "ashar": "",
    "maghrib": "",
    "isya": "",
    "date": ""
  },
  adzan: {
    "Imsak": true,
    "Subuh": true,
    "Terbit": false,
    "Dhuha": true,
    "Dzuhur": true,
    "Ashar": true,
    "Maghrib": true,
    "Isya": true
  },
  lokasi: {
    "id": "1301",
    "kabko": "KOTA JAKARTA",
    "prov": "DKI JAKARTA"
  },
  zona: {
    "GMT+7": true,
    "GMT+8": false,
    "GTM+9": false
  },
  pengingat: {
    "5 menit": false,
    "10 menit": false
  },
};

// format pesan, silakan dihapus atau disesuaikan dengan kebutuhan
// template tersedia {lokasi} {daerah} {hariTanggal} {waktu} {jadwal} {jadwalSemua}
// menggunakan format HTML untuk tebal, miring, garis bawah, dan monospace
// detail format silakan baca: https://bit.ly/gas2_format_text
// diapit dengan petik 1 kebalik

let templatePesan = `🕌 Pukul <code>{waktu}</code>, waktunya <b>{jadwal}</b> untuk {lokasi}, {daerah} dan sekitarnya.

📑 Jadwal Imsyakiyah hari ini <b>{hariTanggal}</b> :

<code>{jadwalSemua}</code>

🔖 <u>Sumber</u>: Kemenag RI`;


// quote random 
// silakan diisi sendiri, jika diperlukan.
let dataQuote = [
  'Kunci bahagia ada 3: sabar, syukur dan ikhlas.\n<b>Sabar</b> jika sedang susah, ber- <b>syukur</b> jika bahagia. Dan <b>ikhlas</b> di semua keadaan.',
  'Jangan lupa tersenyum, untuk cinta dan persahabatan. Karena itu sedekah yang paling mudah ^^',
  'Tak ada yang abadi, kecuali Dia yang sempurna.',
  'Perbanyak mengingat kematian, karena itu kepastian dan pengingat kita akan kembali.'
];
let quoteRandom = tg.util.random(dataQuote);

// template custom
// untuk membuat pengingat yang beda pada jadwal waktu tertentu
// jika tidak ingin di custom, kasih aja false yang berarti pakai templatePesan di atas
// berikut ini contoh-contohnya:
let customPesan = {
  imsak: '⚠️ Pukul <code>{waktu}</code>, waktunya <b>{jadwal}</b> untuk {lokasi} dan sekitarnya.. Shubuh 10 menit lagi! <i>Siap-siap yak.</i>',
  subuh: false,
  terbit: false,
  dhuha: "🌥 Sudah masuk waktu {jadwal}. Sunnah tunaikan sholat {jadwal} yaa.",
  dzuhur: false,
  ashar: templatePesan + "\n\n" + quoteRandom,
  maghrib: templatePesan + "\n\n 🌒 Waktunya tadarus dan setor hapalan.",
  isya: '🕌 Pukul <code>{waktu}</code> WIB, waktunya <b>{jadwal}</b> untuk {lokasi}, {daerah} dan sekitarnya.'
};

// --- //-// --- // 
// --- UNTUK PEMULA: cukup diatas itu saja yang diubah ---
// --- //-// --- // 


// base URL
let base_url_api = 'https://api.myquran.com/v1';
let fetchAPI = new tg.fetch(base_url_api);

function deleteMe(chat_id) {
  user.delete(chat_id);
}

function getAPISholat(idLokasi, zonaTime) {
  try {
    let waktu = Utilities.formatDate(new Date(), zonaTime, "yyyy-MM-dd");
    let pecah = waktu.split('-');
    let tahun = pecah[0];
    let bulan = pecah[1];
    let hari = pecah[2];

    // dapatkan jadwal langsung 1 hari
    var hasil = fetchAPI.get('/sholat/jadwal/' + idLokasi + '/' + tahun + '/' + bulan + '/' + hari);
    if (!hasil.status) return hasil;
    return hasil;
  } catch (e) {
    var hasil = { status: false, message: e.message }
  }
  return hasil;
}

function getDBholat(jdb, zonaTime) {
  if (!jdb) return { status: false, message: 'Tidak ada data.' };

  let date = Utilities.formatDate(new Date(), zonaTime, "yyyy-MM-dd");
  if (!jdb.jadwal.date) return { status: false, message: 'Tidak ada field jadwal date' };
  if (jdb.jadwal.date != date) return { status: false, message: 'Tidak terdapat data date ' + date };

  return jdb;
}

function getZona(jdb) {
  let ret;
  if (jdb.zona) {
    for (var i in jdb.zona) {
      if (jdb.zona[i]) {
        ret = i;
      }
    }
  }
  return ret;
}

function getIdLokasi(jdb) {
  let ret;
  if (jdb.lokasi) {
    ret = jdb.lokasi.id;
  }
  return ret;
}

function tampilkanJadwal(chat_id) {
  try {
    let jdb = getValues(chat_id);
    if (!jdb) {
      user.setValue(chat_id.toString(), JSON.stringify(database));
      jdb = getValues(chat_id);
    }
    let zonaTime = getZona(jdb);
    if (!zonaTime) {

    }

    if (!jdb.jadwal || jdb.jadwal.date == "") {
      let idLokasi = getIdLokasi(jdb);
      if (!idLokasi) {

      }
      let ret = getAPISholat(idLokasi, zonaTime);
      if (!ret.status) {

      }
      delete ret.data.koordinat;
      jdb.jadwal = ret.data.jadwal
      user.setValue(chat_id.toString(), JSON.stringify(jdb));
      //Logger.log(ret);
      return tg.sendMessage(adminBot, `⏳ Proses mendapatkan data API Sholat.\n🔖 Hasil: ${ret.status ? '✅ sukses.' : '📛 ' + ret.message}`);
    }

    let infoSholat = getDBholat(jdb, zonaTime);

    let date = new Date();
    let waktuSekarang = Utilities.formatDate(date, zonaTime, "HH:mm");
    let tanggalSekarang = Utilities.formatDate(date, zonaTime, "dd");

    // variable pengganti template
    let jadwal = '';
    let lokasi = infoSholat.lokasi.kabko;
    let daerah = infoSholat.lokasi.prov;
    let hariTanggal = infoSholat.jadwal.tanggal;
    let waktu = waktuSekarang;
    let jadwalSemua = '';
    let pesan = templatePesan;

    for (let i in infoSholat.jadwal) {
      let jam = infoSholat.jadwal[i];
      if (jam.includes(':')) {
        if (jam == waktuSekarang) {
          //jadwal = i.jadwalSemua += `\n -> ${i.padStart(7, ' ')}: ${data}`;
          jadwal = i.charAt(0).toUpperCase() + i.slice(1);
          if (customPesan[i]) pesan = customPesan[i];
        } else {
          jadwalSemua += `\n ${i.padStart(10, ' ')}: ${jam}`;
        }
      }
    }

    jadwalSemua = jadwalSemua.replace('\n', '');

    //Logger.log(`${lokasi}, ${daerah} - ${waktu}\n${jadwal}`)

    pesan = pesan
      .replace(/{lokasi}/gi, lokasi)
      .replace(/{daerah}/gi, daerah)
      .replace(/{waktu}/gi, waktu)
      .replace(/{hariTanggal}/gi, hariTanggal)
      .replace(/{jadwal}/gi, jadwal)
      .replace(/{jadwalSemua}/gi, jadwalSemua);

    //Logger.log(pesan);

    if (jadwal != "") {
      tg.sendMessage(chat_id, pesan, 'HTML')
    }
  } catch (e) {
    tg.sendMessage(adminBot, e.message)
  }
}

function cronJob() {
  let list = user.getKeys();
  for (let i of list) {
    tampilkanJadwal(i);
  }
}

function getValues(chat_id) {
  var db = user.getValue(chat_id.toString());
  if (db == null) {
    return db;
  } else {
    return JSON.parse(db);
  }
}

function getLastKey(obj) {
  var last;
  for (var i in obj) {
    last = i;
  }
  return last;
}

//berfungsi untuk menangkap request http/s GET
function doGet(e) {

  //membuat output HTML yang akan ditampilkan ke klien
  return HtmlService.createHtmlOutput("<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Belajar Telegram Bot</title></head><body><center>Assalamualaikum wr wb, Apakabar?</center></body></html>");

}

//berfungsi untuk menangkap request http/s POST
function doPost(e) {

  try {
    //jika type post data adalah 'application/json'
    if (e.postData.type == "application/json") {

      //parse isi konten data post ke JSON array
      var updates = JSON.parse(e.postData.contents);

      //jika update ada key message
      if (updates.message) {

        //simpan variable msg dari update.message untuk dipakai lagi dibawahnya agar tidak mengambilnya dari array update
        var msg = updates.message;
        var text = msg.text;
        var chat_id = msg.chat.id;
        var user_id = msg.from.id;
        var message_id = msg.message_id;

        if (text == "/start") {
          var pesan = "";
          var db = user.getValue(chat_id.toString());
          if (db == null) {
            user.setValue(chat_id.toString(), JSON.stringify(database));
            db = user.getValue(chat_id.toString());
          }
          if (db != null) {
            var jdb = JSON.parse(db);
            pesan += "\n\n🌇 <b>Kota/Kabupaten</b>\n";
            if (jdb.lokasi) {
              pesan += " └ 📌 " + jdb.lokasi.kabko;
            } else {
              pesan += " └ Data Kosong!";
            }
            pesan += "\n\n⌚ <b>Zona waktu</b>\n";
            if (jdb.zona) {
              var akhir = getLastKey(jdb.zona);
              for (var i in jdb.zona) {
                if (jdb.zona[i]) {
                  if (i == akhir) {
                    pesan += " └ ✅ " + i;
                  } else {
                    pesan += " ├ ✅ " + i + "\n";
                  }
                } else {
                  if (i == akhir) {
                    pesan += " └ ❎ " + i;
                  } else {
                    pesan += " ├ ❎ " + i + "\n";
                  }
                }
              }
            } else {
              pesan += " └ Data Kosong!";
            }
            pesan += "\n\n🔊 <b>Waktu adzan</b>\n";
            if (jdb.adzan) {
              var akhir = getLastKey(jdb.adzan);
              for (var i in jdb.adzan) {
                if (jdb.adzan[i]) {
                  if (i == akhir) {
                    pesan += " └ ✅ " + i;
                  } else {
                    pesan += " ├ ✅ " + i + "\n";
                  }
                } else {
                  if (i == akhir) {
                    pesan += " └ ❎ " + i;
                  } else {
                    pesan += " ├ ❎ " + i + "\n";
                  }
                }
              }
            } else {
              pesan += " └ Data Kosong!";
            }
            pesan += "\n\n⏰ <b>Pengingat sebelum adzan</b>\n";
            if (jdb.pengingat) {
              var akhir = getLastKey(jdb.pengingat);
              for (var i in jdb.pengingat) {
                if (jdb.pengingat[i]) {
                  if (i == akhir) {
                    pesan += " └ ✅ " + i;
                  } else {
                    pesan += " ├ ✅ " + i + "\n";
                  }
                } else {
                  if (i == akhir) {
                    pesan += " └ ❎ " + i;
                  } else {
                    pesan += " ├ ❎ " + i + "\n";
                  }
                }
              }
            } else {
              pesan += " └ Data Kosong!";
            }
          }
          var keyboard = {
            "inline_keyboard": [
              [{text:"⚙ Setting", callback_data:"setting"}],
              [{text:"🚪 Tutup", callback_data:"tutup"}]
            ]
          }
          tg.sendMessage(chat_id, pesan, 'HTML', true, false, message_id, keyboard);
        }
      } else if (updates.callback_query) {
        var query = updates.callback_query;
        var message_id = query.message.message_id;
        var chat_id = query.message.chat.id;
        var data = query.data;

        if (data == "utama") {
          var pesan = "";
          var db = user.getValue(chat_id.toString());
          if (db == null) {
            user.setValue(chat_id.toString(), JSON.stringify(database));
            db = user.getValue(chat_id.toString());
          }
          if (db != null) {
            var jdb = JSON.parse(db);
            pesan += "\n\n🌇 <b>Kota/Kabupaten</b>\n";
            if (jdb.lokasi) {
              pesan += " └ 📌 " + jdb.lokasi.kabko;
            } else {
              pesan += " └ Data Kosong!";
            }
            pesan += "\n\n⌚ <b>Zona waktu</b>\n";
            if (jdb.zona) {
              var akhir = getLastKey(jdb.zona);
              for (var i in jdb.zona) {
                if (jdb.zona[i]) {
                  if (i == akhir) {
                    pesan += " └ ✅ " + i;
                  } else {
                    pesan += " ├ ✅ " + i + "\n";
                  }
                } else {
                  if (i == akhir) {
                    pesan += " └ ❎ " + i;
                  } else {
                    pesan += " ├ ❎ " + i + "\n";
                  }
                }
              }
            } else {
              pesan += " └ Data Kosong!";
            }
            pesan += "\n\n🔊 <b>Waktu adzan</b>\n";
            if (jdb.adzan) {
              var akhir = getLastKey(jdb.adzan);
              for (var i in jdb.adzan) {
                if (jdb.adzan[i]) {
                  if (i == akhir) {
                    pesan += " └ ✅ " + i;
                  } else {
                    pesan += " ├ ✅ " + i + "\n";
                  }
                } else {
                  if (i == akhir) {
                    pesan += " └ ❎ " + i;
                  } else {
                    pesan += " ├ ❎ " + i + "\n";
                  }
                }
              }
            } else {
              pesan += " └ Data Kosong!";
            }
            pesan += "\n\n⏰ <b>Pengingat sebelum adzan</b>\n";
            if (jdb.pengingat) {
              var akhir = getLastKey(jdb.pengingat);
              for (var i in jdb.pengingat) {
                if (jdb.pengingat[i]) {
                  if (i == akhir) {
                    pesan += " └ ✅ " + i;
                  } else {
                    pesan += " ├ ✅ " + i + "\n";
                  }
                } else {
                  if (i == akhir) {
                    pesan += " └ ❎ " + i;
                  } else {
                    pesan += " ├ ❎ " + i + "\n";
                  }
                }
              }
            } else {
              pesan += " └ Data Kosong!";
            }
          }
          var keyboard = {
            "inline_keyboard": [
              [{text:"⚙ Setting", callback_data:"setting"}],
              [{text:"🚪 Tutup", callback_data:"tutup"}]
            ]
          }
          tg.editMessageText(chat_id, message_id, null, pesan, 'HTML', true, keyboard);
        } else if (data == "setting") {
          var keyboard = {
            "inline_keyboard": [
              [{text:"🌇 Lokasi", callback_data:"lokasi"},{text:"⌚ Zona Waktu", callback_data:"zona"}],
              [{text:"🔊 Adzan", callback_data:"adzan"},{text:"⏰ Pengingat", callback_data:"pengingat"}],
              [{text:"🏠 Utama", callback_data:"utama"}],
              [{text:"🚪 Tutup", callback_data:"tutup"}]
            ]
          }
          tg.editMessageText(chat_id, message_id, null, "<b>Menu Setting</b>", 'HTML', true, keyboard);
        } else if (data == "tutup") {
          tg.deleteMessage(chat_id, message_id);
        } else if (data == "lokasi") {
          var pesan = "Silakan pilih <b>Provinsi</b>";
          var keyboards = [];
          for (var x in dataLokasi) {
            keyboards.push([{text:x, callback_data:"prov_" + x}]);
          }
          keyboards.push([{text:"🚶 Kembali", callback_data:"setting"}]);
          keyboards.push([{text:"🏠 Utama", callback_data:"utama"}]);
          keyboards.push([{text:"🚪 Tutup", callback_data:"tutup"}]);
          var keyboard = {
            "inline_keyboard": keyboards
          }
          tg.editMessageText(chat_id, message_id, null, pesan, 'HTML', true, keyboard);
        } else if (data.includes("prov_")) {
          var datas = data.split("_");
          var pesan = "Silakan pilih <b>Kabupaten/Kota</b>";
          var keyboards = [];
          for (var x of dataLokasi[datas[1]]) {
            keyboards.push([{text:x.lokasi, callback_data:"kabko_" + datas[1] + "_" + x.lokasi}]);
          }
          keyboards.push([{text:"🚶 Kembali", callback_data:"lokasi"}]);
          keyboards.push([{text:"🏠 Utama", callback_data:"utama"}]);
          keyboards.push([{text:"🚪 Tutup", callback_data:"tutup"}]);
          var keyboard = {
            "inline_keyboard": keyboards
          }
          tg.editMessageText(chat_id, message_id, null, pesan, 'HTML', true, keyboard);
        } else if (data.includes("kabko_")) {
          var jdb = getValues(chat_id);
          if (jdb == null) {
            //
          }
          var datas = data.split("_");
          var pesan = "Kabupaten/Kota <b>" + datas[2] + "</b>";
          var keyboards = [];
          for (var x of dataLokasi[datas[1]]) {
            if (datas[2] == x.lokasi) {
              var lokasi = {};
              lokasi.id = x.id;
              lokasi.kabko = x.lokasi;
              lokasi.prov = datas[1];
              jdb.lokasi = lokasi;
              keyboards.push([{text:x.lokasi + " ✅", callback_data:"kabko_" + datas[1] + "_" + x.lokasi}]);
            } else {
              keyboards.push([{text:x.lokasi, callback_data:"kabko_" + datas[1] + "_" + x.lokasi}]);
            }
          }
          user.setValue(chat_id, JSON.stringify(jdb));
          keyboards.push([{text:"🚶 Kembali", callback_data:"lokasi"}]);
          keyboards.push([{text:"🏠 Utama", callback_data:"utama"}]);
          keyboards.push([{text:"🚪 Tutup", callback_data:"tutup"}]);
          var keyboard = {
            "inline_keyboard": keyboards
          }
          tg.editMessageText(chat_id, message_id, null, pesan, 'HTML', true, keyboard);
        } else if (data.includes("zona")) {
          if (data == "zona") {
            var jdb = getValues(chat_id);
            if (jdb == null) {
              //
            }
            var keyboards = [];
            var zona = [];
            for (var i in jdb.zona) {
              if (jdb.zona[i]) {
                zona.push({text:i + " ✅", callback_data:"zona_" + i});
              } else {
                zona.push({text:i + " ❎", callback_data:"zona_" + i});
              }
            }
            keyboards.push(zona);
            keyboards.push([{text:"🚶 Kembali", callback_data:"setting"}]);
            keyboards.push([{text:"🏠 Utama", callback_data:"utama"}]);
            keyboards.push([{text:"🚪 Tutup", callback_data:"tutup"}]);
            var keyboard = {
              "inline_keyboard": keyboards
            }
            tg.editMessageText(chat_id, message_id, null, "<b>Zona Waktu</b>", 'HTML', true, keyboard);
          } else {
            if (data.includes("_")) {
              var zonas = data.split("_")[1];
              var jdb = getValues(chat_id);
              for (var i in jdb.zona) {
                if (i == zonas) {
                  jdb.zona[i] = true;
                } else {
                  jdb.zona[i] = false;
                }
              }
              user.setValue(chat_id, JSON.stringify(jdb));
              jdb = getValues(chat_id);
              var keyboards = [];
              var zona = [];
              for (var i in jdb.zona) {
                if (jdb.zona[i]) {
                  zona.push({text:i + " ✅", callback_data:"zona_" + i});
                } else {
                  zona.push({text:i + " ❎", callback_data:"zona_" + i});
                }
              }
              keyboards.push(zona);
              keyboards.push([{text:"🚶 Kembali", callback_data:"setting"}]);
              keyboards.push([{text:"🏠 Utama", callback_data:"utama"}]);
              keyboards.push([{text:"🚪 Tutup", callback_data:"tutup"}]);
              var keyboard = {
                "inline_keyboard": keyboards
              }
              tg.editMessageText(chat_id, message_id, null, "<b>Zona Waktu</b>", 'HTML', true, keyboard);
            }
          }
        } else if (data.includes("adzan")) {
          if (data == "adzan") {
            var jdb = getValues(chat_id);
            var keyboards = [];
            var empat_keyboard = [];
            for (var i in jdb.adzan) {
              if (jdb.adzan[i]) {
                empat_keyboard.push({text:"✅ " + i, callback_data:"adzan_" + i});
              } else {
                empat_keyboard.push({text:"❎ " + i, callback_data:"adzan_" + i});
              }
              if (empat_keyboard.length == 4) {
                keyboards.push(empat_keyboard);
                empat_keyboard = [];
              }
            }
            if (empat_keyboard.length < 4) {
              keyboards.push(empat_keyboard);
              empat_keyboard = [];
            }
            keyboards.push([{text:"🚶 Kembali", callback_data:"setting"}]);
            keyboards.push([{text:"🏠 Utama", callback_data:"utama"}]);
            keyboards.push([{text:"🚪 Tutup", callback_data:"tutup"}]);
            var keyboard = {
              "inline_keyboard": keyboards
            }
            tg.editMessageText(chat_id, message_id, null, "<b>Waktu Adzan</b>", 'HTML', true, keyboard);
          } else {
            if (data.includes("_")) {
              var cdata = data.split("_")[1];
              var jdb = getValues(chat_id);
              var keyboards = [];
              var empat_keyboard = [];
              for (var i in jdb.adzan) {
                if (i == cdata) {
                  jdb.adzan[i] = !jdb.adzan[i];
                }
              }
              user.setValue(chat_id, JSON.stringify(jdb));
              jdb = getValues(chat_id);
              var keyboards = [];
              var empat_keyboard = [];
              for (var i in jdb.adzan) {
                if (jdb.adzan[i]) {
                  empat_keyboard.push({text:"✅ " + i, callback_data:"adzan_" + i});
                } else {
                  empat_keyboard.push({text:"❎ " + i, callback_data:"adzan_" + i});
                }
                if (empat_keyboard.length == 4) {
                  keyboards.push(empat_keyboard);
                  empat_keyboard = [];
                }
              }
              if (empat_keyboard.length < 4) {
                keyboards.push(empat_keyboard);
                empat_keyboard = [];
              }
              keyboards.push([{text:"🚶 Kembali", callback_data:"setting"}]);
              keyboards.push([{text:"🏠 Utama", callback_data:"utama"}]);
              keyboards.push([{text:"🚪 Tutup", callback_data:"tutup"}]);
              var keyboard = {
                "inline_keyboard": keyboards
              }
              tg.editMessageText(chat_id, message_id, null, "<b>Waktu Adzan</b>", 'HTML', true, keyboard);
            }
          }
        } else if (data.includes("pengingat")) {
          if (data == "pengingat") {
            var jdb = getValues(chat_id);
            if (jdb == null) {
              //
            }
            var keyboards = [];
            var pengingat = [];
            for (var i in jdb.pengingat) {
              if (jdb.pengingat[i]) {
                pengingat.push({text:"-" + i + " ✅", callback_data:"pengingat_" + i});
              } else {
                pengingat.push({text:"-" + i + " ❎", callback_data:"pengingat_" + i});
              }
            }
            keyboards.push(pengingat);
            keyboards.push([{text:"🚶 Kembali", callback_data:"setting"}]);
            keyboards.push([{text:"🏠 Utama", callback_data:"utama"}]);
            keyboards.push([{text:"🚪 Tutup", callback_data:"tutup"}]);
            var keyboard = {
              "inline_keyboard": keyboards
            }
            tg.editMessageText(chat_id, message_id, null, "<b>Pengingat sebelum adzan</b>", 'HTML', true, keyboard);
          } else {
            if (data.includes("_")) {
              var pengingats = data.split("_")[1];
              var jdb = getValues(chat_id);
              for (var i in jdb.pengingat) {
                if (i == pengingats) {
                  jdb.pengingat[i] = true;
                } else {
                  jdb.pengingat[i] = false;
                }
              }
              user.setValue(chat_id, JSON.stringify(jdb));
              jdb = getValues(chat_id);
              var keyboards = [];
              var pengingat = [];
              for (var i in jdb.pengingat) {
                if (jdb.pengingat[i]) {
                  pengingat.push({text:"-" + i + " ✅", callback_data:"pengingat_" + i});
                } else {
                  pengingat.push({text:"-" + i + " ❎", callback_data:"pengingat_" + i});
                }
              }
              keyboards.push(pengingat);
              keyboards.push([{text:"🚶 Kembali", callback_data:"setting"}]);
              keyboards.push([{text:"🏠 Utama", callback_data:"utama"}]);
              keyboards.push([{text:"🚪 Tutup", callback_data:"tutup"}]);
              var keyboard = {
                "inline_keyboard": keyboards
              }
              tg.editMessageText(chat_id, message_id, null, "<b>Pengingat sebelum adzan</b>", 'HTML', true, keyboard);
            }
          }
        } else {

        }
      }
    }
  } catch (e) {
    tg.sendMessage("445372887", JSON.stringify(e.message));
  }
}

function setWebHookDeploy() {
  var url_deploy = "https://script.google.com/macros/s/AKfycbxh87kRuwJ8iPpo4c9QZtgjwvIEZ5YwTTEIS139NDyzXz6SyoYeKfWukpHNql6JtSzZ/exec";
  var result = tg.request('setWebhook', tg.buildQuery({
    'url': url_deploy
  }));
  Logger.log(result);
}
