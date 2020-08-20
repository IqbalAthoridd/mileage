module.exports = {
    convertWaktu: (jamA, jamB) => {

        let jam = jamB.jam - jamA.jam
        let menit = jamA.menit - jamB.menit
        let detik = jamA.detik - jamB.detik
        let recentDetik = 0

        menit = jam * 60 - menit
        detik = menit * 60 - detik

        for (i = jamA.detik; i <= detik; i++) {
            if (i === 60 || recentDetik + 60 === i) {
                recentDetik = i
                jamA.menit += 1

            }

        }
        let hasilDetik = detik - recentDetik
        const hasil = {
            menit: jamA.menit - 12,
            detik: hasilDetik,

        }
        return hasil
    },

    hitungJarak: (hasil) => {
        let kecepatan = 6
        let jarak = 0
        let recentMenit = 0
        let sisaMenit = 0

        for (i = 1; i <= hasil.menit; i++) {

            jarak += kecepatan * 60
            if (i === 5) {
                kecepatan += 2

            } else if (i === 15 || i === recentMenit + 10) {
                recentMenit = i
                kecepatan += 1
            }
        }
        sisaMenit = hasil.menit - recentMenit
        sisaMenit = sisaMenit * 60 + hasil.detik
        jarak = jarak + kecepatan * sisaMenit
        console.log(`jarak yang di tempuh adalah ${jarak / 1000} km`)
    }
}