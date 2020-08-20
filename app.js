const data = require('./src/function')
let jamAwal = {
    jam: 10,
    menit: 12,
    detik: 21
}

let jamAkhir = {
    jam: 12,
    menit: 0,
    detik: 0
}

const hasil = data.convertWaktu(jamAwal, jamAkhir)
data.hitungJarak(hasil)

