export enum CustemerType {
  // cara dibawah akan mengembalikan type number dari index veluenya
  // REGULER,
  // GOLD,
  // PLATINUM

  // optionalnya bisa menggunakan cara di bawah untuk mengembalika datanya berupa strin
  REGULER = 'REGULER',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM'
}

export type Custemer = {
  id: number,
  name: string,
  type: CustemerType
}