// Buatkan sebuah fungsi yang mengecek angka yang diterima fungsi tersebut adalah bilangan positif atau negatif.  

const positifNegatif = (num: number): string => {
  if(num < 0) {
    return 'negatif'
  }
  return 'positif'
}

console.log(positifNegatif(-1));