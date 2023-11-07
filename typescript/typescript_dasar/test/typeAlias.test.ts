import { Category, Product } from "../src/type-alias";

describe('Type Alias', () => {
  it('should support in typescript', () => {
    const category: Category = {
      id: 1,
      name: 'phone'
    }
    const product: Product = {
      id: 1,
      name: 'samsung s20s',
      price: 200000,
      category: category
    }
  });
});