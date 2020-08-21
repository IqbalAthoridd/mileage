module.exports = {
    convertWaktu: (jamA, jamB) => {

        let jam = jamB.jam - jamA.jam
        let menit = jamA.menit - jamB.menit
        let detik = jamA.detik - jamB.detik
        let recentDetik = 0
        let hasilMenit = 0

        menit = jam * 60 - menit
        detik = menit * 60 - detik

        for (i = jamA.detik; i <= detik; i++) {
            if (i === 60 || recentDetik + 60 === i) {
                recentDetik = i
                hasilMenit += 1
            }

        }
        let hasilDetik = detik - recentDetik
        const hasil = {
            menit: hasilMenit,
            detik: hasilDetik,

        }
        console.log(hasil)
        return hasil
    },

    hitungJarak: (hasil) => {
        let kecepatan = 6
        let jarak = 0
        let recentMenit = 0
        let coba = 0

        for (i = 1; i <= hasil.menit; i++) {
            jarak += kecepatan * 60

            if (i === 5) {
                recentMenit = i
                kecepatan += 2

            } else if (i === recentMenit + 10) {
                recentMenit = i
                kecepatan += 1

            }
        }

        jarak = jarak + kecepatan * hasil.detik
        console.log(`jarak yang di tempuh adalah ${jarak / 1000} km`)
    },

    hitungJarak2: (jamA, jamB) => {
        let jam = jamB.jam - jamA.jam
        let menit = jamA.menit - jamB.menit
        let detik = jamA.detik - jamB.detik
        let recentDetik = 0
        let sisaDetik = 0
        let jarak = 0
        let kecepatan = 6

        menit = jam * 60 - menit
        detik = menit * 60 - detik

        for (i = 1; i <= detik; i++) {
            jarak += kecepatan
            if (i === 300) {
                recentDetik = i
                kecepatan += 2

            } else if (i === recentDetik + 600) {
                recentDetik = i
                kecepatan += 1

            }

        }
        console.log(`jarak yang di tempuh adalah ${jarak / 1000} km`)

    }
}