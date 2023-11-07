describe('Optional Parameter', () => {
  it('should support null and undifined', () => {
    function sayHello(name?:string | null) {
      if(name) {
        console.info(`hello ${name}`)
      } else {
        console.info('hello')
      }
    }

    sayHello('ikhsan')
    const name: string | undefined = undefined
    sayHello(name)
    sayHello(null)
  });
});