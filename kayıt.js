function kaydetHarcama(harcama) {
  let harcamalar = JSON.parse(localStorage.getItem('harcamalar')) || [];
  harcamalar.push(harcama);
  localStorage.setItem('harcamalar', JSON.stringify(harcamalar));
}
