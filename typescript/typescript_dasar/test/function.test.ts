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

  it('should support function overloading', () => {
    function callme(value: number): number;
    function callme(value: string): string;
    function callme(value: any): any {
      if(typeof value === 'string') {
        return value.toUpperCase()
      } else if ( typeof value === 'number') {
        return value * 10
      }
    }

    expect(callme('ikhsan')).toBe('IKHSAN')
    expect(callme(10)).toBe(100)
  });

  it('should function as parameter', () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `hello ${filter(name)}`
    }
    // function toUpper(name: string):string {
    //   return name.toUpperCase()
    // }

    expect(sayHello('ikhsan', (name: string):string => name.toUpperCase())).toBe('hello IKHSAN')
  });
});