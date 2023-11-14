// Buat array dalam object baru dari data siswa yang diinput.
// Diketahui:
// Inputan akan berupa array in object dengan struktur [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ].
// Bagilah data input berdasarkan kelasnya.
// Struktur output yang diharapkan yaitu => { namaKelas : [ { name: namaSiswa, score: nilaiRapor } ], … }.
const arrInObj = (arr: any) => {
    let newObj: any = {}
    arr.map((val: any, index: number) => {
       newObj[val.class] ? (newObj[val.class] = [
        ...newObj[val.class],
        { name: val.name, score: val.score }])
        : (newObj[val.class] = [{ name: val.name, score: val.score }])
    })
    return newObj
}
console.log(arrInObj([
    { name: 'Ujang', score: 70, class: 'melati'},
    { name: 'Asep', score: 80, class: 'mawar'},
    { name: 'Udin', score: 70, class: 'melati'}
]))




// Buat array dalam object baru dari data siswa yang diinput.
// Diketahui:
// Inputan akan berupa array in object dengan struktur [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ].
// Bagilah data input berdasarkan score, jika score diatas 75 maka kategorinya “lulus” dan selain itu kategorinya “gagal”.
// Struktur output yang diharapkan yaitu => { lulus : [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ], gagal : [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ] }.
const scoreSiswa = (arr: any) => {
  let newObj: any = { lulus: [], gagal: [] }
  arr.map((val: any) => {
    if(val.score > 75) {
      newObj.lulus.push(val)
    } else {
      newObj.gagal.push(val)
    }
  })
  return newObj
}
console.log(scoreSiswa([{ name: 'ikhsan', score: 100, class: '1A' }, { name: 'rahma', score: 50, class: '1B' }, { name: 'ridwan', score: 90, class: '1A' }]))



// Diketahui variable data siswa dengan contoh struktur:
// [ { nama: “Rojali”, skor: 70 }, …dst ]
// Buatlah sebuah fungsi yang menerima data nilai siswa dalam bentuk array of object. Kembalikanlah array of object yang hanya berisi data siswa yang lulus dimana minimal score yang lulus adalah 75.
// Contoh output :
// [ { nama: “Ucup”, skor: 90 }, …dst ]
const passSiswa = (arr: any) => {
  let newArr:any = []
  arr.map((val: any) => {
    if(val.skor >= 75){
      newArr.push(val)
    }
  })
  return newArr
}
console.log(passSiswa([{nama:'ucup', skor: 90},{nama:'hasan', skor: 70},{nama:'isan', skor: 100}]));