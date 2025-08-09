window.onload = function() {
  const harcamalar = harcamalariYukle();
  listeleHarcama(harcamalar);
};

// Yeni harcama ekleme örneği
function yeniHarcamaEkle(tutar) {
  const harcama = { tutar: tutar, tarih: new Date().toISOString() };
  kaydetHarcama(harcama);

  const harcamalar = harcamalariYukle();
  listeleHarcama(harcamalar);
}
