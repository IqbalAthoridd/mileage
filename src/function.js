module.exports = {
    coverWaktu: (jamA, jamB) => {

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
    }
}