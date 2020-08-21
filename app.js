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
//cara1
console.log("cara1")
data.hitungJarak2(jamAwal, jamAkhir)


//Cara2
console.log("cara 2")
data.hitungJarak(hasil)

