// Buat object dalam array baru dari data mahasiswa yang diinput.
// Diketahui:
// Inputan akan berupa array dengan struktur [ [ nama lengkap (hanya 2 suku kata), gender, tahun lahir ] ].
// Hitung umur mahasiswa dari tahun lahir yang diinput.
// Struktur output yang diharapkan yaitu => [ { firstName: nama depan, lastName: namaBelakang, age: umur }, … ]
const objInArr = (arr: any[]) => {
  let currentYear = new Date().getFullYear()
  let newArr: any = []
  arr.map((val: any, index: number) => {
      let age = currentYear - val[2]
      let name = val[0].split(' ')
      newArr.push({
          firstName: name[0],
          lastName: name[1],
          age
      })
  })
  return newArr
}
console.log(objInArr([['Michael Jackson', 'Male', 2000], ['Michael 2', 'Male', 2002]]))




// Buat object dalam array baru dari data penumpang yang diinput.
// Diketahui:
// Terdapat 10 rute yaitu A, B, C, D, E, F, G, H, I , dan J.
// Misal penumpang berangkat dari A ke B maka jaraknya 1, jadi harus membayar 3000.
// Inputan akan berupa array dengan struktur [ nama penumpang, mulai dari rute, sampai rute ].
// Struktur output yang diharapkan yaitu => [ { penumpang: namaPenumpang, naikDari: ruteMulai, sampai: ruteAkhir, ongkos: jumlahBayar }, … ]
interface penumpangType {
  penumpang: string;
  naikDari: string;
  sampai: string;
  ongkos: number;
}
const countFee = (arr: string[]): [penumpangType] => {
  let route:string[]  = ["A","B","C","D","E","F","G","H","I","J"];
  let objRoute: any = {}
  let fee = 0
  route.map((key) => {
    objRoute[key] = fee += 3000
  })
  const ruteAwal = objRoute[arr[1]]
  const ruteAkhir = objRoute[arr[2]]
  return [{penumpang: arr[0], naikDari: arr[1], sampai: arr[2], ongkos: Math.abs(ruteAwal - ruteAkhir)}]
  

}

console.log(countFee([ 'ikhsan', 'B', 'G' ]))

