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
});