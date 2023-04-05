function convertNilai() {
  var nilai = prompt("Masukkan Nilai Anda:");
  if (nilai >= 90 && nilai <= 100) {
    alert("Nilai anda A");
  } else if (nilai >= 80 && nilai < 90) {
    alert("Nilai anda B");
  } else if (nilai >= 70 && nilai < 80) {
    alert("Nilai anda C");
  } else if (nilai >= 60 && nilai < 70) {
    alert("Nilai anda D");
  } else if (nilai < 60) {
    alert("Nilai anda E");
  } else {
    alert("Nilai yang dimasukkan salah");
  }
}
convertNilai();
