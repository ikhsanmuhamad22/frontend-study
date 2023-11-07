import { Custemer, CustemerType } from "../src/enum";

describe('Enum', () => {
  // secara default enum akan dikonversi jadi number tapi bisa diubah saat dec enumya
  it('should suport in typescript', () => {
    const custemer: Custemer = {
      id: 1,
      name: 'ikhsan',
      type: CustemerType.GOLD
    }

    console.info(custemer)
  });
});