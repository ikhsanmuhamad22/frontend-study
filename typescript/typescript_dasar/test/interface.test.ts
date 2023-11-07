import { Seller } from "../src/seller";

describe('Interface', () => {
  // sama aja kaya type alias sebenernya
  it('should support in typescript', () => {
    const seller: Seller = {
      id: 1,
      name: 'toko abc',
      nib: '23243123'
    }
  });

  it('should support function interface', () => {
    interface Addfunction {
      (value1: number, value2: number): number
    }

    const add: Addfunction = (value1: number, value2: number) => {
      return value1 + value2
    }

    expect(add(2,2)).toBe(4)
  });
});