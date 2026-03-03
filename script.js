function showLaporan() {
    document.getElementById("laporanSection").style.display = "block";
}

function kirimWA() {

    let kamar = document.getElementById("kamar").value;
    let jemput = document.getElementById("jemput").value;
    let keterangan = document.getElementById("keterangan").value;
    let izin = document.getElementById("izin").value;

    let laporan = [];
    document.querySelectorAll('#laporanSection input[type="checkbox"]:checked')
        .forEach(cb => laporan.push(cb.value));

    let pesan =
`IDENT ALTIE

Nama: Rizki Satya
Kelas: XI A PPLG
Wali Kelas: Ustad Ari Kurniawan
Kamar: ${kamar}
Dijemput Oleh: ${jemput}
Keterangan: ${keterangan}
Yang Mengizinkan: ${izin}
Tambahan: ${laporan.join(", ")}`;

    let url = "https://wa.me/6281809730331?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
}