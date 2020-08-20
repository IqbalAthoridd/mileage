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

let kecepatan = 6
let jarak = 0
let recentMenit = 0
let sisaMenit = 0


const hasil = data.coverWaktu(jamAwal, jamAkhir)

for (i = 1; i <= hasil.menit; i++) {

    jarak += kecepatan * 60
    if (i === 5) {
        kecepatan += 2

    } else if (i === 15 || i === recentMenit + 10) {
        recentMenit = i
        kecepatan += 1
        console.log(recentMenit)
    }
}
console.log(jarak)
sisaMenit = hasil.menit - recentMenit
sisaMenit = sisaMenit * 60 + hasil.detik
jarak = jarak + kecepatan * sisaMenit
console.log(`jarak yang di tempu adalah ${jarak} meter`)
