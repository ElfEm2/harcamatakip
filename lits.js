function listeleHarcama(harcamalar) {
  const listeDiv = document.getElementById('harcamaListesi');
  listeDiv.innerHTML = '';

  if (harcamalar.length === 0) {
    listeDiv.innerHTML = '<i>Henüz harcama yok.</i>';
    return;
  }

  harcamalar.forEach((harcama, index) => {
    const div = document.createElement('div');
    div.textContent = `${index + 1}. Tutar: ${harcama.tutar} TL - Tarih: ${new Date(harcama.tarih).toLocaleString()}`;
    listeDiv.appendChild(div);
  });
}
