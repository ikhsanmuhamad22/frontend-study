// Buatlah sebuah fungsi yang menerima kumpulan angka dalam bentuk array, yang mengembalikan nilai median (nilai tengah) dari kumpulan angka tersebut.
const median = (arr: number[]): any => {
  const result = arr.length / 2
  console.log(arr[Math.floor(result)]);
}

median([1, 2, 3, 3, 2, 1, 2])

// Buatlah sebuah fungsi yang menerima kumpulan angka dalam bentuk array dan kembalikan jumlah semua angka dalam array.
const countArray = (arr: number[]): any => {
  let initial = 0
  const result = arr.reduce((accumilator, current) => accumilator + current, initial)
  console.log(result);
}

countArray([1, 2, 3, 3, 2, 1, 2])

// Buatlah sebuah fungsi yang menerima kumpulan angka dalam bentuk array. Carilah nilai modus dari array tersebut.
// Contoh input : [1, 2, 3, 3, 2, 1, 2] maka nilai modusnya adalah 2 karena 2 yang terbanyak jumlahnya dalam array tersebut.
const modusSearch = (numArr: number[]): any => {
  let objSearch: any = {}
  numArr.map((val: number, index: number) => {
     objSearch[val] ? (objSearch[val] += 1) : (objSearch[val] = 1)
  })
  let modus = 0
  let modusKey = 0
  for (const key in objSearch) {
      objSearch[key] > modus && (modus = objSearch[key], modusKey = +key)
  }
  console.log(modusKey);
}
modusSearch([1, 2, 3, 3, 2, 1, 2])

