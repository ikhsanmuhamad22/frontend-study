// membuat interface data kariawan dan variablenya
interface karyawanType {
  name: string;
  umur: number;
  nik: number;
  'tanggal lahir': string;
  departement: string;
  divisi: string;
  jabatan: string;
  grade: string;
  'no npwp': number;
  'no rekening': number;
  'pemegang rekening': string;
}

const karyawan: karyawanType = {
  name: 'ikhsan',
  umur: 19,
  nik: 3203180607039001,
  "tanggal lahir": '16 juli 2005',
  departement: 'teknologi',
  divisi: 'IT',
  jabatan: 'magang',
  grade: 'A',
  "no npwp": 23746283,
  "no rekening": 843296332,
  "pemegang rekening": 'ihsan'
}

console.log(karyawan)

// membuat variable yang menambahkan 2 angka
const penambahan: number = 2 + 2
console.log(`hasil dari penambahan ${penambahan}`);

// menambahkan variable yang mengurangi 2 angka
const pengurangan: number = 2 - 2
console.log(`hasil dari pengurangan ${pengurangan}`);

// menambahkan variable yang mengurangi 2 angka
const pembagian: number = 2 / 2
console.log(`hasil dari pembagian ${pembagian}`);

