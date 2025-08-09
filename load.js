function harcamalariYukle() {
  return JSON.parse(localStorage.getItem('harcamalar')) || [];
}
