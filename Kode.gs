// REMINDER JADWAL SHOLAT
// Berdasarkan API myQuran.com
// API: http://bit.ly/api-v1-myquran
// Library: https://bit.ly/telegram-lib-v2

// --- SESUAIKAN ISI VARIABLE DIBAWAH INI ---

// seting telegram

// masukkan token bot yang di dapat dari botfather
var token= '5277732011:AAEpmLeeLx557iD-8XQ-zDBqYnAZdjGkpBM'

// masukkan ID User/Tujuan Bot akan membroadcast jadwal sholat
// ID User/Grup/Channel
// var tujuanID = [-1001234685537 ]


//sampe sini aja, bawah untuk test

// ctx.reply(helper.typeCheck(tujuanID))
// console.log(JSON.stringify(tujuanID))


// masukkan ID user kamu, untuk mendapatkan notif jika bot terjadi error
let adminBot = 2001607551;

// inisiasi bot, biarkan yang ini gak usah diubah
var tg = new telegram.daftar(token);
var user = new telegram.user();

var tujuanID = user.getValue('daftar')
tujuanID = JSON.parse(tujuanID)


// sesuaikan zona waktu kalian masing-masing ya.
// sesuaikan zona waktu kalian masing-masing ya.
let zonaTime = 'GMT+7'
                
// atur berapa menit pesan reminder akan dihapus
var menitHapus = 25

// ini tidak usah diubah, dicopas/diketik saja
var jadwalHapus = user.getValue('jadwalHapus');
jadwalHapus = jadwalHapus ? JSON.parse(jadwalHapus) : false;

// aktifkan jika ingin mencobanya
// jangan lupa di set false, sesudah selesai mencoba
// (jika tak mengerti, biarkan saja false)
let waktuTest = false

// Ganti lokasi ini dengan lokasi kota / kabupaten yang akan dicari
let lokasi = 'Jakarta'

// sesuikan ID lokasi (kota/kabupaten)
// untuk mendapatkannya, jalankan dulu fungsi cariIDLokasi() 
// Contoh berikut ini adalah untuk kabupaten Kediri
let idLokasi = 1301;

// aktifkan notif reminder untuk waktu-waktu berikut ini
// jika aktif = true, dinonaktifkan = false
let aktif = {
  imsak: true,
  subuh: true,
  terbit: true,
  huha: true,
dzuhur: true,
ashar: true,
  maghrib: true,
  isya: true
}

// format pesan, silakan dihapus atau disesuaikan dengan kebutuhan
// template tersedia {lokasi} {daerah} {hariTanggal} {waktu} {jadwal} {jadwalSemua}
// menggunakan format HTML untuk tebal, miring, garis bawah, dan monospace
// detail format silakan baca: https://bit.ly/gas2_format_text
// diapit dengan petik 1 kebalik

let templatePesan = `👋<u>Sudah Waktunya Sholat</u> <b>{jadwal}</b>
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
🕌 : <u>Sekarang Adzan</u> {jadwal} - {waktu}

🏠 : <u>{lokasi}</u>

🌇 : <u>Info Adzan hari ini</u>
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
🗓️ : <b>{hariTanggal}</b> :
<code>{jadwalSemua}</code>

✅<u>Sumber</u>: @Muadzan_Bot`
                


// quote random 
// silakan diisi sendiri, jika diperlukan.
let dataQuote = [
  '✨𝘑𝘢𝘯𝘨𝘢𝘯 𝘣𝘦𝘳𝘩𝘢𝘳𝘢𝘱 𝘭𝘦𝘣𝘪𝘩 𝘬𝘦𝘱𝘢𝘥𝘢 𝘮𝘢𝘯𝘶𝘴𝘪𝘢 𝘚𝘦𝘵𝘪𝘢𝘱 𝘮𝘢𝘯𝘶𝘴𝘪𝘢 𝘵𝘢𝘬 𝘱𝘦𝘳𝘯𝘢𝘩 𝘭𝘶𝘱𝘶𝘵 𝘥𝘢𝘳𝘪 𝘥𝘰𝘴𝘢. 𝘕𝘢𝘮𝘶𝘯, 𝘛𝘶𝘩𝘢𝘯 𝘺𝘢𝘯𝘨 𝘔𝘢𝘩𝘢 𝘒𝘢𝘴𝘪𝘩 𝘴𝘦𝘭𝘢𝘭𝘶 𝘮𝘦𝘮𝘣𝘦𝘳𝘪𝘬𝘢𝘯 𝘬𝘦𝘴𝘦𝘮𝘱𝘢𝘵𝘢𝘯 𝘣𝘢𝘨𝘪 𝘩𝘢𝘮𝘣𝘢-𝘕𝘺𝘢 𝘺𝘢𝘯𝘨 𝘪𝘯𝘨𝘪𝘯 𝘣𝘦𝘳𝘵𝘢𝘶𝘣𝘢𝘵.💫',
  '💫𝘉𝘢𝘨𝘪𝘬𝘶, 𝘵𝘪𝘥𝘶𝘳 𝘣𝘶𝘬𝘢𝘯𝘭𝘢𝘩 𝘴𝘦𝘬𝘢𝘥𝘢𝘳 𝘮𝘦𝘭𝘦𝘱𝘢𝘴 𝘭𝘦𝘭𝘢𝘩, 𝘮𝘦𝘭𝘢𝘪𝘯𝘬𝘢𝘯 𝘴𝘦𝘣𝘶𝘢𝘩 𝘱𝘦𝘭𝘢𝘳𝘪𝘢𝘯.🥰',
  '😀𝘏𝘢𝘭-𝘩𝘢𝘭 𝘺𝘢𝘯𝘨 𝘮𝘦𝘯𝘺𝘦𝘥𝘪𝘩𝘬𝘢𝘯 𝘵𝘦𝘳𝘫𝘢𝘥𝘪. 𝘛𝘢𝘱𝘪, 𝘬𝘪𝘵𝘢 𝘵𝘪𝘥𝘢𝘬 𝘱𝘦𝘳𝘭𝘶 𝘩𝘪𝘥𝘶𝘱 𝘴𝘦𝘥𝘪𝘩 𝘴𝘦𝘭𝘢𝘮𝘢𝘯𝘺𝘢.',
  '🙁𝘏𝘢𝘳𝘢𝘱𝘢𝘯 𝘢𝘥𝘢𝘭𝘢𝘩 𝘢𝘬𝘢𝘳 𝘥𝘢𝘳𝘪 𝘴𝘦𝘮𝘶𝘢 𝘴𝘢𝘬𝘪𝘵 𝘩𝘢𝘵𝘪.'
]
let quoteRandom = tg.util.random(dataQuote)

// template custom
// untuk membuat pengingat yang beda pada jadwal waktu tertentu
// jika tidak ingin di custom, kasih aja false yang berarti pakai templatePesan di atas
// berikut ini contoh-contohnya:
let customPesan = {
  imsak: '⚠️ Pukul <code>{waktu}</code> WIB, waktunya <b>{jadwal}</b> untuk {lokasi} dan sekitarnya.. Shubuh 10 menit lagi! <i>Siap-siap yak.</i>',
  subuh: templatePesan,
  terbit: templatePesan,
  dhuha: templatePesan,
  dzuhur: templatePesan,
  ashar: templatePesan + "\n\n" + quoteRandom,
  maghrib: templatePesan + "\n\n 🌒 Waktunya tadarus dan setor hapalan.",
  isya: templatePesan
}

// --- //-// --- // 
// --- UNTUK PEMULA: cukup diatas itu saja yang diubah ---
// --- //-// --- // 

function tambahJadwalPenghapusan(chat_id, message_id) {
  let date = new Date();
  date.setMinutes(date.getMinutes() + menitHapus)

  let waktu = Utilities.formatDate(date, 'GMT+7', "HH:mm")
  let data =
  {
    waktu: waktu,
    chat_id: chat_id,
    message_id: message_id
  }

  if (!jadwalHapus) return user.setValue('jadwalHapus', JSON.stringify([data]));

  jadwalHapus.push(data);
  return user.setValue('jadwalHapus', JSON.stringify(jadwalHapus));
}


// base URL
let base_url_api = 'https://api.myquran.com/v1'
let fetchAPI = new tg.fetch(base_url_api)

function lihatDaftar() {

let r = user.getValue('daftar')

if(!r) return Logger.log('Daftar kosong!')

r = JSON.parse(r)

Logger.log(JSON.stringify(r))

}

function tambahData() {

let data = []
let newId = -1001234685537

data.push(String(newId))

 let r = user.setValue('daftar', JSON.stringify(data))

console.log('Berhasil!')
}

// jalankan untuk mendapatkan ID lokasi
function cariIDLokasi() {
  let data = fetchAPI.get('/sholat/kota/cari/' + lokasi)
  Logger.log(tg.util.outToJSON(data, 1))
  return data;
}

function deleteJadwalSholat() {
  user.delete('sholat');
}

function getAPISholat() {
  try {
    let waktu = Utilities.formatDate(new Date(), zonaTime, "yyyy-MM")
    let pecah = waktu.split('-')
    let tahun = pecah[0]
    let bulan = pecah[1]

    // dapatkan jadwal langsung 1 bulan
    var hasil = fetchAPI.get('/sholat/jadwal/' + idLokasi + '/' + tahun + '/' + bulan)
    if (!hasil.status) return hasil;
    hasil.data.bulan = bulan
    user.setValue('sholat', JSON.stringify(hasil))
    let data = hasil.data;
    Logger.log(`${data.id}\n\n${data.lokasi}\n${data.daerah}` + '\n\nMendapatkan ' + data.jadwal.length + ' jadwal data.')
  } catch (e) {
    var hasil = { status: false, message: e.message }
  }
  return hasil;
}

function getDBholat() {
  let sholat = user.getValue('sholat')
  if (!sholat) return { status: false, message: 'Tidak ada data.' };
  sholat = JSON.parse(sholat)

  let bulan = Utilities.formatDate(new Date(), zonaTime, "MM")
  if (!sholat.data.bulan) return { status: false, message: 'Tidak ada field bulan' };-1001234685537
  if (!sholat.data.bulan == bulan) return { status: false, message: 'Tidak terdapat data bulan ' + bulan };

  var hasil = sholat
  let data = hasil.data;
  Logger.log(`getDBholat: ${data.id}\n\n${data.lokasi}\n${data.daerah}` + '\n\nTerdapat ' + data.jadwal.length + ' jadwal data.')
  // Logger.log(`sample: ${tg.util.outToJSON(data.jadwal[0])}`)
  return hasil;
}

function tampilkanJadwal() { 
  let infoSholat = getDBholat()
  let jadwal = ''

  if (!infoSholat.status) {
    let ret = getAPISholat()
    return tg.sendMessage(adminBot, `🚫 ${infoSholat.message ? infoSholat.message : '-'}\n⏳ Proses mendapatkan data API Sholat.\n🔖 Hasil: ${ret.status ? '✅ sukses.' : '📛 ' + ret.message}`)
  }

  let date = new Date()
  let waktuSekarang = Utilities.formatDate(date, zonaTime, "HH:mm")
  let tanggalSekarang = Utilities.formatDate(date, zonaTime, "dd")

  let index = parseInt(tanggalSekarang) - 1
  let data = infoSholat.data

  // variable pengganti template
  let lokasi = data.lokasi
  let daerah = data.daerah
  let hariTanggal = data.jadwal[index].tanggal
  let waktu = waktuSekarang;
  let jadwalSemua = ''
  let pesan = templatePesan

  let kirim = false;

  // test case untuk versi develop
  aktif.test = waktuTest
  data.jadwal[index].test = waktuSekarang
  customPesan.test = templatePesan + '\n\n 💬 ini adalah quote test\n\n' + quoteRandom
  if (!waktuTest) {
    delete aktif.test;
    delete data.jadwal[index].test;
  }

  tg.util.forEach(data.jadwal[index], (data, kunci) => {
    if (aktif[kunci]) {
      if (data == waktuSekarang) {
        jadwalSemua += `\n ➥ ${kunci.padStart(7, ' ')}: ${data}`;
        jadwal = kunci.charAt(0).toUpperCase() + kunci.slice(1)
        if (customPesan[kunci]) pesan = customPesan[kunci]
        kirim = true
      } else {
        jadwalSemua += `\n ${kunci.padStart(10, ' ')}: ${data}`;
      }
    }
  })

  jadwalSemua = jadwalSemua.replace('\n', '');

  //Logger.log(`${lokasi}, ${daerah} - ${waktu}\n${jadwal}`)

  pesan = pesan
    .replace(/{lokasi}/gi, lokasi)
    .replace(/{daerah}/gi, daerah)
    .replace(/{waktu}/gi, waktu)
    .replace(/{hariTanggal}/gi, hariTanggal)
    .replace(/{jadwal}/gi, jadwal)
    .replace(/{jadwalSemua}/gi, jadwalSemua)

  Logger.log(pesan);

  if (kirim) {
    // return tg.sendMsg(msg, tg.util.outToJSON(msg));
    try {
   tujuanID.forEach((id) => {
    var res = tg.sendMessage(id, pesan, 'HTML')
    tambahJadwalPenghapusan(res.result.chat.id, res.result.message_id)
})
    } catch (e) {
      tg.sendMessage(adminBot, e.message)
    }
  }

if (jadwalHapus) {
    let indexHapus = []
    tg.util.forEach(jadwalHapus, (data, index) => {
      if (data.waktu == waktuSekarang) {
        try {
          tg.deleteMessage(data.chat_id, data.message_id)
        } catch(e) {
          // tidak perlu dicatch
        }
        indexHapus.push(index)
      }
    })

    // dibuat terpisah, karena bisa jadi waktunya sama (multi tujuan ID)
    if (indexHapus.length > 0) {
      indexHapus.sort().reverse()

      indexHapus.forEach((data) => {
        jadwalHapus.splice(data, 1)
      })
      user.setValue('jadwalHapus', JSON.stringify(jadwalHapus))
    }
  }
  
}
