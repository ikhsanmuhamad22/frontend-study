import { sayHello } from "../src/say-hello"

describe('sayHello', function() {
  it('shoul return hello ikhsan', function() {
    expect(sayHello('ikhsan')).toBe('hello ikhsan')
  })
})