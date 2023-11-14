// Buatlah sebuah fungsi yang menerima object yang terdiri dari nama, umur, tanggal lahir dan alamat.
// Kembalikan nilai “ Nama saya {nama}, berumur {umur}, tanggal lahir saya {tanggal lahir}. Tempat tinggal saya {alamat}, senang bertemu dengan Anda ”.
interface objMe {
  nama: string;
  umur: number;
  tanggalLahir: string;
  alamat: string;
}
const sayHello = (obj: objMe): string => {
  return `Nama saya ${obj.nama}, berumur ${obj.umur}, tanggal lahir saya ${obj.tanggalLahir}. Tempat tinggal saya ${obj.alamat}, senang bertemu dengan Anda `
} 

console.log(sayHello({nama: 'ikhsan', umur: 19, tanggalLahir: '16 juli 2003', alamat: 'cianjur selatan'}))



// Buatlah fungsi yang mengembalikan object baru, dengan parameter string yang dijadikan key pada object baru tersebut.
// Contoh parameter yang diinput adalah tes dan tes2 secara berurutan dengan value otomatis sesuai urutan data yang dimasukkan, maka outputnya { tes: 1, tes2: 2 }
function createObject(...keys: string[]): { [key: string]: number } {
  const result: { [key: string]: number } = {};

  keys.forEach((key, index) => {
    result[key] = index + 1;
  });

  return result;
}

const resultObject = createObject('tes', 'tes2', 'test3');
console.log(resultObject);




// Diketahui parameter yang diinput dalam sebuah fungsi adalah { minus: 5, times: 3, modulus: 2 }. Hitung sesuai key pada object tersebut dengan tanggal lahir kamu.
// Contoh tanggal lahirnya adalah 12 maka pertama-tama kurangi 12 dengan value minus (5), lalu hasilnya kalikan dengan value times (3),
// terakhir hitung modulus dari hasil kali sebelumnya dengan value modulus (2). Kembalikan hasilnya.
interface obj {
  minus: number;
  times: number;
  modulus: number;
}
const getBorn = (obj: obj): number => {
  let myBirthDayDate = 16
  return ( myBirthDayDate - obj.minus ) * obj.times % obj.modulus
}

console.log(getBorn({ minus: 5, times: 3, modulus: 2 }));