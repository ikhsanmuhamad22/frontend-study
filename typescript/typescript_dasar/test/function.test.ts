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
});