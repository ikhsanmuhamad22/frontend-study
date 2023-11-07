import { Employe, Menager } from "../src/employe";
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

  it('should support indexable interface', () => {
    interface StringArray {
      [index: number]: string
    }

    const name: StringArray = ['ikhsan', 'muhamad']
    expect(name[0]).toBe('ikhsan')
  });

  it('should support indexable interface for non index', () => {
    interface StringDictionary {
      [key: string]: string
    }

    const name: StringDictionary = {
      "name": "ikhsan",
      "address": "indonesia"
    }
    expect(name["name"]).toBe('ikhsan')
    expect(name["address"]).toBe('indonesia')
  });

  it('should support extends interface', () => {
    const employe: Employe = {
      id: '1',
      name: 'ikhsan',
      division: 'IT'
    }
    const menager: Menager = {
      id: '1',
      name: 'ikhsan',
      division: 'IT',
      numberOfEmployes: 12
    }

    console.info(menager)
  });

  it('should suport function in interface', () => {
    interface Person {
      name: string;
      sayHello(name: string): string
    }

    const person: Person = {
      name: 'ikhsan',
      sayHello: function (name: string):string {
        return `hello ${name} my name is ${this.name}`
      }
    }
    console.info(person.sayHello('rahma'))
  });
});