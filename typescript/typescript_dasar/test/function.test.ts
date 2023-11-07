describe('Function', () => {
  it('should support in typescript', () => {
    function sayHello(name: string): string {
      return `hello ${name}`
    }

    expect(sayHello('ikhsan')).toBe('hello ikhsan')

    function printHello(name: string):void {
      console.info(`hello ${name}`)
    }
  });

  it('should support default value', () => {
    function sayHello(name: string = 'guest'): string {
      return `hello ${name}`
    }

    expect(sayHello()).toBe('hello guest')
  });

  it('should support rest parameter', () => {
    function sum(...values: number[]): number {
      let total = 0
      for (const value of values) {
        total += value
      }
      return total
    }

    expect(sum(1,2,3,4,5)).toBe(15)
  });

  it('should support optional parameter', () => {
    function sayHello(firstname : string, lastname?: string): string {
      if(lastname) {
        return `hello ${firstname} ${lastname}`
      } else {
        return `hello ${firstname}`
      }
    }

    expect(sayHello('ikhsan')).toBe('hello ikhsan')
    expect(sayHello('ikhsan', 'maulana')).toBe('hello ikhsan maulana')
  });
});