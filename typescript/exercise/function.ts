// function time yang mereturn sesuai waktu yang diterima
const greetingTime = (time: number): string => {
  // saya gunain format number jam langsung karna js gk nerima number dengan format 0 di depan
  if(time <= 9  ) {
    return 'selamat pagi'
  } else if (time <= 14) {
    return 'selamat siang'
  } else if (time <= 19) {
    return 'selamat sore'
  } else if (time >= 20 && time <= 24) {
    return 'selamat malam'
  } else {
    return 'format waktu yang anda masukan salah'
  }
}
console.log(greetingTime(5));
console.log(greetingTime(10));
console.log(greetingTime(20));
console.log(greetingTime(30));

// function yang menghitung sebuah string yang diinput
const countTextLength = (string: string): number => {
  const result = string.split(' ').join('')
  return result.length
}

console.log(countTextLength('ikhsan I I  i i i'));

// function pembulatan angka desimal
function numberRounding(value: number): number {
  const decimalPart = value - Math.floor(value); 

  if (decimalPart < 0.3) {
    return Math.floor(value);
  } else if (decimalPart < 0.7) {
    return Math.floor(value) + 0.5;
  } else {
    return Math.ceil(value);
  }
}
console.log(numberRounding(3.2))
console.log(numberRounding(3.6))
console.log(numberRounding(3.8))