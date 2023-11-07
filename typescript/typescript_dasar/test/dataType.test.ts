// data types primitif
describe('Data type', function() {
  it('should must declare', function() {
    const name: string = 'ikhsan maulana';
    const balance: number = 100
    const isVip: boolean = true

    console.info(name)
    console.info(balance)
    console.info(isVip)
  })
})

// data types array
describe('Data type array', function() {
  it('should must declare an array', function() {
    const name: string[] = ['ikhsan', 'muhamad', 'maulana']
    const age: number[] = [19, 2003]

    console.info(name)
    console.info(age)
  })

  it('should support an ReadOnlyArray', function() {
    // adalah type data array yang tidak dapat diubah
    const hobbies: ReadonlyArray<string> = ["membaca", "menulis"]

    console.info(hobbies)
  })

  it('should support an tuple array', function() {
    // adalah type data array yang sudah ditentukan diawal dan tidak bisa diubah
    const person: readonly [string, number, string]= ['ikhsan', 19, "cianjur"]

    console.info(person[0])
    console.info(person[2])
  })

  it('should support an any type', function() {
    // adalah type data yang support semua type but not recommend
    const person: any = {
      name: 'ikhsan',
      age: 19,
    }

    console.info(person)
  })

  it('should support an union type', function() {
    // adalah type data yang support beberapa type sesuai yang di declare
    const person: number | string = 'ikhsan'

    console.info(person)
  })
})