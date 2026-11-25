function multiply(num1, num2, num3) {
  return num1 * num2 * num3
}

function convertToSeconds(minutes) {
  return minutes * 60
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function reverseString(text) {
  return text.split("").reverse().join("")
}

function countVowels(sentence) {
  let count = 0
  let vowels = "aeiou"

  for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i].toLowerCase())) {
      count++
    }
  }
  return count
}

function isPrime(number) {
  if (number <= 1) {
    return false
  }

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

let multiplyResult = multiply(2, 3, 4)
let secondsResult = convertToSeconds(5)
let celsiusResult = fahrenheitToCelsius(68)
let reverseResult = reverseString("JavaScript")
let vowelResult = countVowels("JavaScript")

let primeTest1 = isPrime(7)
let primeTest2 = isPrime(10)
let primeTest3 = isPrime(13)
let primeTest4 = isPrime(1)

console.log("Multiply: ", multiplyResult)
console.log("Seconds: ", secondsResult)
console.log("Celsius: ", celsiusResult)
console.log("Reversed String: ", reverseResult)
console.log("Number of Vowels: ", vowelResult)

console.log("Is 7 prime? ", primeTest1)
console.log("Is 10 prime? ", primeTest2)
console.log("Is 13 prime? ", primeTest3)
console.log("Is 1 prime? ", primeTest4)